import type { Metadata } from 'next';
import './globals.css';
import '@fontsource-variable/inter';

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
  return <html lang="es">{children}</html>;
}
