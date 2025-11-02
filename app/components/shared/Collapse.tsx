"use client";
import { FC, PropsWithChildren, useState } from "react";

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

  return (
    <div className={`rounded-xl bg-[#141414]  ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 p-4 sm:p-6 text-left"
        aria-expanded={open}
      >
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-0" : "-rotate-90"}`}
          xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" fill="none">
          <path d="M15.75 0.75L8.25 8.25L0.75 0.75" stroke="#EDEDED" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
        <span className="text-xl  text-[#EDEDED]">{title}</span>
      </button>

      {open && (
        <>
          {children}
        </>
      )}
    </div>
  );
};


