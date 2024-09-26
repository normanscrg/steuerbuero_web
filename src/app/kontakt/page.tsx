"use client";

import { useState } from 'react';

export default function Kontakt() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/kontakt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.ok) {
      setResponseMessage('Nachricht erfolgreich gesendet');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setResponseMessage(`Fehler: ${data.error}`);
    }
  };

  return (
    <section className="py-16 mt-16"> {/* Added mt-16 for navbar spacing */}
      <div className="container mx-auto max-w-7xl px-6 bg-white/80 p-12 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">Kontakt</h1>
        <p className="text-center text-lg text-gray-700 mb-12">
          Haben Sie Fragen? Kontaktieren Sie uns gerne über das Formular oder besuchen Sie uns persönlich.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Address & Opening Hours */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Adresse</h2>
            <p className="text-lg text-gray-700 mb-6">Musterstraße 123, 10115 Berlin</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Öffnungszeiten</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li className="mb-2">Mo - Fr: 09:00 - 18:00 Uhr</li>
              <li className="mb-2">Samstag: 10:00 - 14:00 Uhr</li>
              <li>Sonntag: Geschlossen</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Schreiben Sie uns</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-gray-900 mb-2">
                  Ihr Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium text-gray-900 mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Senden
              </button>
            </form>
            {responseMessage && (
              <p className="mt-4 text-center text-green-600">
                {responseMessage}
              </p>
            )}
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Unser Standort</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649.8259271289942!2d9.257106269701156!3d49.346399998212625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47981f314629e6f5%3A0xdb6bde1ccbc303c3!2sScheurig%20T.%20Steuerberater!5e0!3m2!1sde!2sde!4v1727348852785!5m2!1sde!2sde"
            width="100%"
            height="350"
            className="rounded-lg shadow-md"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
