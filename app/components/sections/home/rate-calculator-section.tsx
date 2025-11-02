"use client";

import React, { FC, useState } from "react";
import { cn } from "@/app/shared/helpers";

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
          <div className={"flex flex-col lg:flex-row justify-between lg:items-center"}>
            <h2 className="text-section-title lg:max-w-[500px]">
              Рассчитайте свою процентную ставку к тарифу
            </h2>
            <p
              className="lg:mb-12 lg:text-right text-lg leading-[26px] text-white/60 lg:max-w-[328px] lg:self-end"
            >
              Для оборотов <span className="text-white"> от 500 млн</span> действует выгодная
              <span className="text-white"> тарифная скидка</span> для
              некоторых типов карт
            </p>
          </div>
          <hr className={"border-white/10 my-10"} />
          <div className="flex md:flex-row flex-col justify-between gap-4">
            <section className={"md:max-w-[600px] w-full"}>
              <h3 className={"text-[#F2F2F2] text-2xl mb-4"}>Выберите валюту</h3>
              <div className={"bg-[#282828] flex items-center gap-1 rounded-2xl p-1.5 sm:p-2 w-full"}>
                {currencies.map((currency) => (
                  <button
                    key={currency.value}
                    onClick={() => setSelectedCurrency(currency.value as "uzs" | "usd")}
                    className={cn(
                      "sm:h-[86px] h-16 flex items-center text-lg text-[#F2F2F2] justify-center rounded-2xl w-full transition-colors",
                      selectedCurrency === currency.value
                        ? "bg-button-primary"
                        : "hover:bg-button-primary",
                    )}
                  >
                    {currency.label}
                  </button>
                ))}
              </div>
              <h3 className={"text-[#F2F2F2] text-2xl mb-4 mt-10"}>Укажите оборот в год</h3>
              <div
                className={"border border-[#282828] rounded-2xl flex items-center gap-1 p-2 overflow-x-auto scrollbar-hide md:overflow-x-visible md:max-w-fit"}>
                {turnovers.map((turnover) => (
                  <button
                    key={turnover.value}
                    onClick={() => setSelectedTurnover(turnover.value as "100" | "500" | "1000" | "5000")}
                    className={cn(
                      "h-[118px] flex-shrink-1 flex items-center text-lg text-[#F2F2F2] justify-center rounded-lg px-5 transition-colors",
                      "sm:min-w-0  w-full",
                      selectedTurnover === turnover.value
                        ? "bg-button-primary"
                        : "bg-[#363636] hover:bg-button-primary",
                    )}
                  >
                    {turnover.label}
                  </button>
                ))}
              </div>
            </section>
            <section className="flex flex-col">
              <div className="rounded-2xl bg-[#1D1D1D] px-6 py-4 w-full md:w-[420px]">
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
          <hr className={"border-white/10 my-10"} />
          <p className={"flex items-center gap-2"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g opacity="0.5">
                <path
                  d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 15H13V17H11V15ZM13 13.355V14H11V12.5C11 12.2348 11.1054 11.9804 11.2929 11.7929C11.4804 11.6054 11.7348 11.5 12 11.5C12.2841 11.5 12.5623 11.4193 12.8023 11.2673C13.0423 11.1154 13.2343 10.8984 13.3558 10.6416C13.4773 10.3848 13.5234 10.0988 13.4887 9.81684C13.454 9.53489 13.34 9.26858 13.1598 9.04891C12.9797 8.82924 12.7409 8.66523 12.4712 8.57597C12.2015 8.48671 11.912 8.47587 11.6364 8.54471C11.3608 8.61354 11.1104 8.75923 10.9144 8.96482C10.7183 9.1704 10.5847 9.42743 10.529 9.706L8.567 9.313C8.68863 8.70508 8.96951 8.14037 9.38092 7.67659C9.79233 7.2128 10.3195 6.86658 10.9086 6.67332C11.4977 6.48006 12.1275 6.44669 12.7337 6.57661C13.3399 6.70654 13.9007 6.99511 14.3588 7.41282C14.8169 7.83054 15.1559 8.36241 15.3411 8.95406C15.5263 9.54572 15.5511 10.1759 15.4129 10.7803C15.2747 11.3847 14.9785 11.9415 14.5545 12.3939C14.1306 12.8462 13.5941 13.1779 13 13.355Z"
                  fill="#FAFAFA" />
              </g>
            </svg>
            <span className={"text-[#FAFAFA]/50 text-base font-medium"}>

              Как формируется расчет?
            </span>
          </p>
        </section>
      </div>
    </section>
  );
};
