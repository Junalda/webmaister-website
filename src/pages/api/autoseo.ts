import type { APIRoute } from "astro";
import crypto from "node:crypto";
import { site } from "@/data/site";

// Webhook for AutoSEO (https://getautoseo.com).
//
// This is a static, git-backed site (no database): published articles are
// committed as Markdown to src/content/blog/, with downloaded hero/infographic
// images stored under public/blog-assets/. Files are keyed by the AutoSEO
// article `id` (aseo-<id>.md), so re-deliveries and `article.updated` events
// upsert the same post instead of creating duplicates. A commit triggers a
// Vercel redeploy that publishes the change.
export const prerender = false;

const env = (k: string): string | undefined => import.meta.env[k] ?? process.env[k];

// The webhook token also doubles as the HMAC secret. It is read only from the
// environment (no secret committed to source). Set AUTOSEO_WEBHOOK_TOKEN in
// Vercel to the value configured in AutoSEO.
const WEBHOOK_TOKEN = env("AUTOSEO_WEBHOOK_TOKEN");

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });

const safeEqual = (a: string, b: string) => {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb);
};

const slugify = (s: string) =>
  s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 90);

const yamlStr = (s: unknown) => `"${String(s ?? "").replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;

// Safe ISO date: never throws on a bad/empty value (falls back to now).
const toIso = (v: unknown): string => {
  const d = new Date(String(v ?? ""));
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
};

const extFor = (url: string, contentType: string) => {
  const m = url.split(/[?#]/)[0].match(/\.([a-zA-Z0-9]{2,5})$/);
  if (m) return m[1].toLowerCase();
  if (contentType.includes("png")) return "png";
  if (contentType.includes("webp")) return "webp";
  if (contentType.includes("gif")) return "gif";
  if (contentType.includes("svg")) return "svg";
  return "jpg";
};

interface CommitFile {
  path: string;
  /** base64-encoded content */
  content: string;
}

async function commitFiles(files: CommitFile[], message: string) {
  const token = env("GITHUB_TOKEN");
  if (!token) throw new Error("GITHUB_TOKEN is not set");
  const repo = env("GITHUB_REPO") ?? "junalda/webmaister-website";
  const branch = env("GITHUB_BRANCH") ?? "main";
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "webmaister-autoseo-webhook",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
  };
  const api = (p: string, init?: RequestInit) =>
    fetch(`https://api.github.com${p}`, { ...init, headers });
  const ok = async (res: Response, what: string) => {
    if (!res.ok) throw new Error(`${what}: ${res.status} ${await res.text()}`);
    return res.json();
  };

  // Resolve the current commit + tree to build on top of.
  const ref = await ok(await api(`/repos/${repo}/git/ref/heads/${branch}`), "get ref");
  const baseCommitSha = ref.object.sha;
  const baseCommit = await ok(await api(`/repos/${repo}/git/commits/${baseCommitSha}`), "get commit");
  const baseTreeSha = baseCommit.tree.sha;

  // One blob per file.
  const tree = [];
  for (const f of files) {
    const blob = await ok(
      await api(`/repos/${repo}/git/blobs`, {
        method: "POST",
        body: JSON.stringify({ content: f.content, encoding: "base64" }),
      }),
      `blob ${f.path}`
    );
    tree.push({ path: f.path, mode: "100644", type: "blob", sha: blob.sha });
  }

  const newTree = await ok(
    await api(`/repos/${repo}/git/trees`, {
      method: "POST",
      body: JSON.stringify({ base_tree: baseTreeSha, tree }),
    }),
    "create tree"
  );
  const newCommit = await ok(
    await api(`/repos/${repo}/git/commits`, {
      method: "POST",
      body: JSON.stringify({ message, tree: newTree.sha, parents: [baseCommitSha] }),
    }),
    "create commit"
  );
  await ok(
    await api(`/repos/${repo}/git/refs/heads/${branch}`, {
      method: "PATCH",
      body: JSON.stringify({ sha: newCommit.sha }),
    }),
    "update ref"
  );
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, OPTIONS",
  "Access-Control-Allow-Headers":
    "Authorization, Content-Type, X-AutoSEO-Signature, X-AutoSEO-Event, X-AutoSEO-Delivery",
};

