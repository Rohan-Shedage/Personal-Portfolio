// src/actions/sendEmailAction.ts
"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

import { portfolioConfig } from "@/config/portfolio.config";

export async function sendEmailAction(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is missing from .env.local");
    return { error: "Email service not configured" };
  }

  const resend = new Resend(apiKey);

  const message = formData.get("message")?.toString() ?? "";
  const name = formData.get("name")?.toString() ?? "Unknown";
  const senderEmail = formData.get("SenderEmail")?.toString() ?? "";

  if (!message.trim()) {
    return { error: "Invalid message" };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: portfolioConfig.email,
      subject: `${name} sent a message through your portfolio`,
      reply_to: senderEmail,
      text: `Sender Email: ${senderEmail}\n\nMessage:\n${message}`,
    });

    return redirect("/");
  } catch (err) {
    console.error("Email sending failed:", err);
    return { error: "Failed to send email" };
  }
}
