import { FC } from "react";

interface Props {
  className?: string;
}

export const TeamsSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding py-16">
      <div className="container-custom">
        <section className="section-content">
          <h1 className="text-h1">Наша команда</h1>
          <div className="mb-10 flex flex-wrap gap-1.5">
            <button className="btn-primary rounded-[34px]">Все 15</button>
            <button className="btn-black">МФО 15</button>
            <button className="btn-black">МФО 15</button>
            <button className="btn-black">МФО 15</button>
          </div>
          <div
            className="grid grid-cols-2 justify-end gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4"
          >
            <div className="flex flex-col gap-3">
              <p className="max-w-[124px] sm:max-w-[164px]">
                <img className="w-full" src="/images/teams/01.png" alt="Team 1" />
              </p>
              <h4
                className="font-helvetica-neue text-base font-normal leading-normal text-white"
              >
                Адмиралов Тимур
              </h4>
              <p
                className="font-helvetica-neue text-sm font-normal leading-normal text-[#787878]"
              >
                Head of Product
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="max-w-[124px] sm:max-w-[164px]">
                <img className="w-full" src="/images/teams/01.png" alt="Team 1" />
              </p>
              <h4
                className="font-helvetica-neue text-base font-normal leading-normal text-white"
              >
                Адмиралов Тимур
              </h4>
              <p
                className="font-helvetica-neue text-sm font-normal leading-normal text-[#787878]"
              >
                Head of Product
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="max-w-[124px] sm:max-w-[164px]">
                <img className="w-full" src="/images/teams/01.png" alt="Team 1" />
              </p>
              <h4
                className="font-helvetica-neue text-base font-normal leading-normal text-white"
              >
                Адмиралов Тимур
              </h4>
              <p
                className="font-helvetica-neue text-sm font-normal leading-normal text-[#787878]"
              >
                Head of Product
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="max-w-[124px] sm:max-w-[164px]">
                <img className="w-full" src="/images/teams/01.png" alt="Team 1" />
              </p>
              <h4
                className="font-helvetica-neue text-base font-normal leading-normal text-white"
              >
                Адмиралов Тимур
              </h4>
              <p
                className="font-helvetica-neue text-sm font-normal leading-normal text-[#787878]"
              >
                Head of Product
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="max-w-[124px] sm:max-w-[164px]">
                <img className="w-full" src="/images/teams/01.png" alt="Team 1" />
              </p>
              <h4
                className="font-helvetica-neue text-base font-normal leading-normal text-white"
              >
                Адмиралов Тимур
              </h4>
              <p
                className="font-helvetica-neue text-sm font-normal leading-normal text-[#787878]"
              >
                Head of Product
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="max-w-[124px] sm:max-w-[164px]">
                <img className="w-full" src="/images/teams/01.png" alt="Team 1" />
              </p>
              <h4
                className="font-helvetica-neue text-base font-normal leading-normal text-white"
              >
                Адмиралов Тимур
              </h4>
              <p
                className="font-helvetica-neue text-sm font-normal leading-normal text-[#787878]"
              >
                Head of Product
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="max-w-[124px] sm:max-w-[164px]">
                <img className="w-full" src="/images/teams/01.png" alt="Team 1" />
              </p>
              <h4
                className="font-helvetica-neue text-base font-normal leading-normal text-white"
              >
                Адмиралов Тимур
              </h4>
              <p
                className="font-helvetica-neue text-sm font-normal leading-normal text-[#787878]"
              >
                Head of Product
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="max-w-[124px] sm:max-w-[164px]">
                <img className="w-full" src="/images/teams/01.png" alt="Team 1" />
              </p>
              <h4
                className="font-helvetica-neue text-base font-normal leading-normal text-white"
              >
                Адмиралов Тимур
              </h4>
              <p
                className="font-helvetica-neue text-sm font-normal leading-normal text-[#787878]"
              >
                Head of Product
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
