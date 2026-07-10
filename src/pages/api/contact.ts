import type { APIRoute } from "astro";
import { site } from "@/data/site";

// On-demand (server) route — never prerendered, so the Resend API key stays
// server-side only.
export const prerender = false;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );

export const POST: APIRoute = async ({ request }) => {
  // Accept both form posts and JSON.
  let data: Record<string, string> = {};
  const type = request.headers.get("content-type") ?? "";
  try {
    if (type.includes("application/json")) {
      data = await request.json();
    } else {
      const form = await request.formData();
      form.forEach((v, k) => (data[k] = typeof v === "string" ? v : ""));
    }
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  // Honeypot: silently accept bot submissions without sending.
  if (data._gotcha) return json({ ok: true });

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const company = (data.company ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const interest = (data.interest ?? "").trim();
  const message = (data.message ?? "").trim();

  // Validation.
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || !interest) {
    return json({ ok: false, error: "Please fill in your name, a valid email and what we can help with." }, 422);
  }

  const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return json({ ok: false, error: "The contact form is not configured yet. Please email us directly." }, 500);
  }

  const from = import.meta.env.RESEND_FROM ?? process.env.RESEND_FROM ?? "Webmaister <onboarding@resend.dev>";
  const to = import.meta.env.RESEND_TO ?? process.env.RESEND_TO ?? site.email;

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Phone", phone || "—"],
    ["Interest", interest],
    ["Message", message || "—"],
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
