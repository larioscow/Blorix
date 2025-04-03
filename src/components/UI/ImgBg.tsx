'use client';

import { useEffect, useRef } from 'react';

const animateScroll = (
  ref: React.RefObject<HTMLDivElement | null>,
  containerRef: React.RefObject<HTMLDivElement | null>,
  direction: number,
  scrollAmountRef: { current: number }
) => {
  const speed = 1;

  const step = () => {
    if (ref.current && containerRef.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const rowWidth = ref.current.getBoundingClientRect().width;

      scrollAmountRef.current += speed;
      ref.current.style.transform = `translateX(${
        direction * scrollAmountRef.current
      }px)`;

      // Reset position when the row moves completely out of the container
      if (scrollAmountRef.current >= rowWidth + containerWidth) {
        scrollAmountRef.current = 0;
      }
    }
    requestAnimationFrame(step);
  };
  step();
};

export const ImgBg = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const row1ScrollAmount = { current: 0 };
    const row2ScrollAmount = { current: 0 };

    animateScroll(row1Ref, containerRef, 1, row1ScrollAmount);
    animateScroll(row2Ref, containerRef, -1, row2ScrollAmount);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute flex flex-col justify-between lg:justify-center lg:gap-y-6 z-[-10] w-full h-[calc(100vh-72px)] overflow-clip opacity-90 lg:opacity-70 backdrop-blur-3xl gap-y-4 py-20 blur-2xl saturate-150"
    >
      <div
        ref={row1Ref}
        className="flex blur-2xl gap-x-72 h-3 lg:h-64 lg:gap-x-[700px] w-fit translate-x-[-100%]"
      >
        <div className="w-xl  h-full bg-blue-600"></div>
        <div className="w-xl  h-full bg-indigo-600"></div>
        <div className="w-xl  h-full bg-rose-600"></div>
        <div className="w-xl  h-full bg-amber-600"></div>
      </div>
      <div
        ref={row2Ref}
        className="flex blur-2xl gap-x-72 h-3 lg:h-64 lg:gap-x-[700px] w-fit translate-x-[100vw]"
      >
        <div className="w-xl  h-full bg-blue-600"></div>
        <div className="w-xl  h-full bg-indigo-600"></div>
        <div className="w-xl  h-full bg-rose-600"></div>
        <div className="w-xl  h-full bg-amber-600"></div>
      </div>
    </div>
  );
};
