import React from 'react';

const Impressum = () => {
  return (
    <section className="py-16 mt-16">
      <div className="container mx-auto max-w-7xl px-6 bg-white/80 p-12 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">Impressum</h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Unternehmensinformationen */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-6">
              <strong>Angaben gemäß § 5 TMG:</strong>
            </p>
            <p className="mb-4">
              Tanja Scheurig Steuerberater<br />
              Marienhöhe 5a<br />
              74942 Billigheim<br />
            </p>

            <p className="mb-6">
              <strong>Vertreten durch:</strong><br />
              Tanja Scheurig
            </p>

            <p className="mb-6">
              <strong>Kontakt:</strong><br />
              Telefon: +49 (0)6265 929460<br />
              E-Mail: <a href="mailto:info@scheurig-stb.de" className="text-blue-600 hover:underline">info@scheurig-stb.de</a>
            </p>
          </div>

          {/* Berufsrechtliche Angaben */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-6">
              <strong>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</strong><br />
              DE123456789
            </p>

            <p className="mb-6">
              <strong>Berufsbezeichnung und berufsrechtliche Regelungen:</strong><br />
              Berufsbezeichnung: Steuerberater<br />
              Zuständige Kammer: Steuerberaterkammer Nordbaden, Vangerowstr. 16/1, 69115 Heidelberg<br />
              Verliehen durch: Deutschland<br />
              Es gelten folgende berufsrechtliche Regelungen:
            </p>
            <ul className="list-disc pl-5 mb-6">
              <li>Steuerberatungsgesetz (StBerG)</li>
              <li>Durchführungsverordnung zum Steuerberatungsgesetz (DVStB)</li>
              <li>Berufsordnung für Steuerberater (BOStB)</li>
              <li>Steuerberatervergütungsverordnung (StBVV)</li>
            </ul>
            <p className="mb-6">
              Regelungen einsehbar unter: <a href="http://www.bstbk.de" className="text-blue-600 hover:underline">http://www.bstbk.de</a>
            </p>
          </div>

          {/* Haftungsausschluss und Urheberrecht */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-600 mb-8">
              <strong>Haftung für Inhalte:</strong><br />
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <p className="text-sm text-gray-600 mb-8">
              <strong>Haftung für Links:</strong><br />
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <p className="text-sm text-gray-600 mb-8">
              <strong>Urheberrecht:</strong><br />
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

          {/* Berufshaftpflichtversicherung */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-6">
              <strong>Angaben zur Berufshaftpflichtversicherung:</strong><br />
              Name und Sitz der Gesellschaft: HDI-Gerling Firmen und Privat Versicherungs AG<br />
              Postfach 102251<br />
              70018 Stuttgart
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
