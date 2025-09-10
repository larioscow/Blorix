// import { Destinos } from '@/components/destinos';
import { ImgBg } from '@/components/UI/ImgBg';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="px-6">
      <section className="w-full max-w-xl mx-auto flex flex-col items-center justify-center h-[calc(100dvh-72px)] mt-[72px]">
        <p className="text-lg sm:text-xl md:text-2xl text-center mb-6 opacity-90">
          <strong>Blorix</strong> te brinda las herramientas para que tu próxima
          aventura sea inolvidable.
          <strong> Descubre</strong> <strong>ahorra </strong> y {''}
          <strong>viaja</strong> {''}
          de manera inteligente.
        </p>
        <Link
          href={'/search'}
          className="text-xl md:text-2xl font-bold text-center mb-4 cursor-pointer hover:opacity-100 focus:underline focus:opacity-100 opacity-90 border border-white/25 py-2 px-4 rounded-xl bg-white/10 backdrop-blur-2xl transition-all duration-100"
        >
          <span>Probar ahora</span>
        </Link>
        <ImgBg></ImgBg>
      </section>
    </main>
  );
}
