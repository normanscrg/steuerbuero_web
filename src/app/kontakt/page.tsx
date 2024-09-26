const Kontakt = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">
          Kontaktieren Sie uns
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Füllen Sie das untenstehende Formular aus, um mit uns in Kontakt zu treten.
        </p>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Ihr Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">E-Mail</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Ihre E-Mail-Adresse" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">Nachricht</label>
            <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Ihre Nachricht" rows={5}></textarea>
          </div>
          <button className="w-full bg-cta text-white py-2 rounded hover:bg-cta-hover transition">
            Nachricht senden
          </button>
        </form>
      </div>
    </section>
  );
};

export default Kontakt;
