"use client";

import { FC, useState } from "react";
import { cn } from "@/app/shared/helpers";

interface Props {
  className?: string;
}

interface FaqItem {
  question: string;
  answer: string[];
}

const faqItems: FaqItem[] = [
  {
    question: "Что такое интернет эквайринг?",
    answer: [
      "Онлайн-эквайринг — это технология, позволяющая принимать оплату за товары и услуги через интернет.",
      "Когда клиент оплачивает покупку банковской картой или через электронный кошелёк, эквайринговый сервис выступает посредником между вашим сайтом, банком-эмитентом клиента и банком-эквайером, обеспечивая безопасную и мгновенную передачу данных.",
      "Наше решение автоматизирует этот процесс, позволяя бизнесам любого масштаба принимать онлайн-платежи без сложных интеграций и с полной защитой финансовых операций.",
    ],
  },
  {
    question: "Насколько безопасны онлайн-платежи через вашу платформу?",
    answer: [
      "Наша платформа использует современные технологии шифрования и соответствует международным стандартам безопасности платежей.",
    ],
  },
  {
    question: "Как происходит подключение к платформе?Насколько безопасны онлайн-платежи через вашу платформу?",
    answer: [
      "Наша платформа использует современные технологии шифрования и соответствует международным стандартам безопасности платежей.",
    ],
  },
  {
    question: "Какие комиссии действуют при приёме онлайн-платежей?",
    answer: [
      "Наша платформа использует современные технологии шифрования и соответствует международным стандартам безопасности платежей.",
    ],
  },
  {
    question: "Можно ли интегрировать эквайринг с внутренней аналитикой компании?",
    answer: [
      "Наша платформа использует современные технологии шифрования и соответствует международным стандартам безопасности платежей.",
    ],
  },
  {
    question: "Как быстро зачисляются средства после оплаты?",
    answer: [
      "Наша платформа использует современные технологии шифрования и соответствует международным стандартам безопасности платежей.",
    ],
  },
];

export const FaqSection: FC<Props> = ({ className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content">
          <h2 className="text-section-title mb-10">Часто задаваемые <br /> вопросы</h2>
          <section className="">
            {faqItems.map((item, index) => (
              <div key={index}>
                <div
                  className={cn(
                    "grid md:grid-cols-2 sm:px-8 px-3  sm:py-6 py-4 border-[#232323] overflow-hidden transition-all",
                    index === faqItems.length - 1 ? "border-b-0" : "border-b",
                    openIndex === index && "mb-0 bg-[#1C1C1C] rounded-xl border-none",
                    openIndex === index + 1 && "border-none",
                  )}
                >
                  <div className={"md:block hidden"}></div>
                  <div>
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex justify-between items-center gap-4  text-left"
                    >
                      <h4 className="text-xl md:text-2xl text-[#F2F2F2] font-helvetica-neue-cyr">
                        {item.question}
                      </h4>
                      <p
                        className={cn("min-w-6 flex justify-center transition-transform duration-300", openIndex === index && "rotate-90")}>
                        {openIndex === index ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path d="M6 18L18 6M6 6L18 18" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="9"
                            viewBox="0 0 17 9"
                            fill="none"
                          >
                            <path
                              d="M15.75 0.75L8.25 8.25L0.75 0.75"
                              stroke="#F2F2F2"
                              strokeOpacity="0.5"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </p>
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        openIndex === index ? "max-h-[2000px] opacity-100 sm:mt-6 mt-4" : "max-h-0 opacity-0 mt-0",
                      )}
                    >
                      <div>
                        {item.answer.map((text, textIndex) => (
                          <PText key={textIndex}
                            className={item.answer?.length - 1 === textIndex ? "mb-0" : ""}>{text}</PText>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/*{index < faqItems.length - 1 && (*/}
                {/*  <div className="border w-full border-[#1C1C1C] my-8" />*/}
                {/*)}*/}
              </div>
            ))}
          </section>
          <div className="flex justify-center mt-7">
            <button
              className="btn-user mx-auto flex rounded-lg border-[#6A6A6A] bg-[#212121] px-6 py-3"
            >
              Показать еще
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export const PText = ({ className, children }: { className?: string, children: React.ReactNode; }) => (
  <p
    className={`text-[rgba(237,237,237,0.60)] text-base sm:text-lg font-helvetica-neue-cyr mb-6 last:mb-0 ${className}`}>{children}
    {children}
  </p>
);
