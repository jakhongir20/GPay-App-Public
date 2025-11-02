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
    <div className={`rounded-xl border border-[#1C1C1C] ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 px-4 py-3 text-left"
        aria-expanded={open}
      >
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12.5a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.086l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12.5z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm text-white">{title}</span>
      </button>

      {open && (
        <div className="px-4 pb-4">
          {/* Keep caller-defined paddings; this just provides container spacing */}
          {children}
        </div>
      )}
    </div>
  );
};


