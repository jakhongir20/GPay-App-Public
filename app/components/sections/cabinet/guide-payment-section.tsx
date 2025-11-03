import { FC } from "react";

interface Props {
  className?: string;
}

export const GuidePaymentSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content"
                 style={{ background: "linear-gradient(180deg, rgba(20, 20, 20, 0.00) 6.41%, rgba(20, 20, 20, 0.42) 39.67%, #141414 61.51%)" }}

        >
          <div
            className="mb-8 flex flex-col md:mb-11 lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="text-section-title lg:max-w-[600px]">Данные, чеки и аналитика всегда под рукой, где бы вы ни
              были</h2>
            <p className="text-section-subtitle lg:max-w-[440px] text-lg">
              Создан для того, чтобы управлять финансами просто и прозрачно
            </p>
          </div>
          <div
            className={""}
          >
            <img className={""} src="/images/cabinet/iphone-center.png" alt="" />
            <div className={"flex flex-col items-center gap-12 mt-12"}>
              <button className={"btn-primary"}>Подключить бизнес</button>
              <div className={"flex gap-8 sm:gap-10"}>
                <img src="/images/cabinet/googleplay.svg" alt="" />
                <img src="/images/cabinet/appstore.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
