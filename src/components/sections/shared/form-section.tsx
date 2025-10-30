import { FC } from "react";

interface Props {
  className?: string;
}

export const FormSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding py-16">
      <div className="container-custom">
        <section className="section-content gradient-form-bg">
          <div className="flex flex-col gap-10 sm:flex-row">
            <div
              className="flex h-auto flex-col justify-between sm:basis-1/2 sm:gap-4"
            >
              <h2 className="text-h2 max-w-[590px]">
                Получите решение для вашего бизнеса
              </h2>
              <p
                className="font-helvetica-neue-cyr max-w-[350px] text-lg leading-6 text-white/60"
              >
                Пройдите полный процесс регистрации и мы предложим оптимальное
                решение для вашего бизнеса
              </p>
            </div>
            <div className="sm:basis-1/2">
              <form className="w-full space-y-6">
                <div>
                  <label
                    className="mb-2 block text-base tracking-[-0.16px] text-white/60"
                  >
                    Тип компании <span className="text-text-primary">*</span>
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
                    Категория бизнеса <span className="text-text-primary">*</span>
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
                    Сферы деятельности <span className="text-text-primary">*</span>
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
                <hr className="border-[#232323]" />

                <div
                  className="flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3"
                >
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-400">Успешно.</p>
                    <div
                      className="mt-1 flex items-center gap-4 text-xs text-white/60"
                    >
                      <span className="cursor-pointer hover:text-white"
                      >Конфиденциальность</span
                      >
                      <span className="cursor-pointer hover:text-white"
                      >Условия</span
                      >
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="h-12 w-full rounded-lg bg-button-primary text-base font-medium text-white transition-colors"
                >
                  Продолжить
                </button>

                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/images/icon/shield-check.svg"
                    alt="Shield Check"
                    className="h-5 w-5"
                  />
                  <span
                    className="font-helvetica-neue-cyr text-sm font-normal text-[#8AE16A]"
                  >Все данные защищены</span
                  >
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
