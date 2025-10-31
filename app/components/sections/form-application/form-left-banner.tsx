import { FC } from "react";

interface Props {
  className?: string;
}

export const FormLeftBanner: FC<Props> = ({ className }) => {
  return (
    <section className={"py-3 px-4 bg-[#141414] rounded-xl h-fit"}>
      <h5 className={"mb-4 text-white text-sm"}>Вероятность одобрения</h5>
      <div className={"mb-2 text-[32px] text-[#F2F2F2]"}>5%</div>
      <p className={"mb-4 text-xs text-[rgba(237,237,237,0.40)]"}>Заполните больше данных</p>
      <div className={"flex gap-1"}>
        {Array.from({ length: 12 }).map((item, index) => (
          <div key={index}
               className={`bg-[#212121]  h-0.5 w-4 rounded-[30px] ${index === 0 && "bg-[#F56868]"}`}></div>
        ))}
      </div>
    </section>
  );
};