// Health check / URL verification ping. Always 200 so the endpoint validates.
// `rev` is a deploy marker; `config` reports (booleans only, no secrets)
// whether the required env vars are present in the running deployment.
const baseInfo = () => ({
  ok: true,
  service: "autoseo-webhook",
  rev: "diag-v5",
  methods: ["GET", "POST", "PUT", "PATCH", "OPTIONS"],
  config: {
    autoseoToken: Boolean(WEBHOOK_TOKEN),
    githubToken: Boolean(env("GITHUB_TOKEN")),
    repo: env("GITHUB_REPO") ?? "junalda/webmaister-website",
    branch: env("GITHUB_BRANCH") ?? "main",
  },
});

const health = () =>
  new Response(JSON.stringify(baseInfo()), {
    status: 200,
    headers: { "Content-Type": "application/json", ...CORS },
  });

// Token-gated check that confirms whether GITHUB_TOKEN can actually reach the
// repo (pinpoints the cause of a 500 at the commit step).
const checkGithub = async () => {
  const token = env("GITHUB_TOKEN");
  if (!token) return { ok: false, reason: "GITHUB_TOKEN not set in this deployment" };
  const repo = env("GITHUB_REPO") ?? "junalda/webmaister-website";
  const branch = env("GITHUB_BRANCH") ?? "main";
  const ghHeaders = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "webmaister-autoseo-webhook",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  try {
    // 1) Read test.
    const readRes = await fetch(`https://api.github.com/repos/${repo}/git/ref/heads/${branch}`, {
      headers: ghHeaders,
    });
    const readText = await readRes.text();
    const read = {
      ok: readRes.ok,
      status: readRes.status,
      message: readRes.ok ? "can read repo ref" : readText.slice(0, 200),
    };

    // 2) Write test: create a harmless dangling blob (no commit, no file).
    //    Requires Contents: write. A dangling blob is garbage-collected.
    const writeRes = await fetch(`https://api.github.com/repos/${repo}/git/blobs`, {
      method: "POST",
      headers: { ...ghHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ content: "autoseo write probe", encoding: "utf-8" }),
    });
    const writeText = await writeRes.text();
    const write = {
      ok: writeRes.ok,
      status: writeRes.status,
      message: writeRes.ok ? "can write (Contents: write OK)" : writeText.slice(0, 200),
    };

    return { ok: read.ok && write.ok, read, write };
  } catch (e) {
    return { ok: false, reason: String(e) };
  }
};

const preflight = () =>
  new Response(null, { status: 204, headers: { Allow: "GET, POST, PUT, PATCH, OPTIONS", ...CORS } });

