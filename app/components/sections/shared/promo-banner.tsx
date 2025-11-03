import { FC } from "react";

interface Props {
  className?: string;
  title: string;
  description: string;
}

export const PromoBanner: FC<Props> = ({ className, title, description }) => {
  return (
    <section className="section-padding">
      <div
        className="container-custom flex h-[calc(100dvh-86px)] items-center justify-center"
      >
        <div className="flex flex-col items-center gap-[112px] md:gap-[124px]">
          <div className="text-center">
            <h1 className="text-h1 !mb-6 max-w-[892px]">
              {title}
            </h1>
            <p
              className="mx-auto max-w-[342px] text-center text-sm leading-[21px] tracking-[-0.16px] text-white/60 md:max-w-[482px] md:text-base"
            >
              {description}

            </p>
          </div>
          <div
            className="license-badges relative -mx-2 flex flex-wrap items-center gap-y-4 sm:-mx-4 sm:h-14 sm:gap-y-0 md:h-[112px]"
          >
            <div
              className="relative flex h-14 basis-1/2 items-center justify-center px-4 sm:h-full sm:basis-1/4 sm:px-8"
            >
              <img
                src="/images/lisence/psi_dss.svg"
                alt="Compliance Control"
                className="h-full"
              />
            </div>
            <div
              className="relative flex h-14 basis-1/2 items-center justify-center px-4 sm:h-full sm:basis-1/4 sm:px-8"
            >
              <img
                src="/images/lisence/compliance_control.svg"
                alt="Compliance Control"
                className="h-full"
              />
            </div>
            <div
              className="relative flex h-14 basis-1/2 items-center justify-center px-4 sm:h-full sm:basis-1/4 sm:px-8"
            >
              <img
                src="/images/lisence/iaf.svg"
                alt="Compliance Control"
                className="h-full"
              />
            </div>
            <div
              className="relative flex h-14 basis-1/2 items-center justify-center px-4 sm:h-full sm:basis-1/4 sm:px-8"
            >
              <img
                src="/images/lisence/mb.svg"
                alt="Compliance Control"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
