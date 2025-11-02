"use client";

import React, { FC, useState } from "react";

interface Props {
  className?: string;
}

export const RateCalculatorSection: FC<Props> = ({ className }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<"uzs" | "usd">("uzs");
  const [selectedTurnover, setSelectedTurnover] = useState<"100" | "500" | "1000" | "5000">("500");

  const currencies = [
    { value: "uzs", label: "Узбекский сум" },
    { value: "usd", label: "Доллар США" },
  ];

  const turnovers = [
    { value: "100", label: "до 100 млн" },
    { value: "500", label: "до 500 млн" },
    { value: "1000", label: "до 1 млрд" },
    { value: "5000", label: "до 5 млрд" },
  ];

  const items = [
    { card: "Uzcard", rate1: "1%", icon: "/images/payment/uzcard.svg" },
    { card: "Humo", rate1: "1%", rate2: "0,5%", icon: "/images/payment/humo.svg" },
    { card: "Visa", rate1: "2%", rate2: "0,5%", icon: "/images/payment/visa.svg" },
    { card: "Mastercard", rate1: "2%", rate2: "0,5%", icon: "/images/payment/mastercard.svg" },
    { card: "MIR", rate1: "2%", rate2: "0,5%", icon: "/images/payment/mir.svg" },
    { card: "UnionPay", rate1: "2%", rate2: "0,5%", icon: "/images/payment/unionpay.svg" },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content">
          <div className={"flex justify-between items-center"}>
            <h2 className="text-section-title max-w-[500px]">
              Рассчитайте свою процентную ставку к тарифу
            </h2>
            <p
              className="mb-12 text-right text-lg leading-[26px] text-white/60 lg:max-w-[328px] lg:self-end"
            >
              Для оборотов <span className="text-white"> от 500 млн</span> действует выгодная
              <span className="text-white"> тарифная скидка</span> для
              некоторых типов карт
            </p>
          </div>
          <hr className={"border-white/10 my-10"} />
          <div className="flex justify-between gap-4">
            <section className={"max-w-[600px] w-full"}>
              <h3 className={"text-[#F2F2F2] text-2xl mb-4"}>Выберите валюту</h3>
              <div className={"bg-[#282828] flex items-center gap-1 rounded-2xl p-2 w-full"}>
                <div
                  className={"h-[86px] flex items-center text-lg text-[#F2F2F2] justify-center rounded-2xl w-full bg-button-primary"}>Узбекский
                  сум
                </div>
                <div
                  className={"h-[86px] flex items-center text-lg text-[#F2F2F2] justify-center w-full rounded-2xl"}>Доллар
                  США
                </div>
              </div>
              <h3 className={"text-[#F2F2F2] text-2xl mb-4 mt-10"}>Выберите валюту</h3>
              <div className={"border border-[#282828] rounded-2xl flex items-center gap-1 p-2 w-full"}>
                <div
                  className={"h-[118px] flex items-center text-lg text-[#F2F2F2] justify-center rounded-lg px-5 bg-button-primary"}>
                  до 100 млн
                </div>
                <div
                  className={"h-[118px] flex items-center text-lg text-[#F2F2F2] justify-center px-5 rounded-lg bg-[#363636]"}>
                  до 500 млн
                </div>
                <div
                  className={"h-[118px] flex items-center text-lg text-[#F2F2F2] justify-center px-5 rounded-lg bg-[#363636]"}>
                  до 1 млрд
                </div>
                <div
                  className={"h-[118px] flex items-center text-lg text-[#F2F2F2] justify-center px-5 rounded-lg bg-[#363636]"}>
                  до 5 млрд
                </div>
              </div>
            </section>
            <section className="flex flex-col">
              <div className="rounded-2xl bg-[#1D1D1D] px-6 py-4 w-[420px]">
                <div className={"flex justify-between items-center  text-sm text-[#999]"}>
                  <div>Карта</div>
                  <div>Тариф</div>
                </div>
                <hr className={"border-b border-white/10 mt-5"} />
                {items.map((item, index) => (
                  <div key={index} className={"flex justify-between border-b border-white/10 py-3 last:border-0"}>
                    <p className={"flex items-center gap-3"}>
                      <img src={item.icon} alt="" />
                      <span className={"text-[#F2F2F2] font-medium text-base font-helvetica-neue"}>{item.card}</span>
                    </p>
                    <div className={"flex items-center gap-2"}>
                      {item.rate2 ? <div className="h-full">
                        <div className="relative h-full overflow-hidden rounded-xl bg-neutral-900">
                          <div className="absolute inset-0 bg-stripes animate-stripes"></div>
                          <div
                            className=" relative font-bold flex items-center text-lg rounded-xl font-helvetica-neue text-white/60 px-3 py-1 h-[38px]">
                            {item.rate1}
                          </div>
                        </div>
                      </div> : <div
                        className={"bg-[#2B2B2B] font-medium flex items-center rounded-[40px] font-helvetica-neue text-white px-3.5 py-1 h-[38px]"}>
                        {item.rate1}
                      </div>}
                      {item.rate2 && <div
                        className={"bg-[#2B2B2B] font-medium flex items-center rounded-[40px] font-helvetica-neue text-white px-3.5 py-1 h-[38px]"}>
                        {item.rate2}
                      </div>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};
