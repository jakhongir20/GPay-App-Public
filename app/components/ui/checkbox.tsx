import React from "react";
import { cn } from "@/app/shared/helpers";

interface Props {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  className?: string;
}

export const Checkbox = ({ id, label, checked, onChange, disabled, className }: Props) => {
  return (
    <label
      htmlFor={id}
      className={cn("inline-flex cursor-pointer select-none items-center gap-3", className)}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="peer sr-only"
      />

      <span
        className={[
          "grid h-5 w-5 place-items-center rounded ",
          " bg-[#272727]",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
          "transition-colors duration-150",
          // hover/focus
          "peer-hover:border-neutral-500",
          "peer-focus-visible:outline peer-focus-visible:outline-2",
          "peer-focus-visible:outline-offset-2 peer-focus-visible:outline-button-primary",
          // checked
          "peer-checked:bg-button-primary peer-checked:border-button-primary",
          // disabled
          "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
        ].join(" ")}
        aria-hidden
      >
        <svg
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 opacity-0 transition-opacity peer-checked:opacity-100"
        >
          <path
            d="M5 10.5l3 3 7-7"
            fill="none"
            stroke="black"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Label */}
      <span className="text-[16px] leading-6 text-neutral-400">
        {label}
      </span>
    </label>
  );
};
