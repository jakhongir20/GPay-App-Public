import { FC } from "react";

interface Props {
  className?: string;
}

export const CertificationsSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding py-16">
      <div className="container-custom">
        <h2 className="text-h2">Официальные лицензии</h2>
        <div className="grid grid-cols-2 justify-end gap-4 sm:grid-cols-4 sm:gap-6">
          <div className="flex h-full flex-col justify-between">
            <div className="h-full w-full">
              <img
                src="/images/lisence/01.png"
                alt="Lisence"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h4
                className="mb-3 text-sm leading-[19px] tracking-[0.14px] text-text-primary"
              >
                Лицензия на осуществление деятельности по обработке платежей №
                12-345
              </h4>
              <p className="text-xs leading-normal text-white/40">
                Выдана Центральным банком Республики Узбекистан от 15.06.2022
              </p>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between">
            <div className="h-full w-full">
              <img
                src="/images/lisence/02.png"
                alt="Lisence"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h4
                className="mb-3 text-sm leading-[19px] tracking-[0.14px] text-text-primary"
              >
                Лицензия на осуществление деятельности по обработке платежей №
                12-345
              </h4>
              <p className="text-xs leading-normal text-white/40">
                Выдана Центральным банком Республики Узбекистан от 15.06.2022
              </p>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between">
            <div className="h-full w-full">
              <img
                src="/images/lisence/01.png"
                alt="Lisence"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h4
                className="mb-3 text-sm leading-[19px] tracking-[0.14px] text-text-primary"
              >
                Лицензия на осуществление деятельности по обработке платежей №
                12-345
              </h4>
              <p className="text-xs leading-normal text-white/40">
                Выдана Центральным банком Республики Узбекистан от 15.06.2022
              </p>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between">
            <div className="h-full w-full">
              <img
                src="/images/lisence/02.png"
                alt="Lisence"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h4
                className="mb-3 text-sm leading-[19px] tracking-[0.14px] text-text-primary"
              >
                Лицензия на осуществление деятельности по обработке платежей №
                12-345
              </h4>
              <p className="text-xs leading-normal text-white/40">
                Выдана Центральным банком Республики Узбекистан от 15.06.2022
              </p>
            </div>
          </div>
        </div>
        <button
          className="btn-user mx-auto mt-16 flex rounded-lg border-[#6A6A6A] bg-[#212121] px-6 py-3"
        >
          Показать еще
        </button>
      </div>
    </section>
  );
};
