import { NextResponse } from "next/server";
import { Resend } from "resend";

// Create a Resend instance with your API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Send the email
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // you can change this later to your domain
      to: "felfal14@innlandetfylke.no",
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Return success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
