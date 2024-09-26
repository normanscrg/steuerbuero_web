const Leistungen = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">
          Unsere Leistungen
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Wir bieten umfassende Dienstleistungen, die auf die spezifischen Bedürfnisse unserer Mandanten zugeschnitten sind.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Leistung 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Steuerberatung</h2>
            <p className="text-gray-700 mb-4">
              Unser erfahrenes Team unterstützt Sie bei allen Fragen rund um die Steuererklärung und Steuerplanung.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-lg">Erstellung von Steuererklärungen</li>
              <li className="text-lg">Optimierung der Steuerlast</li>
              <li className="text-lg">Beratung für Unternehmen und Privatpersonen</li>
            </ul>
          </div>

          {/* Leistung 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Buchhaltung</h2>
            <p className="text-gray-700 mb-4">
              Wir übernehmen Ihre laufende Buchhaltung und erstellen Ihre Monats- und Jahresabschlüsse.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-lg">Finanz- und Lohnbuchhaltung</li>
              <li className="text-lg">Monatliche Reports</li>
              <li className="text-lg">Erstellung von Jahresabschlüssen</li>
            </ul>
          </div>

          {/* Leistung 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Unternehmensberatung</h2>
            <p className="text-gray-700 mb-4">
              Wir beraten Sie bei der Gründung, Umstrukturierung und Expansion Ihres Unternehmens.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-lg">Beratung bei Unternehmensgründungen</li>
              <li className="text-lg">Steueroptimierung und Rechtsformwahl</li>
              <li className="text-lg">Begleitung bei Betriebsprüfungen</li>
            </ul>
          </div>

          {/* Leistung 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Lohnabrechnung</h2>
            <p className="text-gray-700 mb-4">
              Wir kümmern uns um die fristgerechte und korrekte Abwicklung Ihrer Lohn- und Gehaltsabrechnungen.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-lg">Erstellung der Lohnabrechnungen</li>
              <li className="text-lg">Abwicklung von Sozialversicherungsbeiträgen</li>
              <li className="text-lg">Kommunikation mit Behörden</li>
            </ul>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Individuelle Beratung</h2>
          <p className="text-lg text-gray-700 mb-6">
            Wir bieten Ihnen eine individuelle und maßgeschneiderte Beratung, die auf Ihre Bedürfnisse abgestimmt ist.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leistungen;
