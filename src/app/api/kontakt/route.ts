import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Alle Felder sind erforderlich' }, { status: 400 });
  }

  // Hole die Umgebungsvariablen und prüfe auf Fallback-Werte
  const smtpHost = process.env.STRATO_SMTP_HOST || '';
  const smtpPort = parseInt(process.env.STRATO_SMTP_PORT || '465', 10); // Fallback zu 465 (SSL)
  const smtpUser = process.env.STRATO_EMAIL || '';
  const smtpPass = process.env.STRATO_PASSWORD || '';

  try {
    // SMTP-Konfiguration mit Strato
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true für SSL
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`, // Absender (deine eigene Strato-E-Mail-Adresse)
      replyTo: email,                  // Benutzer-E-Mail-Adresse für Antworten
      to: smtpUser,                    // Empfänger (deine eigene Strato-E-Mail-Adresse)
      subject: 'Neue Kontaktanfrage',
      text: `Name: ${name}\nE-Mail: ${email}\nNachricht: ${message}`,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Nachricht erfolgreich gesendet' }, { status: 200 });
  } catch (error) {
    console.error('E-Mail Fehler:', error);
    return NextResponse.json({ error: 'Es gab ein Problem beim Senden der Nachricht' }, { status: 500 });
  }
}
