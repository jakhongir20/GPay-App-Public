import { FC } from "react";

interface Props {
  className?: string;
}

export const CasesSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="section-content">
          <div
            className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="text-section-title mb-4 max-w-[600px] lg:mb-0">
              Кейсы <br />
              наших клиентов
            </h2>
            <p
              className="max-w-[440px] text-left text-lg leading-[26px] text-white"
            >
              Наши решения создают прозрачный платёжный процесс:
              <span className="text-white/60"
              >от приёма платежей и мгновенных переводов до автоматической
                сверки и аналитики.
              </span>
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            <button
              className="btn-primary rounded-[34px] px-6 py-3 text-sm font-medium"
            >
              Путешествия 1
            </button>
            <button className="btn-black px-6 py-3 text-sm font-medium text-white">
              Онлайн-магазины 2
            </button>
            <button className="btn-black px-6 py-3 text-sm font-medium text-white">
              HoReCa 2
            </button>
          </div>

          <div
            className="grid grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-4 sm:gap-6"
          >
            <div className="flex flex-col items-start">
              <div className="mb-3 h-[310px] w-full rounded-lg bg-[#1D1D1D]"></div>
              <div
                className="rounded-[50px] border border-[#343434] px-3 py-1.5 text-sm font-medium text-white/60"
              >
                Путешествия
              </div>
              <div className="my-6 flex items-center gap-6">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <img src="/images/teams/01.png" alt="Case 2" />
                </div>
                <div className="flex flex-col gap-2.5">
                  <p className="text-sm text-[#787878]">Head of Product Uzum</p>
                  <span className="font-helvetica-neue text-base text-white"
                  >Иванова Наталья</span
                  >
                </div>
              </div>
              <h4 className="mb-3.5 text-xl text-[#D4D4D4]">
                Онлайн-сервис бронирования туров
              </h4>
              <p className="text-sm font-normal text-white/60">
                Компания TravelUz подключила Global Pay для приёма онлайн-оплат
                за туры и авиабилеты. Благодаря интеграции с банками
                Узбекистана..
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-3 h-[310px] w-full rounded-lg bg-[#1D1D1D]"></div>
              <div
                className="rounded-[50px] border border-[#343434] px-3 py-1.5 text-sm font-medium text-white/60"
              >
                Путешествия
              </div>
              <div className="my-6 flex items-center gap-6">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <img src="/images/teams/01.png" alt="Case 2" />
                </div>
                <div className="flex flex-col gap-2.5">
                  <p className="text-sm text-[#787878]">Head of Product Uzum</p>
                  <span className="font-helvetica-neue text-base text-white"
                  >Иванова Наталья</span
                  >
                </div>
              </div>
              <h4 className="mb-3.5 text-xl text-[#D4D4D4]">
                Онлайн-сервис бронирования туров
              </h4>
              <p className="text-sm font-normal text-white/60">
                Компания TravelUz подключила Global Pay для приёма онлайн-оплат
                за туры и авиабилеты. Благодаря интеграции с банками
                Узбекистана..
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <button
              className="btn-black flex h-10 !w-10 items-center justify-center p-0"
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
              className="btn-black flex h-10 !w-10 items-center justify-center p-0"
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
      </div>
    </section>
  );
};
