import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Alle Felder sind erforderlich' }, { status: 400 });
  }

  try {
    // SMTP-Konfiguration mit Umgebungsvariablen
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',
      port: 465,
      secure: true, // true für SSL
      auth: {
        user: process.env.YAHOO_EMAIL,    // E-Mail aus Umgebungsvariablen
        pass: process.env.YAHOO_PASSWORD, // Passwort aus Umgebungsvariablen
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`, // Absender (vom Formular)
      to: process.env.YAHOO_EMAIL,  // Empfänger (deine E-Mail-Adresse)
      subject: 'Neue Kontaktanfrage', // Betreff der E-Mail
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`, // Nachrichtentext
    };

    // Sende die E-Mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Nachricht erfolgreich gesendet' }, { status: 200 });
  } catch (error) {
    console.error('E-Mail Fehler:', error);
    return NextResponse.json({ error: 'Es gab ein Problem beim Senden der Nachricht' }, { status: 500 });
  }
}
