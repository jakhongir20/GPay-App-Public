"use client";

import { FC } from "react";
import { cn } from "@/app/shared/helpers/helper-functions";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal: FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-md rounded-xl bg-[#1C1C1C] p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2A5A2A]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 8L12 22L6 16"
                stroke="#8AE16A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-center text-2xl font-semibold text-white">
          Поздравляем!
        </h2>

        {/* Message */}
        <div className="mb-8 text-center text-white/80">
          <p className="mb-2">Ваша заявка отправлена на рассмотрение.</p>
          <p className="mb-2">Мы обещаем вернуться к вам с решением</p>
          <p>в течении двух рабочих дней</p>
        </div>

        {/* Button */}
        <button
          onClick={onClose}
          className={cn(
            "w-full rounded-lg bg-button-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-button-primary/90"
          )}
        >
          Спасибо!
        </button>
      </div>
    </div>
  );
};

