"use client";

import { FC, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { cn } from "@/app/shared/helpers/helper-functions";

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label: string;
  required?: boolean;
  error?: FieldError;
  register: UseFormRegisterReturn;
  className?: string;
}

export const FormInput: FC<FormInputProps> = ({
  label,
  required = false,
  error,
  register,
  className,
  ...props
}) => {
  return (
    <div>
      <label className="mb-2 block text-base tracking-[-0.16px] text-white/60">
        {label} {required && <span className="text-text-primary">*</span>}
      </label>
      <div className="relative">
        <input
          {...register}
          {...props}
          className={cn(
            "w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors border border-transparent",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              : "hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary",
            className
          )}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
};

