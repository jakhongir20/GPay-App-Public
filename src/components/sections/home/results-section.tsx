import { FC } from "react";

interface Props {
  className?: string;
}

export const ResultsSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content">
          <div
            className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="text-section-title max-w-[600px]">
              Вместе достигаем результатов
            </h2>
            <p
              className="max-w-[328px] text-left text-lg leading-[22px] text-white/60"
            >
              Нам важно постоянно расширять возможности сервиса
            </p>
          </div>
          <hr className="mb-[52px] border-white/10" />
          <div className="flex justify-center">
            <div className="flex items-end gap-8">
              <div className="flex flex-col items-center">
                <div className="mb-4 text-[48px] font-bold text-text-primary">
                  99%
                </div>
                <div className="relative h-32 w-16">
                  <div
                    className="absolute bottom-0 h-20 w-16 rounded border-2 border-button-primary"
                  ></div>
                </div>
                <div className="mt-4 text-center text-sm text-white/60">
                  Довольных клиентов
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 text-[48px] font-bold text-text-primary">
                  32 млн
                </div>
                <div className="relative h-32 w-16">
                  <div
                    className="absolute bottom-0 h-24 w-16 rounded border-2 border-button-primary"
                  ></div>
                </div>
                <div className="mt-4 text-center text-sm text-white/60">
                  Активных пользователей
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 text-[48px] font-bold text-text-primary">
                  240%
                </div>
                <div className="relative h-32 w-16">
                  <div
                    className="absolute bottom-0 h-32 w-16 rounded border-2 border-button-primary"
                  ></div>
                </div>
                <div className="mt-4 text-center text-sm text-white/60">
                  Рост активов компании
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
