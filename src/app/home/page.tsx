// import { Destinos } from '@/components/destinos';
import { ImgBg } from '@/components/UI/ImgBg';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="px-6 h-[2000px]">
      <section className="w-full max-w-xl mx-auto flex flex-col items-center justify-center h-[calc(100vh-72px)] mt-[72px] gap-2">
        {/* <div className="size-60 bg-neutral-600 mb-4"></div> */}
        <p className="text-xl md:text-2xl text-center mb-4 opacity-90">
          En Blorix te brindamos las herramientas para que tu próxima aventura
          sea inolvidable. <strong>Guías detalladas</strong> y{' '}
          <strong>Consejos prácticos </strong> para ahorrar y viajar de manera
          inteligente.
        </p>
        <Link
          href={'/articulos'}
          className="text-xl md:text-2xl font-bold text-center mb-4 cursor-pointer hover:underline hover:opacity-100 focus:underline focus:opacity-100 opacity-90"
        >
          <span>Explorar</span> <span>&rarr;</span>
        </Link>
        <ImgBg></ImgBg>
      </section>
      {/* <Destinos /> */}
    </main>
  );
}
