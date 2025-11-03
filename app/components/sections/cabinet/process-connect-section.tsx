import React, { FC } from "react";

interface Props {
  className?: string;
}

export const ProcessConnectSection: FC<Props> = ({ className }) => {
  const items = [
    { title: "Регистрация и подключение магазина" },
    { title: "Интеграция эквайринга" },
    { title: "Прием платежей" },
    { title: "Аналитика и управление средствами" },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content">
          <div
            className="flex flex-col mb-6 lg:justify-between"
          >
            <div className={"mb-4"}>
              <h2 className="text-section-title mb-4 lg:max-w-[500px] lg:mb-0">
                Процесс подключения к кабинету
              </h2>
              <p
                className="lg:max-w-[440px] text-left text-lg font-helvetica-neue-cyr leading-[26px] text-white/60 lg:text-right"
              >
              </p>
            </div>
            <div className={"flex flex-col justify-end"}>
              <p
                className="text-base text-right mb-3 font-helvetica-neue-cyr leading-[26px] text-white/60"
              >
                Среднее время на подключение
              </p>
              <div className={"flex items-center justify-end text-right gap-2"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.75 7V12.25L15.25 14" stroke="#F2F2F2" stroke-width="1.75" stroke-linecap="round"
                        stroke-linejoin="round" />
                  <path
                    d="M11.75 21C16.5825 21 20.5 17.0825 20.5 12.25C20.5 7.41751 16.5825 3.5 11.75 3.5C6.91751 3.5 3 7.41751 3 12.25C3 17.0825 6.91751 21 11.75 21Z"
                    stroke="#F2F2F2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className={"text-[#F2F2F2] text-2xl"}>16 часов</span>
              </div>
            </div>
          </div>
          <div className={"grid md:grid-cols-4 gap-3 xs:grid-cols-2"}>
            {items.map((item, index) => (
              <div key={index}>
                <div className={`mb-3 bg-button-primary rounded-lg h-1 ${index > 1 && "opacity-20"}`}></div>
                <div className={"bg-[#1C1C1C] flex flex-col gap-[258px] rounded-lg p-4"}>
                  <div className={"flex justify-between items-center"}>
                    <span className={"text-[28px] text-[rgba(242,242,242,0.95)]"}>0{index + 1}</span>
                    <div className={"flex items-center gap-2"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.83594 4.66602V8.16602L10.1693 9.33268" stroke="#F2F2F2" stroke-opacity="0.5"
                              stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                          d="M7.83333 13.9997C11.055 13.9997 13.6667 11.388 13.6667 8.16634C13.6667 4.94468 11.055 2.33301 7.83333 2.33301C4.61167 2.33301 2 4.94468 2 8.16634C2 11.388 4.61167 13.9997 7.83333 13.9997Z"
                          stroke="#F2F2F2" stroke-opacity="0.5" stroke-width="1.75" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                      <span className={"text-sm text-[rgba(242,242,242,0.50)]"}>2 часа</span>
                    </div>
                  </div>
                  <div className={"text-base text-[#F2F2F2]"}>{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
