"use client";
import { FC, useState } from "react";
import { ImageCheckbox } from "@/app/components/shared/ImageCheckbox";

interface Props {
  className?: string;
}

export const FinancialStep: FC<Props> = ({ className }) => {
  const [cards, setCards] = useState<Record<string, boolean>>({
    humo: true,
    uzcard: true,
    visa: false,
    mastercard: false,
  });

  const toggle = (key: keyof typeof cards) =>
    setCards((s) => ({ ...s, [key]: !s[key] }));

  return (
    <section>
      <div className="flex flex-col">
        <h2 className="text-section-title mb-6 max-w-[600px]">
          Финансовые показатели
        </h2>
        <p className="text-section-subtitle">
          Заполните данные о среднем чеке и оборотах вашего проекта
        </p>
      </div>
      <hr className={"border w-full border-[#1C1C1C] my-8"} />
      <div className={"p-6 bg-[#141414] rounded-xl"}>
        <h4 className={"text-xl text-text-primary mb-8"}>Месячные обороты проекта</h4>
        <form className="w-full space-y-6">
          <div className={"grid grid-cols-2 gap-3"}>
            <div>
              <label
                className="mb-2 block text-base tracking-[-0.16px] text-white/60"
              >
                от <span className="text-text-primary">*</span>
              </label>
              <div className="relative">
                <input
                  placeholder={"100.000 сум"}
                  className="w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary"
                />
              </div>
            </div>
            <div>
              <label
                className="mb-2 block text-base tracking-[-0.16px] text-white/60"
              >
                до <span className="text-text-primary">*</span>
              </label>
              <div className="relative">
                <input
                  placeholder={"200.000 сум"}
                  className="w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary"
                />
              </div>
            </div>
            <small className={"text-[rgba(237,237,237,0.60)] text-xs"}>Можете указать примерные значения</small>
          </div>
          <div>
            <label
              className="mb-4 block text-base tracking-[-0.16px] text-white/60"
            >
              Через какие карты хотите проводить оплату? <span className="text-text-primary">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              <ImageCheckbox
                checked={cards.humo}
                onChange={() => toggle("humo")}
                label="Humo"
                iconSrc="/images/payment/humo.svg"
              />
              <ImageCheckbox
                checked={cards.uzcard}
                onChange={() => toggle("uzcard")}
                label="Uzcard"
                iconSrc="/images/payment/uzcard.svg"
              />
              <ImageCheckbox
                checked={cards.visa}
                onChange={() => toggle("visa")}
                label="Visa"
                iconSrc="/images/payment/visa.svg"
              />
              <ImageCheckbox
                checked={cards.mastercard}
                onChange={() => toggle("mastercard")}
                label="Mastercard"
                iconSrc="/images/payment/mastercard.svg"
                disabled
              />
            </div>
          </div>

        </form>
      </div>
      {/*  form action*/}
      <div className={"py-6 flex items-center justify-between"}>
        <div className="flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.39935 0.749999C5.9767 -0.250001 7.42008 -0.249999 7.99743 0.750001L13.1936 9.75C13.7709 10.75 13.0492 12 11.8945 12H1.50224C0.347535 12 -0.37415 10.75 0.2032 9.75L5.39935 0.749999ZM6.69839 2.5C7.1126 2.5 7.44839 2.83579 7.44839 3.25V6.25C7.44839 6.66421 7.1126 7 6.69839 7C6.28418 7 5.94839 6.66421 5.94839 6.25V3.25C5.94839 2.83579 6.28418 2.5 6.69839 2.5ZM6.69839 10.5C7.25068 10.5 7.69839 10.0523 7.69839 9.5C7.69839 8.94772 7.25068 8.5 6.69839 8.5C6.14611 8.5 5.69839 8.94772 5.69839 9.5C5.69839 10.0523 6.14611 10.5 6.69839 10.5Z"
                  fill="#F1DF38" />
          </svg>
          <span
            className="font-helvetica-neue-cyr text-sm font-normal text-[#F1DF38]"
          >Не можем сохранить страницу</span
          >
        </div>
        <div className={"flex gap-3"}>
          <button
            type={"button"}
            className="h-12 px-4 sm:px-6  btn-user rounded-lg"
          >
            Назад
          </button>
          <button
            type="submit"
            className="h-12 px-4 sm:px-6 rounded-lg bg-button-primary text-base font-medium text-white transition-colors"
          >
            Далее
          </button>
        </div>
      </div>
    </section>
  );
};
