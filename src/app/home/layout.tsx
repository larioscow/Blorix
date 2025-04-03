import type { Metadata } from 'next';
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
    <body>
      <Header />
      {children}
    </body>
  );
}