const handleWebhook = async (request: Request): Promise<Response> => {
  // The token must be configured server-side.
  if (!WEBHOOK_TOKEN) {
    console.error("AUTOSEO_WEBHOOK_TOKEN is not set");
    return json({ error: "Webhook not configured" }, 500);
  }

  // Read the raw body ONCE: needed verbatim for the HMAC check.
  const raw = await request.text();

  // 1. Bearer token (required).
  const bearer = (request.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
  if (!bearer || !safeEqual(bearer, WEBHOOK_TOKEN)) {
    return json({ error: "Unauthorized" }, 401);
  }

  // 2. HMAC signature (optional; verified when present).
  const sig = request.headers.get("x-autoseo-signature");
  if (sig) {
    const expected = crypto.createHmac("sha256", WEBHOOK_TOKEN).update(raw, "utf8").digest("hex");
    const given = sig.trim().replace(/^sha256=/i, "");
    if (!safeEqual(expected, given)) return json({ error: "Invalid signature" }, 401);
  }

  // Parse body.
  let body: Record<string, any>;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const event: string = body.event ?? request.headers.get("x-autoseo-event") ?? "";

  // 3. Test pings: acknowledge without creating anything.
  if (event === "test") {
    return json({ url: `${site.url}/test` });
  }

  if (event !== "article.published" && event !== "article.updated") {
    return json({ error: `Unsupported event: ${event || "(none)"}` }, 400);
  }

  try {
    const id = body.id;
    const title = (body.title ?? "").toString().trim();
    if (id === undefined || id === null || !title) {
      return json({ error: "Missing required fields: id, title" }, 400);
    }

    const slug = slugify((body.slug ?? title).toString()) || `post-${id}`;
    const description = (body.metaDescription ?? "").toString().trim() || title;
    const keywords: string[] = Array.isArray(body.keywords) ? body.keywords.map(String) : [];
    const faq: { question: string; answer: string }[] = Array.isArray(body.faqSchema)
      ? body.faqSchema
          .filter((f: any) => f && (f.question || f.answer))
          .map((f: any) => ({ question: String(f.question ?? ""), answer: String(f.answer ?? "") }))
      : [];
    const lang = (body.languageCode ?? "en").toString();
    const pubDate = toIso(body.publishedAt ?? body.createdAt);
    const updatedDate = toIso(body.updatedAt ?? body.publishedAt ?? body.createdAt);

    const files: CommitFile[] = [];

    // Download hero + infographic images and store them locally (no hotlinking).
    // Embedded references in the body are rewritten to the local paths.
    let bodyMarkdown: string = (body.content_markdown ?? body.content_html ?? "").toString();
    let coverLocal: string | undefined;

    const downloadInto = async (remoteUrl: string | null | undefined, name: string) => {
      if (!remoteUrl) return undefined;
      try {
        const res = await fetch(remoteUrl);
        if (!res.ok) throw new Error(`status ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        const ext = extFor(remoteUrl, res.headers.get("content-type") ?? "");
        const localPath = `public/blog-assets/${id}/${name}.${ext}`;
        const publicUrl = `/blog-assets/${id}/${name}.${ext}`;
        files.push({ path: localPath, content: buf.toString("base64") });
        // Rewrite any embedded hotlink to the local copy.
        bodyMarkdown = bodyMarkdown.split(remoteUrl).join(publicUrl);
        return publicUrl;
      } catch (err) {
        console.error(`AutoSEO: failed to download ${name} image`, err);
        return remoteUrl; // graceful fallback: keep remote URL rather than failing
      }
    };

    coverLocal = await downloadInto(body.heroImageUrl, "hero");
    await downloadInto(body.infographicImageUrl, "infographic");

    // Build the Markdown post (keyed by the AutoSEO id for reliable upserts).
    const fm: string[] = [
      "---",
      `title: ${yamlStr(title)}`,
      `description: ${yamlStr(description)}`,
      `slug: ${yamlStr(slug)}`,
      `pubDate: ${pubDate}`,
      `updatedDate: ${updatedDate}`,
      `autoseoId: ${Number(id)}`,
      `lang: ${yamlStr(lang)}`,
      `tags: [${keywords.map(yamlStr).join(", ")}]`,
      `keywords: [${keywords.map(yamlStr).join(", ")}]`,
    ];
    if (coverLocal) fm.push(`cover: ${yamlStr(coverLocal)}`);
    if (body.heroImageAlt) fm.push(`heroAlt: ${yamlStr(body.heroImageAlt)}`);
    if (faq.length) {
      fm.push("faq:");
      for (const f of faq) {
        fm.push(`  - question: ${yamlStr(f.question)}`);
        fm.push(`    answer: ${yamlStr(f.answer)}`);
      }
    }
    fm.push("---", "");
    const fileContent = fm.join("\n") + bodyMarkdown + "\n";

    files.push({
      path: `src/content/blog/aseo-${id}.md`,
      content: Buffer.from(fileContent, "utf8").toString("base64"),
    });

    await commitFiles(
      files,
      `blog(autoseo): ${event === "article.updated" ? "update" : "publish"} "${title}" [#${id}]`
    );

    return json({ url: `${site.url}/blog/${slug}/` }, 200);
  } catch (err) {
    // Return 500 so AutoSEO retries the delivery.
    console.error("AutoSEO webhook failed", err);
    return json({ error: "Internal error while publishing the article" }, 500);
  }
};

// Explicit handler for every HTTP method AutoSEO might use, plus an ALL
// fallback, so the endpoint can never return 405 regardless of adapter quirks.
export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const info: Record<string, unknown> = baseInfo();
  if (url.searchParams.get("check") === "github") {
    const provided =
      (request.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "") ||
      url.searchParams.get("token") ||
      "";
    if (!WEBHOOK_TOKEN || provided !== WEBHOOK_TOKEN) {
      info.github = { ok: false, reason: "unauthorized — append &token=YOUR_AUTOSEO_TOKEN" };
    } else {
      info.github = await checkGithub();
    }
  }
  return json(info);
};
export const HEAD: APIRoute = () => health();
export const OPTIONS: APIRoute = () => preflight();
export const POST: APIRoute = ({ request }) => handleWebhook(request);
export const PUT: APIRoute = ({ request }) => handleWebhook(request);
export const PATCH: APIRoute = ({ request }) => handleWebhook(request);
export const ALL: APIRoute = async ({ request }) => {
  const method = request.method.toUpperCase();
  if (method === "OPTIONS") return preflight();
  if (method === "POST" || method === "PUT" || method === "PATCH") return handleWebhook(request);
  return health();
};
