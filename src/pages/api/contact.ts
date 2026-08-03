import type { APIRoute } from "astro";
import { site } from "@/data/site";

// On-demand (server) route (never prerendered, so  the Resend API key stays
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
    return json({ ok: false, error: "Ongeldige aanvraag." }, 400);
  }

  // Honeypot: silently accept bot submissions without sending.
  if (data._gotcha) return json({ ok: true });

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const company = (data.company ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const interest = (data.interest ?? "").trim();
  const message = (data.message ?? "").trim();

  // Validatie.
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || !interest) {
    return json({ ok: false, error: "Vul uw naam, een geldig e-mailadres en uw vraag in." }, 422);
  }

  const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return json({ ok: false, error: "Het contactformulier is nog niet ingesteld. Mail ons gerust direct." }, 500);
  }

  const from = import.meta.env.RESEND_FROM ?? process.env.RESEND_FROM ?? "HubIzi Schilderwerken <onboarding@resend.dev>";
  const to = import.meta.env.RESEND_TO ?? process.env.RESEND_TO ?? site.email;

  const leeg = "niet ingevuld";
  const rows: [string, string][] = [
    ["Naam", name],
    ["E-mail", email],
    ["Plaats", company || leeg],
    ["Telefoon", phone || leeg],
    ["Onderwerp", interest],
    ["Bericht", message || leeg],
  ];
  const html = `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;color:#14324a">
      <h2 style="margin:0 0 16px">Nieuwe aanvraag via de website</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 16px 6px 0;color:#5a7183;vertical-align:top"><strong>${k}</strong></td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`
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
        subject: `Nieuwe aanvraag van ${name}${company ? ` (${company})` : ""}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error", res.status, detail);
      return json({ ok: false, error: "We konden uw bericht nu niet versturen. Probeer het opnieuw of mail ons direct." }, 502);
    }
  } catch (err) {
    console.error("Resend request failed", err);
    return json({ ok: false, error: "We couldn't send your message right now. Please try again or email us directly." }, 502);
  }

  return json({ ok: true });
};
