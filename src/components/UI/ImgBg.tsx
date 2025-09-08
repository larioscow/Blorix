export const ImgBg = () => {
  return (
    <div className="absolute flex flex-col justify-between lg:justify-center lg:gap-y-6 z-[-10] w-full h-[calc(100vh-72px)] overflow-clip opacity-90 lg:opacity-70 backdrop-blur-3xl gap-y-4 py-20 blur-2xl saturate-150">
      <div className="flex blur-2xl gap-x-72 h-3 lg:h-64 lg:gap-x-[700px] w-fit">
        <div className="w-xl  h-full bg-blue-600"></div>
        <div className="w-xl  h-full bg-indigo-600"></div>
        <div className="w-xl  h-full bg-rose-600"></div>
        <div className="w-xl  h-full bg-amber-600"></div>
      </div>
      <div className="flex blur-2xl gap-x-72 h-3 lg:h-64 lg:gap-x-[700px] w-fit">
        <div className="w-xl  h-full bg-blue-600"></div>
        <div className="w-xl  h-full bg-indigo-600"></div>
        <div className="w-xl  h-full bg-rose-600"></div>
        <div className="w-xl  h-full bg-amber-600"></div>
      </div>
    </div>
  );
};
