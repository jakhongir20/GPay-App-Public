import { FC } from "react";

interface Props {
  className?: string;
}

export const OurProductsSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content">
          <div
            className="mb-8 flex flex-col md:mb-16 lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="text-section-title max-w-[600px]">Наши продукты</h2>
            <p className="text-section-subtitle max-w-[328px]">
              Нам важно постоянно расширять возможности сервиса
            </p>
          </div>

          <div className="relative">
            <div className="flex gap-3 overflow-x-auto pb-4">
              <div
                className="flex-shrink-0 rounded-xl border border-[#222222] bg-[#1C1C1C] p-6 sm:p-8 md:p-10"
              >
                <div className="mb-20">
                  <img src="/images/our-product/01.svg" alt="Holding" />
                </div>
                <div className="flex items-end justify-end gap-6">
                  <div className="max-w-[224px]">
                    <h3
                      className="font-helvetica-neue-cyr mb-4 text-xl leading-[28px] tracking-[-0.24px] text-white md:text-2xl"
                    >
                      Холдирование
                    </h3>
                    <p
                      className="font-helvetica-neue-cyr text-sm font-normal leading-[20px] tracking-[0.32px] text-white/60 md:text-base"
                    >
                      Замораживание средств на отдельном счете до завершения
                      сделки
                    </p>
                  </div>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)]"
                  >
                    <img
                      src="/images/plus.svg"
                      alt="Plus"
                      className="h-3.5 w-3.5"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              <button
                className="btn-black flex h-10 w-10 items-center justify-center p-0"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                className="btn-black flex h-10 w-10 items-center justify-center p-0"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
