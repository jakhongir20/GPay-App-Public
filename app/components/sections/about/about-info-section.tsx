import { FC } from "react";

interface Props {
  className?: string;
}

export const AboutInfoSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding py-16">
      <div className="container-custom">
        <section className="mb-11 flex flex-col gap-0 sm:flex-row sm:gap-16">
          <h2 className="text-h2">
            Создаём решения, которые делают онлайн-платежи простыми и
            прозрачными
          </h2>
          <div
            className="flex flex-col gap-8 text-lg leading-[26px] tracking-[-0.16px] text-white/60 sm:gap-10"
          >
            <p>
              Объединяя бизнес и банковский сектор Узбекистана. Мы создаём
              решения, которые делают онлайн-платежи простыми, прозрачными и
              доступными для компаний любого масштаба — от малого бизнеса до
              крупных корпораций.
            </p>
            <p>
              Global Pay предлагает полный цикл решений — от онлайн-эквайринга и
              личных кабинетов мерчантов до инструментов аналитики и
              автоматизации финансовых процессов.
            </p>
            <p>
              Мы не просто интегрируем платежи — мы создаём инфраструктуру, в
              которой каждая транзакция становится частью надёжной цифровой
              экосистемы
            </p>
          </div>
        </section>

        <section className="mb-16 flex max-w-[440px] flex-col">
          <h2 className="text-h2 !mb-10">
            Безопасность и стабильность — основа нашей работы
          </h2>
          <div
            className="flex flex-col gap-8 text-lg leading-[26px] tracking-[-0.16px] text-white/60"
          >
            <p>
              Все решения соответствуют международным стандартам PCI DSS,
              проходят многоуровневую валидацию и обеспечивают полную защиту
              данных клиентов и партнёров.
            </p>
            <p>
              Мы сотрудничаем со всеми банками Узбекистана и поддерживаем
              интеграцию с крупнейшими финансовыми системами региона. Благодаря
              этому наши клиенты получают гибкость, скорость и уверенность в
              каждом платеже
            </p>
          </div>
        </section>

        <section
          className="grid grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-4 sm:gap-12"
        >
          <div className="flex flex-col items-start">
            <p className="mb-5 xs:mb-6">
              <img src="/images/about/icon-1.svg" className="h-5 w-5" alt="" />
            </p>
            <h4
              className="mb-2 text-[32px] leading-[38px] text-[rgba(242,242,242,0.95)] xs:mb-4"
            >
              20+
            </h4>
            <p className="text-base text-[rgba(242,242,242,0.70)]">
              Бизнесов подключено
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-5 xs:mb-6">
              <img src="/images/about/icon-2.svg" className="h-5 w-5" alt="" />
            </p>
            <h4
              className="mb-2 text-[32px] leading-[38px] text-[rgba(242,242,242,0.95)] xs:mb-4"
            >
              1 млрд сум
            </h4>
            <p className="text-base text-[rgba(242,242,242,0.70)]">
              В день проходит через систему
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-5 xs:mb-6">
              <img src="/images/about/icon-3.svg" className="h-5 w-5" alt="" />
            </p>
            <h4
              className="mb-2 text-[32px] leading-[38px] text-[rgba(242,242,242,0.95)] xs:mb-4"
            >
              100%
            </h4>
            <p className="text-base text-[rgba(242,242,242,0.70)]">
              Стабильность системы
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-5 xs:mb-6">
              <img src="/images/about/icon-4.svg" className="h-5 w-5" alt="" />
            </p>
            <h4
              className="mb-2 text-[32px] leading-[38px] text-[rgba(242,242,242,0.95)] xs:mb-4"
            >
              24/7
            </h4>
            <p className="text-base text-[rgba(242,242,242,0.70)]">
              Поддержка клиентов
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};
