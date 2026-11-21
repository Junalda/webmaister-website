import type { APIRoute } from "astro";
import { site } from "@/data/site";

// On-demand (server) route, never prerendered, so the Resend API key and
// the Turnstile secret stay server-side only.
export const prerender = false;

const MIN_SUBMIT_MS = 3000;
// A client clock a little ahead of the server is normal. Don't treat that
// as an instant submission.
const CLOCK_SKEW_MS = 60_000;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );

const field = (data: Record<string, string>, key: string) => (data[key] ?? "").trim();

// Static `import.meta.env.NAME` access so Vite inlines the value at build
// time, with process.env as the runtime fallback Vercel provides.
const readEnv = (inlined: string | undefined, runtime: string | undefined) =>
  (inlined || runtime || "").trim();

// Bots get the same success response as a real submission.
const dropped = (reason: string) => {
  console.info(`contact: dropped (${reason})`);
  return json({ ok: true });
};

// Missing, instant, or impossibly future timestamps are dropped. A negative
// elapsed time inside the skew window means the browser clock is ahead.
const tooFast = (raw: string) => {
  const started = Number(raw);
  if (!Number.isFinite(started) || started <= 0) return true;
  const elapsed = Date.now() - started;
  if (elapsed < 0) return elapsed <= -CLOCK_SKEW_MS;
  return elapsed < MIN_SUBMIT_MS;
};

const verifyTurnstile = async (token: string, request: Request, secret: string) => {
  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "";
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        response: token,
        ...(ip ? { remoteip: ip } : {}),
      }),
    });
    if (!res.ok) {
      console.error("Turnstile HTTP", res.status);
      return false;
    }
    const result = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (result.success !== true) console.error("Turnstile rejected", result["error-codes"]);
    return result.success === true;
  } catch (err) {
    console.error("Turnstile request failed", err);
    return false;
  }
};

export const POST: APIRoute = async ({ request }) => {
  // Accept both form posts and JSON.
  let data: Record<string, string> = {};
  const type = request.headers.get("content-type") ?? "";
  try {
    if (type.includes("application/json")) {
      const body = await request.json();
      if (body && typeof body === "object") {
        for (const [key, value] of Object.entries(body as Record<string, unknown>)) {
          if (typeof value === "string") data[key] = value;
          else if (typeof value === "number" && Number.isFinite(value)) data[key] = String(value);
        }
      }
    } else {
      const form = await request.formData();
      form.forEach((value, key) => {
        if (typeof value === "string") data[key] = value;
      });
    }
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  // Honeypot. `website` is the field the forms render. `_gotcha` stays
  // accepted so a cached copy of the previous form still drops bots.
  if (field(data, "website") || field(data, "_gotcha")) return dropped("honeypot");
  if (tooFast(field(data, "form_started_at"))) return dropped("too-fast");

  const name = field(data, "name");
  const email = field(data, "email");
  const company = field(data, "company");
  const phone = field(data, "phone");
  const interest = field(data, "interest");
  const message = field(data, "message");

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || !interest) {
    return json({ ok: false, error: "Please fill in your name, a valid email and what we can help with." }, 422);
  }

  // Both keys are required. If either is missing, skip Turnstile so the
  // form keeps working before the widget is created.
  const turnstileSecret = readEnv(import.meta.env.TURNSTILE_SECRET_KEY, process.env.TURNSTILE_SECRET_KEY);
  const turnstileSiteKey = readEnv(import.meta.env.PUBLIC_TURNSTILE_SITE_KEY, process.env.PUBLIC_TURNSTILE_SITE_KEY);
  if (turnstileSecret && turnstileSiteKey) {
    const token = field(data, "cf-turnstile-response");
    if (!token || !(await verifyTurnstile(token, request, turnstileSecret))) {
      return json(
        { ok: false, error: "Please confirm you're human and try again, or email us directly." },
        403
      );
    }
  } else if (turnstileSecret || turnstileSiteKey) {
    console.warn("Turnstile is partially configured; verification is skipped until both keys are set.");
  }

  const apiKey = readEnv(import.meta.env.RESEND_API_KEY, process.env.RESEND_API_KEY);
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return json({ ok: false, error: "The contact form is not configured yet. Please email us directly." }, 500);
  }

  const from = readEnv(import.meta.env.RESEND_FROM, process.env.RESEND_FROM) || "Webmaister <onboarding@resend.dev>";
  const to = readEnv(import.meta.env.RESEND_TO, process.env.RESEND_TO) || site.email;

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "-"],
    ["Phone", phone || "-"],
    ["Interest", interest],
    ["Message", message || "-"],
  ];
  const html = `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;color:#0a0b12">
      <h2 style="margin:0 0 16px">New Growth Strategy Call request</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 16px 6px 0;color:#565d70;vertical-align:top"><strong>${k}</strong></td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`
          )
          .join("")}
      </table>
    </div>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New strategy call request from ${name}${company ? ` (${company})` : ""}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error", res.status, detail);
      return json({ ok: false, error: "We couldn't send your message right now. Please try again or email us directly." }, 502);
    }
  } catch (err) {
    console.error("Resend request failed", err);
    return json({ ok: false, error: "We couldn't send your message right now. Please try again or email us directly." }, 502);
  }

  return json({ ok: true });
};
