import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Phone mask for Uzbekistan format: +998 XX XXX XX XX
 */
export function formatPhone(value: string): string {
  // Remove all non-digits
  const digits = value.replace(/\D/g, "");
  
  // If empty, return +998
  if (digits.length === 0) return "+998";
  
  // Ensure it starts with 998
  let phoneDigits = digits;
  if (!digits.startsWith("998")) {
    phoneDigits = "998" + digits.replace(/^998/, "");
  }
  
  // Limit to 12 digits (998 + 9 digits)
  phoneDigits = phoneDigits.slice(0, 12);
  
  if (phoneDigits.length <= 3) return `+${phoneDigits}`;
  if (phoneDigits.length <= 5) return `+${phoneDigits.slice(0, 3)} ${phoneDigits.slice(3)}`;
  if (phoneDigits.length <= 8) return `+${phoneDigits.slice(0, 3)} ${phoneDigits.slice(3, 5)} ${phoneDigits.slice(5)}`;
  return `+${phoneDigits.slice(0, 3)} ${phoneDigits.slice(3, 5)} ${phoneDigits.slice(5, 8)} ${phoneDigits.slice(8)}`;
}

/**
 * INN mask: XXX XXX XXX (9 digits)
 */
export function formatINN(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 0) return "";
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)}`;
}
