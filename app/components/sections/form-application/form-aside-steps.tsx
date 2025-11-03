"use client";

import { FC } from "react";
import { cn } from "@/app/shared/helpers";
import { FROM_STEPS } from "@/app/components/sections/form-application/data";
import Link from "next/link";

interface Props {
  className?: string;
  step: 1 | 2 | 3 | 4 | 5;
}

export const FormAsideSteps: FC<Props> = ({ className, step }) => {
  const isCompleted = (index: number) => index + 1 < step;
  const isCurrent = (index: number) => index + 1 === step;

  return (
    <section className={"relative flex overflow-x-auto md:overflow-x-visible md:flex-col gap-9 scrollbar-hide"}>
      {FROM_STEPS.map((item, index) => {
        const completed = isCompleted(index);
        const current = isCurrent(index);

        return (
          <Link
            key={index}
            href={`/form-slug-${item.step}`}
            className={cn(
              "relative flex items-center gap-3 flex-shrink-0",
              current && "active",
              // Add vertical line after each step except the last one (only visible on md+ screens)
              index < FROM_STEPS.length - 1 && "md:after:absolute md:after:left-[13px] md:after:top-[33px] md:after:h-[23px] md:after:w-px md:after:bg-[#212121] md:after:content-['']",
            )}
          >
            <div
              className={cn(
                "min-w-[26px] h-[26px] flex items-center justify-center text-sm rounded-[40px]",
                completed && "bg-[rgba(138,225,106,0.10)]",
                current && "bg-[rgba(233,83,47,0.10)] text-button-primary",
                !completed && !current && "text-[rgba(237,237,237,0.40)] bg-[rgba(237,237,237,0.10)]",
              )}
            >
              {completed ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5L7 12.5L13 3.5" stroke="#8AE16A" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
              ) : (
                item.step
              )}
            </div>
            <p
              className={cn(
                "text-[rgba(237,237,237,0.40)] text-base whitespace-nowrap",
                current && "text-[rgba(237,237,237,0.80)]",
              )}
            >
              {item.title}
            </p>
          </Link>
        );
      })}
    </section>
  );
};
