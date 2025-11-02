"use client";

import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { SwiperNavigation } from "@/app/components/shared/SwiperNavigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  className?: string;
}

interface Product {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    id: "1",
    icon: "/images/our-product/01.svg",
    title: "Холдирование",
    description: "Замораживание средств на отдельном счете до завершения сделки",
  },
  {
    id: "2",
    icon: "/images/our-product/02.svg",
    title: "Сплитование платежей",
    description: "Автоматически распределяем суммы, поступающие от покупателя",
  },
  {
    id: "3",
    icon: "/images/our-product/03.svg",
    title: "Автосписание",
    description: "Замораживание средств на отдельном счете до завершения сделки",
  },
  {
    id: "4",
    icon: "/images/our-product/04.svg",
    title: "Холдирование",
    description: "Замораживание средств на отдельном счете до завершения сделки",
  },
  {
    id: "5",
    icon: "/images/our-product/01.svg",
    title: "Другая услуга",
    description: "Описание другой услуги",
  },
];

export const OurProductsSection: FC<Props> = ({ className }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content">
          <div
            className="mb-8 flex flex-col md:mb-11 lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="text-section-title max-w-[600px]">Наши продукты</h2>
            <p className="text-section-subtitle max-w-[328px]">
              Нам важно постоянно расширять возможности сервиса
            </p>
          </div>

          <div className="relative">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              spaceBetween={12}
              autoplay
              slidesPerView={1.2}
              autoHeight={false}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 12,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 12,
                },
              }}
              className="!pb-4"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="!h-auto">
                  <div
                    className="rounded-xl border border-[#222222] bg-[#1C1C1C] p-4 md:p-8 h-full flex flex-col min-h-[320px] md:min-h-[360px]">
                    <div className="mb-20 flex-shrink-0">
                      <img src={product.icon} alt={product.title} />
                    </div>
                    <div className="flex items-end justify-between gap-3.5 mt-auto flex-shrink-0">
                      <div className="max-w-[224px]">
                        <h3
                          className="font-helvetica-neue-cyr mb-4 text-xl leading-[28px] tracking-[-0.24px] text-white md:text-2xl">
                          {product.title}
                        </h3>
                        <p
                          className="font-helvetica-neue-cyr text-sm font-normal leading-[20px] tracking-[0.32px] text-white/60 md:text-base">
                          {product.description}
                        </p>
                      </div>
                      <button
                        className="flex xs:h-10 h-8 xs:w-10 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] hover:border-white/20 transition-colors"
                      >
                        <img
                          src="/images/plus.svg"
                          alt="Plus"
                          className="h-3.5 w-3.5"
                        />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <SwiperNavigation swiperRef={swiperRef} />
          </div>
        </section>
      </div>
    </section>
  );
};
