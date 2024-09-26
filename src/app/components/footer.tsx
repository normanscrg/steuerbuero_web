const Footer = () => {
  return (
    <footer className="bg-primary text-center py-8">
      <ul className="flex justify-center space-x-6">
        <li><a href="/impressum" className="text-link hover:text-cta transition">Impressum</a></li>
        <li><a href="/datenschutz" className="text-link hover:text-cta transition">Datenschutz</a></li>
        <li><a href="/kontakt" className="text-link hover:text-cta transition">Kontakt</a></li>
      </ul>
      <p className="text-sm text-gray-600 mt-4">© 2024 Steuerberater</p>
    </footer>
  );
};

export default Footer;
