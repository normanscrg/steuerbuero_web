const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-primary z-50 shadow-lg">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold text-accent">Steuerberater</div>
        <ul className="flex space-x-6">
          <li><a href="/" className="text-link hover:text-cta transition">Home</a></li>
          <li><a href="/leistungen" className="text-link hover:text-cta transition">Leistungen</a></li>
          <li><a href="/karriere" className="text-link hover:text-cta transition">Karriere</a></li>
          <li><a href="/kontakt" className="text-link hover:text-cta transition">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
