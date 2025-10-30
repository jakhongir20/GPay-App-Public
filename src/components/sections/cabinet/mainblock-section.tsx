import { FC } from "react";

interface Props {
  className?: string;
}

export const MainblockSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div
        className="container-custom relative mt-10 h-[200px] w-full md:h-[393px]"
      >
        <div
          className="absolute left-1/2 top-0 w-full -translate-x-1/2 px-5 lg:w-[80%]"
        >
          <img
            src="/images/cabinet/01.png"
            alt="cabinet"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
