import { FC } from "react";
import { Checkbox } from "@/app/components/shared/checkbox";

interface Props {
  className?: string;
}

export const AboutProjectStep: FC<Props> = ({ className }) => {
  return (
    <section>
      <div className="flex flex-col">
        <h2 className="text-section-title mb-6 max-w-[600px]">
          О проекте
        </h2>
        <p className="text-section-subtitle">
          Расскажите нам о своем бизнесе как можно подробнее
        </p>
      </div>
      <hr className={"border-t w-full border-[#1C1C1C] my-8"} />
      <div className={"p-6 bg-[#141414] rounded-xl"}>
        <h4 className={"text-xl text-text-primary mb-8"}>На каком этапе ваш проект сейчас?</h4>
        <button className={"bg-button-primary px-3 py-2 text-sm rounded-lg"}>Проект работает</button>
        <br />
        <br />
        <form className="w-full space-y-6">
          <div>
            <label
              className="mb-2 block text-base tracking-[-0.16px] text-white/60"
            >
              Ссылка на демонстрацию <span className="text-text-primary">*</span>
            </label>
            <div className="relative">
              <input
                placeholder={"https/"}
                className="w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-2 block text-base tracking-[-0.16px] text-white/60"
            >
              Расскажите про ваш проект
            </label>
            <div className="relative">
              <textarea
                placeholder={"Напишите детальное описание, чтобы мы смогли подобрать для вас лучшее решение "}
                className="w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary"
              />

            </div>
            <small className={"text-[rgba(237,237,237,0.60)] text-xs"}>
              Расскажите об особенностях, при помощи чего там и
              туда сюда и т.д.</small>
          </div>
          {/*second title*/}
          <br />
          <h4 className={"text-xl text-text-primary mb-8"}>С какими платежными сервисами работаете сейчас?</h4>
          <div>
            <div className="relative">
              <input
                placeholder={"Например: Robokassa, Click и др."}
                className="w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary"
              />
            </div>
            <Checkbox id={"demo"} label={"Нет платежных сервисов"} className={"mt-4"} />
          </div>
          {/*third title*/}
          <br />
          <h4 className={"text-xl text-text-primary mb-8"}>Интеграции и сервисы</h4>
          <div>
            <label
              className="mb-2 block text-base tracking-[-0.16px] text-white/60"
            >
              Через какие каналы принимаете оплату? <span className="text-text-primary">*</span>
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary"

              >
                <option value="">Резидент Республики Узбекистан</option>
                <option value="bank">Банк</option>
                <option value="mfo">МФО</option>
                <option value="other">Другое</option>
              </select>
              <img
                src="/images/icon/arrow-down.svg"
                alt="Dropdown"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-2 block text-base tracking-[-0.16px] text-white/60"
            >
              <div className={"flex gap-1"}>
                Нужна ли интеграция CMS/Платформами ? <span className="text-text-primary">*</span>
              </div>
            </label>
            <div className="relative flex gap-1">
              <button className={"btn-primary px-3"}>Да</button>
              <button className={"btn-user rounded-lg px-3"}>Нет</button>
            </div>
            <div className="relative mt-4">
              <select
                className="w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary"

              >
                <option value="">Резидент Республики Узбекистан</option>
                <option value="bank">Банк</option>
                <option value="mfo">МФО</option>
                <option value="other">Другое</option>
              </select>
              <img
                src="/images/icon/arrow-down.svg"
                alt="Dropdown"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2"
              />
            </div>
          </div>

          <div>
            <label
              className="mb-2 block text-base tracking-[-0.16px] text-white/60"
            >
              Желаемый тип интеграции
              <span className="text-text-primary">*</span>
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary"

              >
                <option value="">Резидент Республики Узбекистан</option>
                <option value="bank">Банк</option>
                <option value="mfo">МФО</option>
                <option value="other">Другое</option>
              </select>
              <img
                src="/images/icon/arrow-down.svg"
                alt="Dropdown"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-2 block text-base tracking-[-0.16px] text-white/60"
            >
              Какие дополнительные функции вам нужны?
              <span className="text-text-primary">*</span>
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary"

              >
                <option value="">Резидент Республики Узбекистан</option>
                <option value="bank">Банк</option>
                <option value="mfo">МФО</option>
                <option value="other">Другое</option>
              </select>
              <img
                src="/images/icon/arrow-down.svg"
                alt="Dropdown"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2"
              />
            </div>
          </div>

        </form>
      </div>
      {/*  form action*/}
      <div className={"py-6 flex items-center justify-between"}>
        <div className="flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15 8C15 8.98224 14.5279 9.85423 13.7983 10.4015C13.9273 11.3044 13.6446 12.2549 12.95 12.9494C12.2553 13.6441 11.3048 13.9269 10.4019 13.7978C9.85465 14.5277 8.98248 15 8 15C7.01773 15 6.14572 14.5279 5.59848 13.7983C4.69556 13.9273 3.74514 13.6445 3.05055 12.9499C2.35595 12.2553 2.07316 11.3048 2.2022 10.4019C1.47228 9.85464 1 8.98248 1 8C1 7.01773 1.47208 6.14573 2.20173 5.59848C2.07273 4.69557 2.35552 3.74513 3.0501 3.05055C3.74471 2.35595 4.69519 2.07316 5.59813 2.2022C6.14535 1.47228 7.01752 1 8 1C8.98224 1 9.85423 1.47205 10.4015 2.20167C11.3044 2.07265 12.2549 2.35544 12.9494 3.05003C13.6441 3.74465 13.9269 4.69516 13.7978 5.59813C14.5277 6.14535 15 7.01752 15 8ZM11.7086 5.15657C12.0364 5.40984 12.0967 5.88086 11.8435 6.20862L7.59347 11.7086C7.45747 11.8846 7.25037 11.9912 7.0281 11.9995C6.80583 12.0078 6.59133 11.9171 6.44254 11.7518L4.19254 9.25176C3.91544 8.94388 3.9404 8.46966 4.24828 8.19257C4.55617 7.91547 5.03038 7.94043 5.30748 8.24831L6.95616 10.0802L10.6565 5.29145C10.9098 4.96369 11.3808 4.9033 11.7086 5.15657Z"
                  fill="#EDEDED" />
          </svg>

          <span
            className="font-helvetica-neue-cyr text-sm font-normal text-[rgba(237,237,237,0.40)]"
          >Сохранено в 10:21</span
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
