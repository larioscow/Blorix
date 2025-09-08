export const ImgBg = () => {
  return (
    <div className="grid grid-cols-1 place-items-center absolute top-0 z-[-10] w-full overflow-clip h-screen saturate-150 blur">
      <div className="bg-blue-600 rounded-full size-[100vw] scale-[125%] md:scale-[100%] -translate-x-[50%] -translate-y-[100%] md:-translate-y-[50%] absolute"></div>
      <div className="bg-amber-600 rounded-full size-[100vw] scale-[110%] md:scale-[100%]  translate-x-7/12 translate-y-5/12 md:translate-y-6/12  absolute">
        <div className="bg-black rounded-full size-[100vw] scale-[60%]"></div>
      </div>
    </div>
  );
};
