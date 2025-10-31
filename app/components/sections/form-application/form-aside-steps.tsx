import { FC } from "react";
import { cn } from "@/app/shared/helpers";
import { FROM_STEPS } from "@/app/components/sections/form-application/data";

interface Props {
  className?: string;
}

export const FormAsideSteps: FC<Props> = ({ className }) => {
  return (
    <section className={"flex overflow-x-auto md:overflow-x-visible md:flex-col gap-9 scrollbar-hide"}>
      {FROM_STEPS.map((item, index) => (
        <div key={index} className={`flex items-center gap-3 flex-shrink-0 ${item.active ? "active" : ""}`}>
          <div
            className={cn("min-w-[26px] h-[26px] flex items-center justify-center text-sm rounded-[40px] text-[rgba(237,237,237,0.40)] bg-[rgba(237,237,237,0.10)]", item.active && "bg-[rgba(233,83,47,0.10)] text-button-primary")}>
            {item.step}
          </div>
          <p
            className={cn("text-[rgba(237,237,237,0.40)] text-base whitespace-nowrap", item.active && "text-[rgba(237,237,237,0.80)]")}>
            {item.title}</p>
        </div>
      ))}
    </section>
  );
};
