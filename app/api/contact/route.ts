import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, whatsapp, company, helpWith, message } =
      await req.json();

    const { error } = await resend.emails.send({
      from: "Editors Street <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "editorsstreet@gmail.com"],
      replyTo: email,
      subject: `New Enquiry from ${name} — ${helpWith || "General"}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#0a0a0a;color:#e4e4e7;padding:32px;border-radius:12px;border:1px solid #27272a;">
          <h2 style="color:#ccff00;margin-top:0;font-size:22px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;width:130px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #27272a;">${name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;">Email</td><td style="padding:10px 0;border-bottom:1px solid #27272a;"><a href="mailto:${email}" style="color:#ccff00;">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;">WhatsApp</td><td style="padding:10px 0;border-bottom:1px solid #27272a;">${whatsapp || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;">Company</td><td style="padding:10px 0;border-bottom:1px solid #27272a;">${company || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;">Service</td><td style="padding:10px 0;border-bottom:1px solid #27272a;">${helpWith || "—"}</td></tr>
          </table>
          ${
            message
              ? `<div style="margin-top:24px;">
                  <p style="color:#a1a1aa;margin-bottom:8px;">Message:</p>
                  <p style="background:#111;padding:16px;border-radius:8px;border-left:3px solid #ccff00;margin:0;">${message}</p>
                </div>`
              : ""
          }
          <p style="margin-top:28px;font-size:11px;color:#52525b;">Sent from editorsstreet.com contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
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
