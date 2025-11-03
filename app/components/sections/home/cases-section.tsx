"use client";

import { FC, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { SwiperNavigation } from "@/app/components/shared/SwiperNavigation";
import { FilterButtonGroup } from "@/app/components/shared/FilterButtonGroup";
import { cn } from "@/app/shared/helpers/helper-functions";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  className?: string;
  sectionClassName?: string;
}

interface Case {
  id: string;
  image: string;
  categoryKey: string;
  avatar: string;
  role: string;
  name: string;
  titleKey: string;
  descriptionKey: string;
}

const caseKeys = [
  {
    id: "1",
    image: "",
    categoryKey: "Travel",
    avatar: "/images/teams/01.png",
    role: "Head of Product Uzum",
    name: "Иванова Наталья",
    titleKey: "Case1",
    descriptionKey: "Case1",
  },
  {
    id: "2",
    image: "",
    categoryKey: "Travel",
    avatar: "/images/teams/01.png",
    role: "Head of Product Uzum",
    name: "Иванова Наталья",
    titleKey: "Case1",
    descriptionKey: "Case1",
  },
  {
    id: "3",
    image: "",
    categoryKey: "OnlineStores",
    avatar: "/images/teams/01.png",
    role: "Head of Product Uzum",
    name: "Иванова Наталья",
    titleKey: "Case1",
    descriptionKey: "Case1",
  },
  {
    id: "4",
    image: "",
    categoryKey: "HoReCa",
    avatar: "/images/teams/01.png",
    role: "Head of Product Uzum",
    name: "Иванова Наталья",
    titleKey: "Case1",
    descriptionKey: "Case1",
  },
];

const categoryKeys = [
  { key: "Travel", count: 1 },
  { key: "OnlineStores", count: 2 },
  { key: "HoReCa", count: 2 },
];

export const CasesSection: FC<Props> = ({ className, sectionClassName }) => {
  const t = useTranslations("HomePage.CasesSection");
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const filterItems = categoryKeys.map((cat, index) => ({
    label: t(`Categories.${cat.key}`),
    count: cat.count,
    active: activeCategory === index,
    onClick: () => setActiveCategory(index),
  }));

  const updateNavigationState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className={`section-content ${sectionClassName}`}>
          <div
            className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="text-section-title mb-4 lg:max-w-[600px] lg:mb-0">
              {t("Title")}
            </h2>
            <p
              className="lg:max-w-[440px] text-left text-lg leading-[26px] text-white"
            >
              {t("Description")}
              <span className="text-white/60"
              > {t("DescriptionSecondary")}
              </span>
            </p>
          </div>

          <div className="mb-6">
            <FilterButtonGroup items={filterItems} />
          </div>

          <div className="relative">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                updateNavigationState(swiper);
              }}
              onSlideChange={(swiper) => {
                updateNavigationState(swiper);
              }}
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1.2}
              loop={false}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 2.3,
                  spaceBetween: 48,
                },
                1024: {
                  slidesPerView: 3.4,
                  spaceBetween: 48,
                },
              }}
              className="!pb-4"
            >
              {caseKeys.map((caseItem, index) => (
                <SwiperSlide key={caseItem.id} className="!h-auto">
                  <div
                    className={cn(
                      "flex h-full flex-col items-start relative",
                      index > 0 && "sm:before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#232323] before:content-[''] before:-ml-6 md:before:-ml-6",
                    )}
                  >
                    <div className="mb-3 h-[310px] w-full rounded-lg bg-[#1D1D1D]">
                      {caseItem.image && (
                        <img
                          src={caseItem.image}
                          alt={t(`Cases.${caseItem.titleKey}.Title`)}
                          className="h-full w-full rounded-lg object-cover"
                        />
                      )}
                    </div>
                    <div
                      className="rounded-[50px] border border-[#343434] px-3 py-1.5 text-sm font-medium text-white/60"
                    >
                      {t(`Categories.${caseItem.categoryKey}`)}
                    </div>
                    <div className="my-6 flex items-center gap-6">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                        <img src={caseItem.avatar} alt={caseItem.name} />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <p className="text-sm text-[#787878]">{caseItem.role}</p>
                        <span className="font-helvetica-neue text-base text-white">
                          {caseItem.name}
                        </span>
                      </div>
                    </div>
                    <h4 className="mb-3.5 text-xl text-[#D4D4D4]">
                      {t(`Cases.${caseItem.titleKey}.Title`)}
                    </h4>
                    <p className="text-sm font-normal text-white/60">
                      {t(`Cases.${caseItem.descriptionKey}.Description`)}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <SwiperNavigation
              swiperRef={swiperRef}
              disabledPrev={isBeginning}
              disabledNext={isEnd}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
