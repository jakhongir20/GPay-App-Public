import { FC } from "react";

interface Props {
  className?: string;
}

export const PaymentSolutionSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="rounded-xl bg-card-bg p-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col">
              <h2 className="text-hero-title mb-6">
                Платежные решения под ваш бизнес по вашему запросу
              </h2>
              <p className="mb-12 text-lg leading-[26px] text-white/60">
                Принимаем платежи от любых банков с комиссией от 1%
              </p>

              <div className="flex flex-wrap gap-4">
                <div
                  className="flex items-center gap-3 rounded-xl  px-4 py-3 backdrop-blur-sm"
                >
                  <img
                    src="/images/payment/uzcard.svg"
                    alt="Uzcard"
                    className="h-8 w-8"
                  />
                  <span className="text-sm font-medium text-white">Uzcard</span>
                </div>

                <div
                  className="flex items-center gap-3 rounded-xl  px-4 py-3 backdrop-blur-sm"
                >
                  <img
                    src="/images/payment/humo.svg"
                    alt="Humo"
                    className="h-8 w-8"
                  />
                  <span className="text-sm font-medium text-white">Humo</span>
                </div>

                <div
                  className="flex items-center gap-3 rounded-xl  px-4 py-3 backdrop-blur-sm"
                >
                  <img
                    src="/images/payment/visa.svg"
                    alt="Visa"
                    className="h-8 w-8"
                  />
                  <span className="text-sm font-medium text-white">Visa</span>
                </div>

                <div
                  className="flex items-center gap-3 rounded-xl  px-4 py-3 backdrop-blur-sm"
                >
                  <img
                    src="/images/payment/mastercard.svg"
                    alt="Mastercard"
                    className="h-8 w-8"
                  />
                  <span className="text-sm font-medium text-white">Mastercard</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/iphone.svg"
                alt="iPhone Mockup"
                className="h-auto w-80"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
