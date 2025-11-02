import React, { FC } from "react";

interface Props {
  className?: string;
}

export const PaymentSolutionSection: FC<Props> = ({ className }) => {
  const payments = [
    { name: "Uzcard", icon: "/images/payment/uzcard-mini.svg" },
    { name: "Humo", icon: "/images/payment/humo-mini.svg" },
    { name: "Visa", icon: "/images/payment/visa-mini.svg" },
    { name: "Mastercard", icon: "/images/payment/mastercard-mini.svg" },
  ];
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content md:pt-8 pb-0">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_415px]">
            <div className="flex flex-col justify-between">
              <div className="md:mt-8 max-w-[630px]">
                <h2 className="text-section-title mb-6">
                  Платежные решения под ваш бизнес по вашему запросу
                </h2>
                <p className="mb-12 text-lg leading-[26px] text-white/60">
                  Принимаем платежи от любых банков с комиссией от 1%
                </p>
              </div>
              <div
                className="flex flex-wrap mx-auto md:mx-0 md:gap-8 gap-6 md:mb-14 mb-6 border max-w-fit border-[#212121] md:py-7 py-5 md:px-8 px-6 rounded-[30px] md:rounded-[44px]">
                {payments.map((payment, index) => (
                  <div
                    key={index}
                    className="flex items-center md:gap-4 gap-3 rounded-xl backdrop-blur-sm"
                  >
                    <img
                      src={payment.icon}
                      alt={payment.name}
                      className="md:h-8 h-6 md:w-8 w-6"
                    />
                    <span className="md:text-xl text-lg text-[#F2F2F2] font-helvetica-neue">{payment.name}</span>
                  </div>
                ))}
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
