import { NextResponse } from "next/server";
import { sendMail } from "../../../../lib/mailer";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      company,
      website,
      city,
      email,
      description,
    } = body;

    // ✅ Required validation (industry removed)
    if (!name || !phone || !company || !city || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Indian phone validation
    if (!/^[6-9]\d{9}$/.test(String(phone))) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    // ✅ Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // ✅ Website validation 
    if (website) {
      try {
        const formattedUrl = website.startsWith("http")
          ? website
          : `https://${website}`;
        new URL(formattedUrl);
      } catch {
        return NextResponse.json(
          { error: "Invalid website URL" },
          { status: 400 }
        );
      }
    }

    const lead = {
      name,
      phone,
      company,
      website,
      city,
      email,
      description,
    };

    console.log("New lead received:", lead);

    const notifyTo =
      process.env.NOTIFY_EMAIL || "info@bizpluserp.com";

    const fromUser =
      process.env.EMAIL_USER ||
      `no-reply@${process.env.SMTP_HOST || "bizpluserp.com"}`;

    const html = `
      <h2>New ERP Lead Received</h2>
      <p><strong>Name:</strong> ${String(name)}</p>
      <p><strong>Email:</strong> ${String(email)}</p>
      <p><strong>Phone:</strong> ${String(phone)}</p>
      <p><strong>Company:</strong> ${String(company)}</p>
      <p><strong>Website:</strong> ${String(website || "-")}</p>
      <p><strong>City:</strong> ${String(city)}</p>
      <p><strong>Description:</strong> ${String(description || "-")}</p>
    `;

    try {
      await sendMail({
        from: `${name} <${fromUser}>`,
        to: notifyTo,
        subject: `New ERP Lead: ${name} — ${company}`,
        html,
      });

      return NextResponse.json(
        { ok: true, message: "Lead received successfully" },
        { status: 201 }
      );
    } catch (mailErr) {
      console.error("Mail send failed:", mailErr);

      // Save locally if mail fails
      try {
        const storageDir = path.join(process.cwd(), "data");
        await fs.mkdir(storageDir, { recursive: true });

        const file = path.join(storageDir, "offline-leads.jsonl");

        const record = {
          lead,
          error: String(mailErr),
          ts: new Date().toISOString(),
        };

        await fs.appendFile(file, JSON.stringify(record) + "\n");
      } catch (fsErr) {
        console.error("Failed to persist offline lead:", fsErr);
      }

      return NextResponse.json(
        {
          ok: true,
          message:
            "Lead received (notification failed, saved locally)",
        },
        { status: 201 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}