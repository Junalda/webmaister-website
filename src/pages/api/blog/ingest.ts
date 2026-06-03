import type { APIRoute } from "astro";

// On-demand endpoint that turns an incoming article into a Markdown post and
// commits it to the repo via the GitHub API, which triggers a Vercel redeploy.
// Designed for GetAutoSEO / Zapier "publish" webhooks.
//
// Required env: BLOG_INGEST_TOKEN, GITHUB_TOKEN
// Optional env: GITHUB_REPO (owner/repo), GITHUB_BRANCH (default "main")
//
// Send JSON, e.g.:
// { "title": "...", "description": "...", "content": "# markdown...",
//   "tags": ["SEO"], "pubDate": "2026-06-01", "cover": "https://...",
//   "slug": "optional-custom-slug" }
// (use "html" instead of "content" to publish raw HTML.)
export const prerender = false;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

const yaml = (s: string) => `"${String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;

export const POST: APIRoute = async ({ request }) => {
  const env = (k: string) => import.meta.env[k] ?? process.env[k];

  const ingestToken = env("BLOG_INGEST_TOKEN");
  const githubToken = env("GITHUB_TOKEN");
  if (!ingestToken || !githubToken) {
    console.error("Blog ingest not configured (BLOG_INGEST_TOKEN / GITHUB_TOKEN missing)");
    return json({ ok: false, error: "Blog ingest is not configured." }, 500);
  }

  // Auth: Authorization: Bearer <token>  (or ?token= / body token)
  const auth = request.headers.get("authorization") ?? "";
  const url = new URL(request.url);
  let body: Record<string, any> = {};
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Expected a JSON body." }, 400);
  }
  const provided = auth.replace(/^Bearer\s+/i, "") || url.searchParams.get("token") || body.token;
  if (provided !== ingestToken) return json({ ok: false, error: "Unauthorized." }, 401);

  const title = (body.title ?? "").toString().trim();
  const markdown = (body.content ?? body.markdown ?? "").toString();
  const html = (body.html ?? body.contentHtml ?? "").toString();
  if (!title || (!markdown && !html)) {
    return json({ ok: false, error: "title and content (or html) are required." }, 422);
  }

  const slug = slugify((body.slug ?? title).toString()) || `post-${Date.now()}`;
  const description = (body.description ?? body.excerpt ?? "").toString().trim() || title;
  const author = (body.author ?? "Webmaister").toString().trim();
  const cover = (body.cover ?? body.image ?? "").toString().trim();
  const tags: string[] = Array.isArray(body.tags)
    ? body.tags.map((t: unknown) => String(t))
    : typeof body.tags === "string"
      ? body.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
      : [];
  const pub = body.pubDate ? new Date(body.pubDate) : new Date();
  const pubDate = (isNaN(pub.getTime()) ? new Date() : pub).toISOString().slice(0, 10);

  const frontmatter = [
    "---",
    `title: ${yaml(title)}`,
    `description: ${yaml(description)}`,
    `pubDate: ${pubDate}`,
    `author: ${yaml(author)}`,
    `tags: [${tags.map(yaml).join(", ")}]`,
    ...(cover ? [`cover: ${yaml(cover)}`] : []),
    "---",
    "",
  ].join("\n");
  const fileBody = frontmatter + (markdown || html) + "\n";

  const repo = env("GITHUB_REPO") ?? "junalda/webmaister-website";
  const branch = env("GITHUB_BRANCH") ?? "main";
  const path = `src/content/blog/${slug}.md`;
  const apiBase = `https://api.github.com/repos/${repo}/contents/${path}`;
  const gh = {
    Authorization: `Bearer ${githubToken}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "webmaister-blog-ingest",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  try {
    // If the file already exists we need its sha to update it.
    let sha: string | undefined;
    const head = await fetch(`${apiBase}?ref=${encodeURIComponent(branch)}`, { headers: gh });
    if (head.ok) sha = (await head.json()).sha;

    const put = await fetch(apiBase, {
      method: "PUT",
      headers: { ...gh, "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `blog: ${sha ? "update" : "add"} "${title}"`,
        content: Buffer.from(fileBody, "utf8").toString("base64"),
        branch,
        ...(sha ? { sha } : {}),
      }),
    });

    if (!put.ok) {
      const detail = await put.text();
      console.error("GitHub commit failed", put.status, detail);
      return json({ ok: false, error: "Could not publish the post." }, 502);
    }
  } catch (err) {
    console.error("Blog ingest failed", err);
    return json({ ok: false, error: "Could not publish the post." }, 502);
  }

  return json({ ok: true, slug, path, url: `/blog/${slug}/` }, 201);
};
