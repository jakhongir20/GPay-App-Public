import { FC } from "react";

interface Props {
  className?: string;
}

export const RateCalculatorSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="rounded-xl bg-card-bg p-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col">
              <h2 className="text-hero-title mb-12">
                Рассчитайте свою процентную ставку к тарифу
              </h2>

              <div className="mb-8">
                <p className="mb-4 text-lg leading-[26px] text-white/60">
                  Выберите валюту
                </p>
                <div className="flex gap-3">
                  <button
                    className="btn-primary rounded-[34px] px-6 py-3 text-sm font-medium"
                  >
                    Узбекский сум
                  </button>
                  <button
                    className="btn-black px-6 py-3 text-sm font-medium text-white"
                  >
                    Доллар США
                  </button>
                </div>
              </div>

              <div className="mb-12">
                <p className="mb-4 text-lg leading-[26px] text-white/60">
                  Укажите оборот в год
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    className="btn-black px-6 py-3 text-sm font-medium text-white"
                  >
                    до 100 млн
                  </button>
                  <button
                    className="btn-primary rounded-[34px] px-6 py-3 text-sm font-medium"
                  >
                    до 500 млн
                  </button>
                  <button
                    className="btn-black px-6 py-3 text-sm font-medium text-white"
                  >
                    до 1 млрд
                  </button>
                  <button
                    className="btn-black px-6 py-3 text-sm font-medium text-white"
                  >
                    до 5 млрд
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 14.6667C11.6667 14.6667 14.6667 11.6667 14.6667 8C14.6667 4.33333 11.6667 1.33333 8 1.33333C4.33333 1.33333 1.33333 4.33333 1.33333 8C1.33333 11.6667 4.33333 14.6667 8 14.6667Z"
                    stroke="#EDEDED"
                    stroke-opacity="0.6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 10.6667V8"
                    stroke="#EDEDED"
                    stroke-opacity="0.6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.99609 5.33333H8.00276"
                    stroke="#EDEDED"
                    stroke-opacity="0.6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-sm leading-[19px] text-white/60"
                >Как формируется расчет?</span
                >
              </div>
            </div>

            <div className="flex flex-col">
              <p
                className="mb-12 text-right text-lg leading-[26px] text-white/60 lg:max-w-[328px] lg:self-end"
              >
                Для оборотов от 500 млн действует выгодная
                <span className="text-button-primary">тарифная скидка</span> для
                некоторых типов карт
              </p>

              <div className="rounded-xl bg-card-bg p-6">
                <table className="w-full">
                  <thead>
                  <tr className="border-b border-gray-700">
                    <th
                      className="pb-4 text-left text-sm font-medium text-white/60"
                    >
                      Карта
                    </th>
                    <th
                      className="pb-4 text-right text-sm font-medium text-white/60"
                    >
                      Тариф
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="flex items-center gap-3 py-4">
                      <img
                        src="/images/payment/uzcard.svg"
                        alt="Uzcard"
                        className="h-6 w-6"
                      />
                      <span className="text-base text-text-primary">Uzcard</span>
                    </td>
                    <td className="py-4 text-right text-base text-text-primary">
                      1%
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="flex items-center gap-3 py-4">
                      <img
                        src="/images/payment/humo.svg"
                        alt="Humo"
                        className="h-6 w-6"
                      />
                      <span className="text-base text-text-primary">Humo</span>
                    </td>
                    <td className="py-4 text-right text-base">
                      <span className="text-white/60 line-through">1%</span>
                      <span className="ml-2 text-text-primary">0,5%</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="flex items-center gap-3 py-4">
                      <img
                        src="/images/payment/visa.svg"
                        alt="Visa"
                        className="h-6 w-6"
                      />
                      <span className="text-base text-text-primary">Visa</span>
                    </td>
                    <td className="py-4 text-right text-base">
                      <span className="text-white/60 line-through">2%</span>
                      <span className="ml-2 text-text-primary">0,5%</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="flex items-center gap-3 py-4">
                      <img
                        src="/images/payment/mastercard.svg"
                        alt="Mastercard"
                        className="h-6 w-6"
                      />
                      <span className="text-base text-text-primary"
                      >Mastercard</span
                      >
                    </td>
                    <td className="py-4 text-right text-base">
                      <span className="text-white/60 line-through">2%</span>
                      <span className="ml-2 text-text-primary">0,5%</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="flex items-center gap-3 py-4">
                      <img
                        src="/images/payment/mir.svg"
                        alt="MIR"
                        className="h-6 w-6"
                      />
                      <span className="text-base text-text-primary">MIR</span>
                    </td>
                    <td className="py-4 text-right text-base">
                      <span className="text-white/60 line-through">2%</span>
                      <span className="ml-2 text-text-primary">0,5%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex items-center gap-3 py-4">
                      <img
                        src="/images/payment/unionpay.svg"
                        alt="UnionPay"
                        className="h-6 w-6"
                      />
                      <span className="text-base text-text-primary"
                      >UnionPay</span
                      >
                    </td>
                    <td className="py-4 text-right text-base">
                      <span className="text-white/60 line-through">1%</span>
                      <span className="ml-2 text-text-primary">0,5%</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
