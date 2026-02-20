// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export async function sendMail(mailOptions: {
//   from: string;
//   to: string;
//   subject: string;
//   html: string;
// }) {
//   return transporter.sendMail(mailOptions);
// }


import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,        // mail.bizpluscrm.com
  port: Number(process.env.SMTP_PORT), // 25 or 587
  secure: false,                       // false for port 25 or 587
  auth: {
    user: process.env.EMAIL_USER,      // info@bizpluserp.com
    pass: process.env.EMAIL_PASS,      // WftaVmik09
  },
  tls: {
    rejectUnauthorized: false, // allow self-signed certificates (common on shared hosting)
  },
});

export async function sendMail(mailOptions: {
  from: string;
  to: string;
  subject: string;
  html: string;
}) {
  return transporter.sendMail(mailOptions);
}
