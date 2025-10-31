import { FC } from "react";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const CardsSection: FC<Props> = ({ className }) => {
  const t = useTranslations();
  return (
    <section className="section-padding mt-6">
      <div className="container-custom">
        <section
          className="grid auto-rows-[minmax(280px,auto)] grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-[1.6fr_1fr] xl:grid-cols-[1.6fr_1fr_1.1fr]"
        >
          <div
            className="flex flex-col justify-between gap-10 rounded-xl border border-[#222222] bg-[linear-gradient(180deg,_rgba(22,22,22,0)_0%,_#161616_100%),_#161616] p-6 xs:gap-24 xs:p-8 md:gap-32 md:p-10 lg:col-start-1 lg:row-span-2 lg:row-start-1 xl:col-start-1 xl:row-span-2 xl:row-start-1"
          >
            <h1
              className="text-[32px] font-bold leading-[40px] text-text-primary xs:text-[40px] md:text-[54px] md:leading-[56px]"
            >
              {t("HomePage.CardsSection.Title")}
              {/*Сервис онлайн оплат для бизнеса*/}
            </h1>
            <p
              className="max-w-[277px] text-lg font-normal leading-[26px] text-white/60"
            >
              Предоставляем надежные платежные решения закрывающие проблемы
              вашего бизнеса
            </p>
          </div>

          <div
            className="rounded-xl bg-card-bg px-4 py-6 lg:col-start-2 lg:row-start-1 xl:col-start-2 xl:row-start-1"
          >
            <div className="flex flex-col justify-between gap-24">
              <div
                className="flex max-w-fit items-center gap-2 rounded-[30px] bg-[#202020] px-2 py-1"
              >
                <div
                  className="inline-block h-[5px] w-[5px] rounded-full bg-[#8AE16A]"
                ></div>
                <div className="mt-0.5 flex text-sm">
                  Online
                  <p className="ml-1 text-white/60">
                    24/7
                  </p>
                </div>
              </div>
              <div>
                <h2
                  className="mb-3 max-w-[235px] text-2xl leading-[27px] text-text-primary"
                >
                  Помощь с подключением
                </h2>
                <div className="flex justify-between gap-2">
                  <p
                    className="max-w-[235px] text-sm text-white/60 tracking-[0.5px]"
                  >
                    Техническая поддержка, которая всегда на связи
                  </p>
                  <button
                    className="btn-black flex h-10 w-10 min-w-10 items-center justify-center p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="17"
                      viewBox="0 0 9 17"
                      fill="none"
                    >
                      <path
                        d="M0.75 0.75L8.25 8.25L0.749999 15.75"
                        stroke="#EDEDED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl bg-card-bg px-4 py-6 lg:col-start-2 lg:row-start-2 xl:col-start-2 xl:row-start-2"
          >
            <div className="flex flex-col justify-between gap-24">
              <div>0.8%</div>
              <div className="flex flex-col justify-between gap-3">
                <p
                  className="max-w-[235px] text-sm text-white/60 tracking-[0.5px]"
                >
                  Калькулятор тарифа
                </p>
                <div className="flex items-center justify-between gap-2">
                  <h2
                    className="max-w-[235px] text-2xl leading-[27px] text-text-primary"
                  >
                    Рассчитайте тариф для вашего бизнеса
                  </h2>
                  <button
                    className="btn-black flex h-10 w-10 min-w-10 items-center justify-center p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="17"
                      viewBox="0 0 9 17"
                      fill="none"
                    >
                      <path
                        d="M0.75 0.75L8.25 8.25L0.749999 15.75"
                        stroke="#EDEDED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <p></p>
            <h2></h2>
          </div>

          <div
            className="flex flex-col justify-between rounded-xl bg-card-bg px-4 py-6 lg:col-span-2 lg:row-start-3 xl:col-span-1 xl:col-start-3 xl:row-span-2 xl:row-start-1"
          >
            <div></div>
            <div className="mb-2">
              <p
                className="mb-2 max-w-[235px] text-sm tracking-[0.5px] text-white/60"
              >
                Ставка
              </p>
              <h1
                className="font-helvetica-neue mb-4 text-[72px] font-bold leading-[72px] tracking-[-4.32px] text-white"
              >
                0.8 %
              </h1>
              <p className="text-base font-normal leading-[20px] opacity-50">
                Для новых клиентов <span className="block">Global Pay</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
