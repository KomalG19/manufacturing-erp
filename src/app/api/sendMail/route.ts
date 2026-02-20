import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "../../../../lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // 1️⃣ Admin Notification Mail
    const adminMail = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER as string,
      subject: `📩 ${subject} - from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; background: #f9fafc; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); overflow: hidden;">
            <div style="background: #5dd9fff2; color: #00264C; padding: 16px 24px;">
              <h2 style="margin: 0;">📬 New Contact Message</h2>
            </div>
            <div style="padding: 24px;">
              <p style="font-size: 16px; color: #333;">You’ve received a new contact message from your BizPlus ERP website:</p>
              <table style="width: 100%; margin-top: 16px; border-collapse: collapse;">
                <tr><td style="padding: 8px 0;"><strong>Name:</strong></td><td>${name}</td></tr>
                <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td>${email}</td></tr>
                <tr><td style="padding: 8px 0;"><strong>Phone:</strong></td><td>${phone}</td></tr>
                <tr><td style="padding: 8px 0; vertical-align: top;"><strong>Message:</strong></td><td>${message}</td></tr>
              </table>
            </div>
            <div style="background: #f3f4f6; padding: 16px; text-align: center; font-size: 14px; color: #555;">
              <p style="margin: 0;">🚀 BizPlus ERP Contact Form Notification</p>
            </div>
          </div>
        </div>
      `,
    };

    await sendMail(adminMail);

    // 2️⃣ Thank You Mail
    const thankYouMail = {
      from: `"BizPlus ERP" <${process.env.EMAIL_USER as string}>`,
      to: email,
      subject: `🙏 Thank you for contacting BizPlus ERP`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); overflow: hidden;">
            <div style="background: #5dd9fff2; color: #00264C; text-align: center; padding: 14px;">
              <h1 style="margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
            </div>
            <div style="padding: 24px;">
              <p style="font-size: 16px; color: #333;">We truly appreciate you reaching out to <strong>BizPlus ERP🚀</strong>.</p>
              <p style="font-size: 15px; color: #444;">Your message has been received, and our team will get in touch with you shortly.</p>

              <a href="https://bizpluserp.vercel.app/" 
                 style="display: inline-block; margin-top: 20px; padding: 12px 24px; background: #5dd9fff2; color: #00264C; border-radius: 8px; text-decoration: none; font-weight: 500;">
                Visit BizPlus ERP
              </a>

              <p style="margin-top: 24px; color: #666; font-size: 14px;">
                Best Regards,<br/>
                <strong>BizPlus ERP Team</strong>
              </p>
            </div>  
          </div>
        </div>
      `,
    };

    await sendMail(thankYouMail);

    return NextResponse.json({
      success: true,
      message: "Mail sent successfully!",
    });

  } catch (error) {
    console.error("Mail Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}