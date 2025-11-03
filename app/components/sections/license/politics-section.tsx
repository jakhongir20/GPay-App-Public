import { FC } from "react";

interface Props {
  className?: string;
}

export const PoliticsSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className={"section-content px-0 xs:px-10 md:px-16 bg-transparent"}>
          <h2 className="text-h2">Политики и условия</h2>
          <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-4">
            <div
              className="group rounded-lg bg-[#141414] p-4 hover:bg-[#141414] md:bg-transparent"
            >
              <div className="mb-6 space-y-3 md:max-w-[238px]">
                <h3 className="text-lg tracking-[-0.18px] text-white">
                  Политика конфиденциальности
                </h3>
                <p className="text-xs leading-normal text-[#787878]">
                  Как мы собираем, используем и защищаем персональные данные
                  пользователей
                </p>
              </div>
              <p
                className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 md:opacity-0"
              >
                <img
                  src="/images/icon/heroicons-outline/arrow-long-right.svg"
                  alt="Arrow Right"
                />
              </p>
            </div>
            <div
              className="group rounded-lg bg-[#141414] p-4 hover:bg-[#141414] md:bg-transparent"
            >
              <div className="mb-6 space-y-3 md:max-w-[238px]">
                <h3 className="text-lg tracking-[-0.18px] text-white">
                  Политика конфиденциальности
                </h3>
                <p className="text-xs leading-normal text-[#787878]">
                  Как мы собираем, используем и защищаем персональные данные
                  пользователей
                </p>
              </div>
              <p
                className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 md:opacity-0"
              >
                <img
                  src="/images/icon/heroicons-outline/arrow-long-right.svg"
                  alt="Arrow Right"
                />
              </p>
            </div>
            <div
              className="group rounded-lg bg-[#141414] p-4 hover:bg-[#141414] md:bg-transparent"
            >
              <div className="mb-6 space-y-3 md:max-w-[238px]">
                <h3 className="text-lg tracking-[-0.18px] text-white">
                  Политика конфиденциальности
                </h3>
                <p className="text-xs leading-normal text-[#787878]">
                  Как мы собираем, используем и защищаем персональные данные
                  пользователей
                </p>
              </div>
              <p
                className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 md:opacity-0"
              >
                <img
                  src="/images/icon/heroicons-outline/arrow-long-right.svg"
                  alt="Arrow Right"
                />
              </p>
            </div>
            <div
              className="group rounded-lg bg-[#141414] p-4 hover:bg-[#141414] md:bg-transparent"
            >
              <div className="mb-6 space-y-3 md:max-w-[238px]">
                <h3 className="text-lg tracking-[-0.18px] text-white">
                  Политика конфиденциальности
                </h3>
                <p className="text-xs leading-normal text-[#787878]">
                  Как мы собираем, используем и защищаем персональные данные
                  пользователей
                </p>
              </div>
              <p
                className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 md:opacity-0"
              >
                <img
                  src="/images/icon/heroicons-outline/arrow-long-right.svg"
                  alt="Arrow Right"
                />
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
