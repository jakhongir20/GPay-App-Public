import { FC } from "react";

interface Props {
  className?: string;
}

export const CabinetFeatures: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content">
          <div
            className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="text-section-title mb-4 lg:max-w-[600px] lg:mb-0">
              Возможности <br />
              кабинета
            </h2>
            <p className="text-section-subtitle max-w-[440px]">
              Создан для того, чтобы
              <span className="text-white">
                управлять финансами просто и прозрачно</span
              >
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-1.5">
            <button className="btn-black">Авторизация</button>
            <button className="btn-primary rounded-[34px]">Главный экран</button>
            <button className="btn-black">МФО 15</button>
            <button className="btn-black">МФО 15</button>
            <button className="btn-black">МФО 15</button>
            <button className="btn-black">МФО 15</button>
          </div>

          <div className="mb-16 max-w-[500px] space-y-4">
            <h3 className="text-[32px] font-normal leading-[38px]">
              Главный экран личного кабинета
            </h3>
            <p className="text-base font-normal leading-[22px] text-[#F2F2F2]/60">
              Дашборд с ключевыми показателями и статистикой по вашей компании.
              Этот экран позволяет получить общее представление о текущем
              состоянии вашего бизнеса в рамках платежного шлюза
            </p>
          </div>
          <div className="mb-16">
            <img
              src="/images/cabinet/02.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="grid-cols-2 gap-x-12 border-[#232323] sm:grid sm:border-b"
          >
            <div className="mb-12 sm:py-8">
              <p className="mb-8 sm:mb-10">
                <img
                  src="/images/cabinet/03.png"
                  className="max-h-[390px] w-full object-cover"
                  alt=""
                />
              </p>
              <div className="mb-4 sm:px-8">
                <h4 className="mb-4 text-2xl text-[#F2F2F2]">
                  Управление всеми платежными операциями
                </h4>
                <p className="text-base text-white/60">
                  Отслеживайте и управляйте всеми платежными операциями,
                  проходящими через вашу кассу
                </p>
              </div>
            </div>
            <div
              className="relative before:absolute before:-left-6 before:top-0 before:hidden before:h-full before:w-[1px] before:bg-[#232323] before:content-[''] sm:py-8 sm:before:block"
            >
              <p className="mb-8 sm:mb-10">
                <img
                  src="/images/cabinet/04.png"
                  className="max-h-[390px] w-full object-cover"
                  alt=""
                />
              </p>
              <div className="mb-4 sm:px-8">
                <h4 className="mb-4 text-2xl text-[#F2F2F2]">
                  Гибкая фильтрация по параметрам
                </h4>
                <p className="text-base text-white/60">
                  Есть возможность фильтровать по типам транзакций, по платежным
                  системам, по статусам и по кассам (если в вашей компании их
                  несколько)
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto mb-10 mt-28 max-w-[580px]">
            <p className="mb-8 sm:mb-10">
              <img
                src="/images/cabinet/07.png"
                className="w-full object-cover"
                alt=""
              />
            </p>
            <div className="mb-4 sm:px-8">
              <h4 className="mb-4 text-2xl text-[#F2F2F2]">
                Возможность работы с несколькими направлениями бизнеса
              </h4>
              <p className="text-base text-white/60">
                Отображение всех компаний или проектов (если у вас несколько
                юрлиц или направлений бизнеса), подключённые к вашему
                мерчант-аккаунту
              </p>
            </div>
          </div>
          <hr className="border-[#232323]" />
          <section className="mt-10 sm:mt-16 sm:py-10">
            <div
              className="grid grid-cols-2 gap-x-3 gap-y-6 xs:gap-12 md:grid-cols-4"
            >
              <div className="flex gap-3">
                <p>
                  <img
                    src="/images/cabinet/icon/item.svg"
                    alt="Item"
                    className="h-4 min-w-4 xs:h-5 xs:min-w-5"
                  />
                </p>
                <div className="text-sm font-normal text-[#F2F2F2] xs:text-base">
                  Настройка уведомлений и ролей пользователей
                </div>
              </div>
              <div className="flex gap-3">
                <p>
                  <img
                    src="/images/cabinet/icon/item.svg"
                    alt="Item"
                    className="h-4 min-w-4 xs:h-5 xs:min-w-5"
                  />
                </p>
                <div className="text-xs font-normal text-[#F2F2F2] xs:text-base">
                  Интеграция через API
                </div>
              </div>
              <div className="flex gap-3">
                <p>
                  <img
                    src="/images/cabinet/icon/item.svg"
                    alt="Item"
                    className="h-4 min-w-4 xs:h-5 xs:min-w-5"
                  />
                </p>
                <div className="text-xs font-normal text-[#F2F2F2] xs:text-base">
                  Добавление и управление магазинами
                </div>
              </div>
              <div className="flex gap-3">
                <p>
                  <img
                    src="/images/cabinet/icon/item.svg"
                    alt="Item"
                    className="h-4 min-w-4 xs:h-5 xs:min-w-5"
                  />
                </p>
                <div className="text-xs font-normal text-[#F2F2F2] xs:text-base">
                  Управление транзакциями и возвратами
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};
