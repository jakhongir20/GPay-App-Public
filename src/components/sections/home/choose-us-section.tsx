import { FC } from "react";

interface Props {
  className?: string;
}

export const ChooseUsSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content">
          <div
            className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="text-section-title mb-4 max-w-[600px] lg:mb-0">
              Почему нас выбирают
            </h2>
            <p
              className="max-w-[328px] text-left text-lg leading-[26px] text-white/60 lg:text-right"
            >
              Нам важно постоянно расширять возможности сервиса
            </p>
          </div>
          <hr className="mb-10 border-white/10" />

          <div className="grid grid-cols-1 gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex gap-3 items-start">
              <div className="h-6 min-w-6 rounded bg-[#303030]"></div>
              <div className="flex flex-col gap-4">
                <h4 className="text-lg tracking-[-0.54px] font-helvetica-neue text-[#D4D4D4]">Открытое API</h4>
                <p className="text-sm font-helvetica-neu text-white/60">
                  Нам важно постоянно расширять возможности сервиса
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="h-6 min-w-6 rounded bg-[#303030]"></div>
              <div className="flex flex-col gap-4">
                <h4 className="text-lg tracking-[-0.54px] font-helvetica-neue text-[#D4D4D4]">Постоянная поддержка</h4>
                <p className="text-sm font-helvetica-neu text-white/60">
                  Нам важно постоянно расширять возможности сервиса
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="h-6 min-w-6 rounded bg-[#303030]"></div>
              <div className="flex flex-col gap-4">
                <h4 className="text-lg tracking-[-0.54px] font-helvetica-neue text-[#D4D4D4]">Расширение
                  функционала</h4>
                <p className="text-sm font-helvetica-neu text-white/60">
                  Нам важно постоянно расширять возможности сервиса
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="h-6 min-w-6 rounded bg-[#303030]"></div>
              <div className="flex flex-col gap-4">
                <h4 className="text-lg tracking-[-0.54px] font-helvetica-neue text-[#D4D4D4]">Настройка выплат</h4>
                <p className="text-sm font-helvetica-neu text-white/60">
                  Нам важно постоянно расширять возможности сервиса
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </section>
  );
};
