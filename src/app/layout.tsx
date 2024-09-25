import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/navbar'; // Importiere die Navbar-Komponente
import Footer from './components/footer'; // Importiere die Footer-Komponente

export const metadata = {
  title: 'Steuerkanzlei Scheurig',
  description: 'Steuerberatung und Unternehmensberatung',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Navbar /> {/* Navbar auf allen Seiten */}
        <main>{children}</main>
        <Footer /> {/* Footer auf allen Seiten */}
      </body>
    </html>
  );
}
