"use client";
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  defaultOpen?: boolean;
  className?: string;
};

// Simple Tailwind-based collapse with arrow-down that rotates
export const Collapse: FC<PropsWithChildren<Props>> = ({
                                                         title,
                                                         defaultOpen = false,
                                                         className = "",
                                                         children,
                                                       }) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const [height, setHeight] = useState<number | string>(defaultOpen ? "auto" : 0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Measure initial height when defaultOpen is true
  useEffect(() => {
    if (defaultOpen && contentRef.current && height === "auto") {
      // Use setTimeout to ensure DOM is fully rendered
      setTimeout(() => {
        if (contentRef.current) {
          setHeight(contentRef.current.scrollHeight);
        }
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        // Set height to actual scroll height for opening animation
        setHeight(contentRef.current.scrollHeight);
      } else {
        // Set height to 0 for closing animation
        setHeight(0);
      }
    }
  }, [open]);

  return (
    <div className={`rounded-xl bg-[#141414]  ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 p-4 sm:p-6 text-left"
        aria-expanded={open}
      >
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-0" : "-rotate-90"}`}
          xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" fill="none">
          <path d="M15.75 0.75L8.25 8.25L0.75 0.75" stroke="#EDEDED" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
        <span className="text-xl  text-[#EDEDED]">{title}</span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: height === "auto" ? "none" : `${height + (open ? "12" : "0")}px`,
          opacity: open ? 1 : 0,
        }}
      >
        <div ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};


