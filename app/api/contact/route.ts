import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Escape user input before putting it into HTML
const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;

    if (!apiKey || !to) {
      console.error("Missing env vars:", {
        RESEND_API_KEY: !!apiKey,
        CONTACT_EMAIL: !!to,
      });
      return NextResponse.json(
        { success: false, error: "Server is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, whatsapp, company, helpWith, message } =
      await req.json();

    if (!name || !email || !helpWith) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      // Use a verified domain address here once you verify your domain in Resend,
      // e.g. "Editors Street <contact@editorsstreet.com>".
      // With onboarding@resend.dev, you can ONLY send to your own Resend account email.
      from: process.env.CONTACT_FROM || "Editors Street <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject: `New Enquiry from ${String(name).slice(0, 100)} — ${
        String(helpWith).slice(0, 100) || "General"
      }`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#0a0a0a;color:#e4e4e7;padding:32px;border-radius:12px;border:1px solid #27272a;">
          <h2 style="color:#ccff00;margin-top:0;font-size:22px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;width:130px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #27272a;">${esc(name)}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;">Email</td><td style="padding:10px 0;border-bottom:1px solid #27272a;"><a href="mailto:${esc(email)}" style="color:#ccff00;">${esc(email)}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;">WhatsApp</td><td style="padding:10px 0;border-bottom:1px solid #27272a;">${esc(whatsapp) || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;">Company</td><td style="padding:10px 0;border-bottom:1px solid #27272a;">${esc(company) || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;">Service</td><td style="padding:10px 0;border-bottom:1px solid #27272a;">${esc(helpWith) || "—"}</td></tr>
          </table>
          ${
            message
              ? `<div style="margin-top:24px;">
                  <p style="color:#a1a1aa;margin-bottom:8px;">Message:</p>
                  <p style="background:#111;padding:16px;border-radius:8px;border-left:3px solid #ccff00;margin:0;white-space:pre-wrap;">${esc(message)}</p>
                </div>`
              : ""
          }
          <p style="margin-top:28px;font-size:11px;color:#52525b;">Sent from editorsstreet.com contact form</p>
        </div>
      `,
    });

    if (error) {
      // Check Vercel logs for this line: it shows the exact reason Resend rejected the email
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json(
        { success: false, error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}