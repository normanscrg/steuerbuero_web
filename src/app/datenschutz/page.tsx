import React from 'react';

const Datenschutz = () => {
  return (
    <section className="py-16 mt-16">
      <div className="container mx-auto max-w-7xl px-6 bg-white/80 p-12 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">Datenschutzerklärung</h1>

        {/* Datenschutz auf einen Blick */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
          <h3 className="text-xl font-semibold mb-2">Datenerfassung auf unserer Website</h3>
          <p className="mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten des Verantwortlichen können Sie dem Impressum dieser Website entnehmen.
          </p>
          <p className="mb-4">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z.B. durch Eingaben in ein Kontaktformular. Andere Daten werden automatisch beim Besuch der Website durch IT-Systeme erfasst, z.B. technische Daten wie Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs.
          </p>
          <p className="mb-4">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
          <p className="mb-4">
            Sie haben das Recht, jederzeit unentgeltlich Auskunft über die Herkunft, Empfänger und den Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie können außerdem die Berichtigung, Sperrung oder Löschung dieser Daten verlangen.
          </p>
        </div>

        {/* Allgemeine Hinweise und Pflichtinformationen */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
          <p className="mb-4">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className="mb-4">
            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck dies geschieht.
          </p>
          <p className="mb-4">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>
        </div>

        {/* Verantwortliche Stelle */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Hinweis zur verantwortlichen Stelle</h2>
          <p className="mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mb-4">
            Tanja Scheurig Steuerberater<br />
            Marienhöhe 5a<br />
            74842 Billigheim<br />
            Telefon: +49 (0)6265 929460<br />
            E-Mail: <a href="mailto:info@scheurig-stb.de" className="text-blue-600">info@scheurig-stb.de</a>
          </p>
          <p className="mb-4">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
          </p>
        </div>

        {/* Ihre Rechte */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Ihre Rechte bezüglich Ihrer Daten</h2>
          <p className="mb-4">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
          </p>
          <p className="mb-4">
            Für weitere Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren haben Sie das Recht, bei der zuständigen Aufsichtsbehörde Beschwerde einzureichen.
          </p>
        </div>

        {/* Widerruf Ihrer Einwilligung */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
          <p className="mb-4">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
        </div>

        {/* Widerspruchsrecht */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Widerspruchsrecht gegen die Datenerhebung</h2>
          <p className="mb-4">
            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie das Recht, jederzeit aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.
          </p>
        </div>

        {/* Datenerfassung auf unserer Website */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. Datenerfassung auf unserer Website</h2>
          <h3 className="text-xl font-semibold mb-2">Cookies</h3>
          <p className="mb-4">
            Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind sogenannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht.
          </p>
          <h3 className="text-xl font-semibold mb-2">Server-Log-Dateien</h3>
          <p className="mb-4">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien. Dies sind unter anderem der Browsertyp, Betriebssystem, Referrer URL und IP-Adresse.
          </p>
        </div>

        {/* Anfrage per E-Mail */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">8. Anfrage per E-Mail, Telefon oder Telefax</h2>
          <p className="mb-4">
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
          </p>
        </div>

        {/* Bewerbungen */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">9. Bewerbungen</h2>
          <p className="mb-4">
            Wenn Sie uns eine Bewerbung zukommen lassen, verarbeiten wir Ihre personenbezogenen Daten, um das Bewerbungsverfahren durchzuführen. Nach Abschluss des Bewerbungsverfahrens werden die Daten gelöscht, es sei denn, es bestehen gesetzliche Aufbewahrungspflichten.
          </p>
        </div>

        {/* Stand und Aktualisierung */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">10. Stand und Aktualisierung dieser Datenschutzerklärung</h2>
          <p className="mb-4">
            Diese Datenschutzerklärung hat den Stand vom 25. Mai 2023. Wir behalten uns vor, die Datenschutzerklärung zu aktualisieren, um den Datenschutz zu verbessern und/oder an geänderte rechtliche Rahmenbedingungen anzupassen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Datenschutz;
