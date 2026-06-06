import { Resend } from "resend";
import { NextResponse } from "next/server";
import { escapeHtml } from "@/utils/escape-html";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, business, projectType, budget, timeline, message } =
      body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please email directly." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const contactEmail =
      process.env.CONTACT_EMAIL || "lokeshkavisth.dev@gmail.com";
    const fromAddress =
      process.env.RESEND_FROM || "Portfolio Contact <onboarding@resend.dev>";

    const safe = {
      name: escapeHtml(name.trim()),
      email: escapeHtml(email.trim()),
      business: escapeHtml(business?.trim() || "Not provided"),
      projectType: escapeHtml(projectType || "Not specified"),
      budget: escapeHtml(budget || "Not specified"),
      timeline: escapeHtml(timeline || "Not specified"),
      message: escapeHtml(message.trim()).replace(/\n/g, "<br />"),
    };

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: contactEmail,
      replyTo: email.trim(),
      subject: `[Freelance Inquiry] ${projectType || "New project"} — ${name.trim()}`,
      html: `
        <h2>New freelance inquiry</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Business:</strong> ${safe.business}</p>
        <p><strong>Project type:</strong> ${safe.projectType}</p>
        <p><strong>Budget:</strong> ${safe.budget}</p>
        <p><strong>Timeline:</strong> ${safe.timeline}</p>
        <hr />
        <p><strong>Details:</strong></p>
        <p>${safe.message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again or email directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
