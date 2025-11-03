"use client";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/app/shared/helpers";
import { FilterButtonGroup } from "@/app/components/shared/FilterButtonGroup";

interface Props {
  className?: string;
}

export const SolutionBusinessSection: FC<Props> = ({ className }) => {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState(0);

  const filters = [
    { label: t("HomePage.SolutionBusinessSection.Filters.Banks"), count: 15, active: activeFilter === 0 },
    { label: "МФО", count: 15, active: activeFilter === 1 },
    { label: "МФО", count: 15, active: activeFilter === 2 },
    { label: "МФО", count: 15, active: activeFilter === 3 },
    { label: "МФО", count: 15, active: activeFilter === 4 },
    { label: "МФО", count: 15, active: activeFilter === 5 },
  ];

  const banks = [
    { name1: "Hamkor Bank", name2: "SQB", logo1: "/images/brands/hamkorbank.svg", logo2: "/images/brands/sqbbank.svg" },
    {
      name1: "AloqaBank",
      name2: "Ipotekabank",
      logo1: "/images/brands/aloqabank.svg",
      logo2: "/images/brands/ipotekabank.svg",
    },
    {
      name1: "Ipak Yuli Bank",
      name2: "TBC Bank",
      logo1: "/images/brands/ipakyulibank.svg",
      logo2: "/images/brands/tbcbank.svg",
    },
    {
      name1: "Kapitalbank",
      name2: "NBU",
      logo1: "/images/brands/kapitalbank.svg",
      logo2: "/images/brands/nbubank.svg",
    },
  ];
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content">
          <div
            className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="text-section-title mb-4 lg:max-w-[600px] lg:mb-0">
              {t("HomePage.SolutionBusinessSection.Title")}
            </h2>
            <p className="text-section-subtitle lg:max-w-[398px]">
              {t("HomePage.SolutionBusinessSection.Description")}
            </p>
          </div>

          <div className="mb-12">
            <FilterButtonGroup
              items={filters.map((filter, index) => ({
                label: filter.label,
                count: filter.count,
                active: filter.active,
                onClick: () => setActiveFilter(index),
              }))}
            />
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
          >
            {banks.map((bank, index) => {
              // For 2 columns layout (mobile/tablet)
              const isRightCol2 = (index + 1) % 2 === 0; // Last column in 2-column row (indices 1, 3, 5...)
              const totalRows2 = Math.ceil(banks.length / 2);
              const currentRow2 = Math.floor(index / 2);
              const isBottomRow2 = currentRow2 === totalRows2 - 1; // Last row in 2-column layout

              // For 4 columns layout (lg)
              const isRightCol4 = (index + 1) % 4 === 0; // Last column in 4-column row (indices 3, 7, 11...)
              const totalRows4 = Math.ceil(banks.length / 4);
              const currentRow4 = Math.floor(index / 4);
              const isBottomRow4 = currentRow4 === totalRows4 - 1; // Last row in 4-column layout

              return (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col lg:gap-20 xs:gap-14 gap-10 items-center justify-center py-8 px-6",
                    // Mobile/tablet: right border except last column, bottom border except last row
                    !isRightCol2 && "border-r border-[#232323]",
                    !isBottomRow2 && "border-b border-[#232323]",
                    // Large screens: reset and apply 4-column borders
                    "lg:border-r-0 lg:border-b-0",
                    !isRightCol4 && "lg:border-r lg:border-[#232323]",
                    !isBottomRow4 && "lg:border-b lg:border-[#232323]",
                  )}
                >
                  <img
                    src={bank.logo1}
                    alt={bank.name1}
                    className="h-auto max-h-12 w-auto"
                  />
                  <img
                    src={bank.logo2}
                    alt={bank.name2}
                    className="h-auto max-h-12 w-auto"
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};
