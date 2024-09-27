"use client";

export default function Kontakt() {
  return (
    <section className="py-16 mt-16">
      <div className="container mx-auto max-w-7xl px-6 bg-white/80 p-12 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">Kontakt</h1>
        <p className="text-center text-lg text-gray-700 mb-12">
          Haben Sie Fragen? Kontaktieren Sie uns gerne oder informieren Sie sich über unsere aktuellen Stellenangebote.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Address & Opening Hours */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Adresse</h2>
            <p className="text-lg text-gray-700 mb-6">Marienhöhe 5a, 74942 Billigheim</p>

            {/* Trennstrich */}
            <hr className="border-t border-gray-300 my-6" />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Öffnungszeiten</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li className="mb-2">Mo - Fr: 09:00 - 18:00 Uhr</li>
              <li className="mb-2">Samstag: 10:00 - 14:00 Uhr</li>
              <li>Sonntag: Geschlossen</li>
            </ul>
          </div>

          {/* Stellenangebote und Bewerbung */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Stellenangebote</h2>
            <p className="text-lg text-gray-700 mb-4">
              Aktuell suchen wir eine/n <strong>Steuerfachgehilfen/in</strong>.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Wir bieten Ihnen ein angenehmes Arbeitsumfeld, flexible Arbeitszeiten und die Möglichkeit, sich beruflich weiterzuentwickeln.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Für Bewerbungen senden Sie Ihre Unterlagen bitte per E-Mail an:
              <a href="mailto:scheurig-stb@t-online.de" className="text-blue-600 hover:underline">
                scheurig-stb@t-online.de
              </a>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Oder rufen Sie uns an unter: <strong>+49 (0) 123 456 789</strong>
            </p>
            <p className="text-lg text-gray-700">
              Ansprechpartner: <strong>Tanja Scheurig</strong>
            </p>
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
