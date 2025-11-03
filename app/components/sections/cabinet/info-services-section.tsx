"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

export const InfoServicesSection: FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    <section className="section-padding relative z-10">
      <div className="container-custom">
        <section className="section-content">
          <div className="mb-10 flex flex-col sm:mb-16">
            <h2 className="text-section-title mb-4 lg:mb-6 max-w-[600px]">
              Личный кабинет мерчанта
            </h2>
            <p className="text-section-subtitle">
              Следите за платежами, аналитикой и финансами в одном месте
            </p>
          </div>
          <button className="btn-primary mb-10" onClick={() => router.push("/form-slug-1")}>Подключить</button>

          <div
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4"
          >
            <div>
              <div className="mb-3 flex items-start gap-3">
                <img
                  src="/images/cabinet/icon/01.svg"
                  alt="01"
                  className="h-3.5 w-3.5"
                />
                <h4 className="text-xl text-[#F2F2F2]">Онлайн аналитика</h4>
              </div>
              <p className="text-sm text-white/60">
                Динамика продаж, средний чек, доля успешных транзакций и пиковые
                часы активности клиентов
              </p>
            </div>
            <div>
              <div className="mb-3 flex items-start gap-3">
                <img
                  src="/images/cabinet/icon/02.svg"
                  alt="01"
                  className="h-3.5 w-3.5"
                />
                <h4 className="text-xl text-[#F2F2F2]">
                  Информация по всем платежам
                </h4>
              </div>
              <p className="text-sm text-white/60">
                Система сохраняет полные данные по каждому платежу, возврату и
                комиссии для прозрачной отчётности
              </p>
            </div>
            <div>
              <div className="mb-3 flex items-start gap-3">
                <img
                  src="/images/cabinet/icon/03.svg"
                  alt="01"
                  className="h-3.5 w-3.5"
                />
                <h4 className="text-xl text-[#F2F2F2]">Безопасность платежей</h4>
              </div>
              <p className="text-sm text-white/60">
                Данные защищены по международному стандарту PCI DSS и шифруются
                на всех этапах обработки
              </p>
            </div>
            <div>
              <div className="mb-3 flex items-start gap-3">
                <img
                  src="/images/cabinet/icon/04.svg"
                  alt="01"
                  className="h-3.5 w-3.5"
                />
                <h4 className="text-xl text-[#F2F2F2]">Фильтрация транзакций</h4>
              </div>
              <p className="text-sm text-white/60">
                Гибкие фильтры по дате, сумме, статусу или платёжной системе
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
