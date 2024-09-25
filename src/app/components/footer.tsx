import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Steuerkanzlei Scheurig</p>
      <ul>
        <li><Link href="/impressum">Impressum</Link></li>
        <li><Link href="/datenschutz">Datenschutz</Link></li>
      </ul>
    </footer>
  );
}
