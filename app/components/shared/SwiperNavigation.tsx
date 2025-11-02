"use client";

import { FC } from "react";
import type { Swiper as SwiperType } from "swiper";
import { cn } from "@/app/shared/helpers";

interface Props {
  swiperRef: React.MutableRefObject<SwiperType | null>;
  className?: string;
}

export const SwiperNavigation: FC<Props> = ({ swiperRef, className }) => {
  return (
    <div className={cn("sm:mt-8 mt-4 flex justify-center gap-3", className)}>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="btn-black flex h-10 w-10 items-center justify-center p-0 hover:opacity-80 transition-opacity"
        aria-label="Previous slide"
      >
        <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 12L6 8L10 4"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="btn-black flex h-10 w-10 items-center justify-center p-0 hover:opacity-80 transition-opacity"
        aria-label="Next slide"
      >
        <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 4L10 8L6 12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

