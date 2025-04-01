import type { Metadata } from 'next';
import './globals.css';
import '@fontsource-variable/inter';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Blorix | Blog de viajes',
  description:
    'Descubre guías de viaje, consejos útiles y experiencias inspiradoras para explorar el mundo con Blorix.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
