

// src/components/SendEmail.ts
import { Resend } from "resend";
import { redirect } from "next/navigation";

export const SendEmail = async (formdata: FormData) => {
  "use server";

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is missing from .env.local");
    return { error: "Email service not configured" };
  }

  const resend = new Resend(apiKey);

  const message = formdata.get("message")?.toString() ?? "";
  const name = formdata.get("name")?.toString() ?? "Unknown";
  const senderEmail = formdata.get("SenderEmail")?.toString() ?? "";

  if (!message.trim()) {
    return { error: "Invalid message" };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mdtaqui.jhar@gmail.com",
      subject: `${name} sent a message through your portfolio`,
      reply_to: senderEmail,
      text: `Sender Email: ${senderEmail}\n\nMessage:\n${message}`,
    });

    return redirect("/");
  } catch (err) {
    console.error("Email sending failed:", err);
    return { error: "Failed to send email" };
  }
};
