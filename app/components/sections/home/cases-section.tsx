"use client";

import { FC, useRef, useState } from "react";
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
}

interface Case {
  id: string;
  image: string;
  category: string;
  avatar: string;
  role: string;
  name: string;
  title: string;
  description: string;
}

const cases: Case[] = [
  {
    id: "1",
    image: "",
    category: "Путешествия",
    avatar: "/images/teams/01.png",
    role: "Head of Product Uzum",
    name: "Иванова Наталья",
    title: "Онлайн-сервис бронирования туров",
    description: "Компания TravelUz подключила Global Pay для приёма онлайн-оплат за туры и авиабилеты. Благодаря интеграции с банками Узбекистана..",
  },
  {
    id: "2",
    image: "",
    category: "Путешествия",
    avatar: "/images/teams/01.png",
    role: "Head of Product Uzum",
    name: "Иванова Наталья",
    title: "Онлайн-сервис бронирования туров",
    description: "Компания TravelUz подключила Global Pay для приёма онлайн-оплат за туры и авиабилеты. Благодаря интеграции с банками Узбекистана..",
  },
  {
    id: "3",
    image: "",
    category: "Онлайн-магазины",
    avatar: "/images/teams/01.png",
    role: "Head of Product Uzum",
    name: "Иванова Наталья",
    title: "Онлайн-сервис бронирования туров",
    description: "Компания TravelUz подключила Global Pay для приёма онлайн-оплат за туры и авиабилеты. Благодаря интеграции с банками Узбекистана..",
  },
  {
    id: "4",
    image: "",
    category: "HoReCa",
    avatar: "/images/teams/01.png",
    role: "Head of Product Uzum",
    name: "Иванова Наталья",
    title: "Онлайн-сервис бронирования туров",
    description: "Компания TravelUz подключила Global Pay для приёма онлайн-оплат за туры и авиабилеты. Благодаря интеграции с банками Узбекистана..",
  },
];

const categories = [
  { label: "Путешествия", count: 1 },
  { label: "Онлайн-магазины", count: 2 },
  { label: "HoReCa", count: 2 },
];

export const CasesSection: FC<Props> = ({ className }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const filterItems = categories.map((cat, index) => ({
    label: cat.label,
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
        <div className="section-content">
          <div
            className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="text-section-title mb-4 max-w-[600px] lg:mb-0">
              Кейсы <br />
              наших клиентов
            </h2>
            <p
              className="max-w-[440px] text-left text-lg leading-[26px] text-white"
            >
              Наши решения создают прозрачный платёжный процесс:
              <span className="text-white/60"
              > от приёма платежей и мгновенных переводов до автоматической
                сверки и аналитики.
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
              {cases.map((caseItem, index) => (
                <SwiperSlide key={caseItem.id} className="!h-auto">
                  <div
                    className={cn(
                      "flex h-full flex-col items-start relative",
                      index > 0 && "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#232323] before:content-[''] before:-ml-6 md:before:-ml-12",
                    )}
                  >
                    <div className="mb-3 h-[310px] w-full rounded-lg bg-[#1D1D1D]">
                      {caseItem.image && (
                        <img
                          src={caseItem.image}
                          alt={caseItem.title}
                          className="h-full w-full rounded-lg object-cover"
                        />
                      )}
                    </div>
                    <div
                      className="rounded-[50px] border border-[#343434] px-3 py-1.5 text-sm font-medium text-white/60"
                    >
                      {caseItem.category}
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
                      {caseItem.title}
                    </h4>
                    <p className="text-sm font-normal text-white/60">
                      {caseItem.description}
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
