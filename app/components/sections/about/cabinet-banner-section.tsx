import { FC } from "react";

interface Props {
  className?: string;
}

export const CabinetBannerSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding relative py-8 sm:py-16">
      <div className="container-custom">
        <img src="/images/about/01.png" alt="" className="mx-auto w-[930px]" />
      </div>
    </section>
  );
};
