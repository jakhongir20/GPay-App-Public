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

  console.log("checked", checked);
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
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded border transition-colors duration-150",
          "border-[#3A3A3A] bg-[#272727]",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
          // hover/focus
          "peer-focus-visible:outline peer-focus-visible:outline-2",
          "peer-focus-visible:outline-offset-2 peer-focus-visible:outline-button-primary",
          // checked - match ImageCheckbox style
          "peer-checked:border-[#E9532F] peer-checked:bg-[rgba(233,83,47,0.10)]",
          // disabled
          "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
        )}
        aria-hidden
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 9L2 6.5" stroke="#E9532F" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        )}
      </span>

      {/* Label */}
      <span className="text-[16px] leading-6 text-neutral-400">
        {label}
      </span>
    </label>
  );
};
