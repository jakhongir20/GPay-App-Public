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
                    "border-b grid grid-cols-2 px-8 py-6 border-[#232323] overflow-hidden transition-all",
                    openIndex === index && "mb-0",
                  )}
                >
                  <div></div>
                  <div>
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex justify-between items-center gap-4  text-left"
                    >
                      <h4 className="text-xl md:text-2xl text-[#F2F2F2] font-helvetica-neue-cyr">
                        {item.question}
                      </h4>
                      {openIndex === index ? (
                        <p className={"min-w-6 flex justify-center"}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                               fill="none">
                            <path d="M6 18L18 6M6 6L18 18" stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round" />
                          </svg>
                        </p>
                      ) : (
                        <p className={"min-w-6 flex justify-center"}>
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
                        </p>
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="mt-6">
                        {item.answer.map((text, textIndex) => (
                          <PText key={textIndex}>{text}</PText>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/*{index < faqItems.length - 1 && (*/}
                {/*  <div className="border w-full border-[#1C1C1C] my-8" />*/}
                {/*)}*/}
              </div>
            ))}
          </section>
          <div className="flex justify-center pt-8">
            <button className="btn-black px-6 py-3 text-sm font-medium">
              Показать еще
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export const PText = ({ children }: { children: React.ReactNode; }) => (
  <p className={"text-[rgba(237,237,237,0.60)] text-lg font-helvetica-neue-cyr mb-6"}>
    {children}
  </p>
);
