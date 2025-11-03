"use client";

import { FC, SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { cn } from "@/app/shared/helpers/helper-functions";

interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "className"> {
  label: string;
  required?: boolean;
  error?: FieldError;
  register: UseFormRegisterReturn;
  options: SelectOption[];
  className?: string;
  placeholder?: string;
}

export const FormSelect: FC<FormSelectProps> = ({
  label,
  required = false,
  error,
  register,
  options,
  className,
  placeholder,
  ...props
}) => {
  return (
    <div>
      <label className="mb-2 block text-base tracking-[-0.16px] text-white/60">
        {label} {required && <span className="text-text-primary">*</span>}
      </label>
      <div className="relative">
        <select
          {...register}
          {...props}
          className={cn(
            "w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors border border-transparent",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              : "hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary",
            props.disabled && "opacity-50 cursor-not-allowed",
            className
          )}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <img
          src="/images/icon/arrow-down.svg"
          alt="Dropdown"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2"
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
};

