import { FC } from "react";

interface Props {
  className?: string;
}

export const SolutionBusinessSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content">
          <div
            className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="text-section-title mb-4 max-w-[600px] lg:mb-0">
              Решения для разных сфер бизнеса
            </h2>
            <p className="text-section-subtitle max-w-[328px]">
              Поддерживаем прием и отправку платежей от всех популярных банков
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-1.5">
            <button className="btn-primary rounded-[34px]">Банки 15</button>
            <button className="btn-black">МФО 15</button>
            <button className="btn-black">МФО 15</button>
            <button className="btn-black">МФО 15</button>
            <button className="btn-black">МФО 15</button>
            <button className="btn-black">МФО 15</button>
          </div>

          <div
            className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4"
          >
            <div className="flex items-center justify-center">
              <img
                src="/images/brands/hamkorbank.svg"
                alt="Hamkor Bank"
                className="h-auto max-h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/brands/aloqabank.svg"
                alt="AloqaBank"
                className="h-auto max-h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/brands/ipakyulibank.svg"
                alt="Ipak Yuli Bank"
                className="h-auto max-h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/brands/kapitalbank.svg"
                alt="Kapitalbank"
                className="h-auto max-h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/brands/sqbbank.svg"
                alt="SQB"
                className="h-auto max-h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/brands/ipotekabank.svg"
                alt="Ipotekabank"
                className="h-auto max-h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/brands/tbcbank.svg"
                alt="TBC Bank"
                className="h-auto max-h-12 w-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/brands/nbubank.svg"
                alt="NBU"
                className="h-auto max-h-12 w-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
