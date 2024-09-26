export default function Kontakt() {
  return (
    <section className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Kontakt</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {/* Kontaktinformationen (Adresse & Öffnungszeiten) */}
        <div className="p-5 bg-gray-50 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Adresse</h2>
          <p className="text-sm mb-6">Musterstraße 123, 10115 Berlin</p>

          <h2 className="text-xl font-semibold mb-4">Öffnungszeiten</h2>
          <ul className="list-disc list-inside">
            <li className="text-sm mb-2">Mo - Fr: 09:00 - 18:00 Uhr</li>
            <li className="text-sm mb-2">Samstag: 10:00 - 14:00 Uhr</li>
            <li className="text-sm">Sonntag: Geschlossen</li>
          </ul>
        </div>

        {/* Kontaktformular */}
        <div className="p-5 bg-gray-50 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Schreiben Sie uns</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Ihr Name</label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">E-Mail</label>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nachricht</label>
              <textarea
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Senden
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps Standort */}
      <div className="p-5 bg-gray-50 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-center mb-4">Unser Standort</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649.8259271289942!2d9.257106269701156!3d49.346399998212625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47981f314629e6f5%3A0xdb6bde1ccbc303c3!2sScheurig%20T.%20Steuerberater!5e0!3m2!1sde!2sde!4v1727348852785!5m2!1sde!2sde"
          width="100%"
          height="350"

          loading="lazy"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </section>
  );
}
