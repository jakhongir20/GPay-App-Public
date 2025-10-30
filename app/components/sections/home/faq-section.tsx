import { FC } from "react";

interface Props {
  className?: string;
}

export const FaqSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="rounded-xl bg-card-bg p-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-section-title">Часто задаваемые вопросы</h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-neutral-700 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-text-primary">
                    Что такое интернет эквайринг?
                  </h3>
                  <button className="text-white/60">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12 4L4 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 4L12 12"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="space-y-3 text-base leading-relaxed text-white/60">
                  <p>
                    Онлайн-эквайринг — это технология, позволяющая принимать
                    оплату за товары и услуги через интернет.
                  </p>
                  <p>
                    Когда клиент оплачивает покупку банковской картой или через
                    электронный кошелёк, эквайринговый сервис выступает
                    посредником между вашим сайтом, банком-эмитентом клиента и
                    банком-эквайером, обеспечивая безопасную и мгновенную
                    передачу данных.
                  </p>
                  <p>
                    Наше решение автоматизирует этот процесс, позволяя бизнесам
                    любого масштаба принимать онлайн-платежи без сложных
                    интеграций и с полной защитой финансовых операций.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-card-bg p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-text-primary">
                    Насколько безопасны онлайн-платежи через вашу платформу?
                  </h3>
                  <button className="text-white/60">
                    <img
                      src="/images/icon/arrow-down.svg"
                      alt="Arrow Down"
                      className="h-4 w-4"
                    />
                  </button>
                </div>
              </div>

              <div className="rounded-xl bg-card-bg p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-text-primary">
                    Как происходит подключение к платформе?
                  </h3>
                  <button className="text-white/60">
                    <img
                      src="/images/icon/arrow-down.svg"
                      alt="Arrow Down"
                      className="h-4 w-4"
                    />
                  </button>
                </div>
              </div>

              <div className="rounded-xl bg-card-bg p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-text-primary">
                    Какие комиссии действуют при приёме онлайн-платежей?
                  </h3>
                  <button className="text-white/60">
                    <img
                      src="/images/icon/arrow-down.svg"
                      alt="Arrow Down"
                      className="h-4 w-4"
                    />
                  </button>
                </div>
              </div>

              <div className="rounded-xl bg-card-bg p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-text-primary">
                    Можно ли интегрировать эквайринг с внутренней аналитикой
                    компании?
                  </h3>
                  <button className="text-white/60">
                    <img
                      src="/images/icon/arrow-down.svg"
                      alt="Arrow Down"
                      className="h-4 w-4"
                    />
                  </button>
                </div>
              </div>

              <div className="rounded-xl bg-card-bg p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-text-primary">
                    Как быстро зачисляются средства после оплаты?
                  </h3>
                  <button className="text-white/60">
                    <img
                      src="/images/icon/arrow-down.svg"
                      alt="Arrow Down"
                      className="h-4 w-4"
                    />
                  </button>
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <button className="btn-black px-6 py-3 text-sm font-medium">
                  Показать еще
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
