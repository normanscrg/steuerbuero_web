const Karriere = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">
          Karriere bei uns
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Werden Sie Teil unseres dynamischen Teams und gestalten Sie Ihre Karriere im Bereich Steuerberatung.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Job 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Steuerberater (m/w/d)</h2>
            <p className="text-gray-700 mb-4">
              Wir suchen einen erfahrenen Steuerberater, der unsere Kunden in steuerlichen Angelegenheiten umfassend beraten kann.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-lg">Beratung von Unternehmen und Privatpersonen</li>
              <li className="text-lg">Erstellung von Jahresabschlüssen und Steuererklärungen</li>
              <li className="text-lg">Unterstützung bei Betriebsprüfungen</li>
            </ul>
            <button className="bg-cta text-white py-2 px-4 rounded hover:bg-cta-hover transition">
              Jetzt bewerben
            </button>
          </div>

          {/* Job 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Steuerfachangestellte (m/w/d)</h2>
            <p className="text-gray-700 mb-4">
              Wir suchen eine/n Steuerfachangestellte/n, die/der uns bei der Erstellung von Steuererklärungen und der Betreuung von Mandanten unterstützt.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-lg">Vorbereitung von Buchhaltungen</li>
              <li className="text-lg">Erstellung von Steuererklärungen</li>
              <li className="text-lg">Kommunikation mit Mandanten</li>
            </ul>
            <button className="bg-cta text-white py-2 px-4 rounded hover:bg-cta-hover transition">
              Jetzt bewerben
            </button>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Warum bei uns arbeiten?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Wir bieten nicht nur eine attraktive Vergütung, sondern auch ein modernes Arbeitsumfeld und zahlreiche Weiterbildungsmöglichkeiten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Karriere;
