export const ImgBg = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100dvh-72px)] absolute">
      <div className="rounded-4xl grid grid-cols-1 place-items-center absolute top-0 z-[-10] w-[calc(100vw-20px)] sm:w-[calc(100vw-40px)] h-[calc(100dvh-100px)] overflow-clip animate-in">
        <div className="bg-blue-600 rounded-full size-[100vw] scale-[125%] md:scale-[100%] -translate-x-[50%] -translate-y-[100%] md:-translate-y-[50%] absolute blur"></div>
        <div className="bg-amber-600 rounded-full size-[100vw] scale-[110%] md:scale-[100%]  translate-x-7/12 translate-y-5/12 md:translate-y-6/12 absolute blur">
          <div className="bg-black rounded-full size-[100vw] scale-[60%]"></div>
        </div>
      </div>
    </div>
  );
};
