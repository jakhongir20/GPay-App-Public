"use client";
import { FC } from "react";

type Props = {
  checked: boolean;
  onChange: () => void;
  label: string;
  iconSrc?: string;
  disabled?: boolean;
  className?: string;
};

// A compact pill-like checkbox with an optional right-aligned brand icon
export const ImageCheckbox: FC<Props> = ({
                                           checked,
                                           onChange,
                                           label,
                                           iconSrc,
                                           disabled,
                                           className = "",
                                         }) => {
  const base =
    "flex items-center justify-between gap-3 rounded-[48px] border px-4 py-3 min-h-12 transition-colors";
  const state = disabled
    ? "cursor-not-allowed border-[#2A2A2A] bg-transparent text-white/40"
    : checked
      ? "border-[#3A3A3A] bg-[rgba(237,237,237,0.06)]"
      : "border-[#2A2A2A] bg-transparent hover:bg-[rgba(237,237,237,0.04)]";

  return (
    <button
      type="button"
      onClick={disabled ? undefined : onChange}
      className={`${base} ${state} ${className}`}
      aria-pressed={checked}
      disabled={disabled}
    >
      <span className="flex items-center gap-3">
        {/* faux checkbox */}
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-md border ${
            checked ? "border-[#E9532F] bg-[rgba(233,83,47,0.10)]" : "border-[#3A3A3A]"
          }`}
        >
          {checked && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3L4.5 9L2 6.5" stroke="#E9532F" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <span className={`text-base ${disabled ? "text-white/40" : "text-text-primary"}`}>{label}</span>
      </span>
      {iconSrc && (
        <img src={iconSrc} alt={label} className="h-6 w-6 object-contain opacity-90" />
      )}
    </button>
  );
};


