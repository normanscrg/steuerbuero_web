// src/app/api/bewerbung/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, position, motivation } = await req.json();

  if (!name || !email || !position || !motivation) {
    return NextResponse.json({ error: 'Alle Felder sind erforderlich' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // SMTP-Server
      port: 465,
      secure: true,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'your-email@example.com',
      subject: `Neue Bewerbung für: ${position}`,
      text: `Name: ${name}\nE-Mail: ${email}\nPosition: ${position}\n\nMotivation:\n${motivation}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Bewerbung erfolgreich eingereicht' }, { status: 200 });
  } catch (error) {
    console.error('E-Mail Fehler:', error);
    return NextResponse.json({ error: 'Es gab ein Problem beim Einreichen der Bewerbung' }, { status: 500 });
  }
}
