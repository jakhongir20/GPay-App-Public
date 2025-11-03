import React, { FC } from "react";
import { cn } from "@/app/shared/helpers/helper-functions";

interface Props {
  className?: string;
}

export const AdvWorkSection: FC<Props> = ({ className }) => {
  const items = [
    { title: "Прозрачная отчетность" },
    { title: "Единая точка управления платежами" },
    { title: "Поддержка 24/7" },
    { title: "Безопасность и контроль" },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content">
          <div
            className="flex flex-col mb-16 lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="text-section-title mb-4 lg:max-w-[600px] lg:mb-0">
              Мы упрощаем работу с финансами
            </h2>
            <p
              className="lg:max-w-[440px] text-left text-lg font-helvetica-neue-cyr leading-[26px] text-white/60 lg:text-right"
            >
              Мы упрощаем работу с финансами, <span className={"text-white"}>чтобы вы могли сосредоточиться на росте своего дела</span>
            </p>
          </div>
          <div className={"grid md:grid-cols-4 gap-12 xs:grid-cols-2"}>
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col gap-4 sm:gap-8 relative",
                  // Add border using pseudo-element
                  // Show border if not last in row (xs: 2 cols, md: 4 cols)
                  (index % 2 !== 1 || index % 4 !== 3) && "after:absolute after:right-[-24px] after:top-0 after:bottom-0 after:w-px after:bg-[#232323] after:content-['']",
                  // Hide border on items that are last in their row at md breakpoint
                  index % 4 === 3 && "md:after:hidden",
                  // Show border on items that are not last in their row at xs breakpoint
                  index % 2 === 1 && "xs:after:hidden"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"
                    stroke="#00B04E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"
                    stroke="#00B04E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"
                    stroke="#00B04E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className={"sm:text-xl text-base text-[rgba(242,242,242,0.95)]"}>{item.title} </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
