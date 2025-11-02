"use client";

import { FC } from "react";
import { cn } from "@/app/shared/helpers";

interface FilterItem {
  label: string;
  count?: number | string;
  active?: boolean;
  onClick?: () => void;
}

interface Props {
  items: FilterItem[];
  className?: string;
}

export const FilterButtonGroup: FC<Props> = ({ items, className }) => {
  return (
    <div
      className={cn(
        "flex overflow-x-auto scrollbar-hide gap-1.5 pb-2 md:overflow-x-visible md:flex-wrap",
        className
      )}
    >
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className={cn(
            "flex-shrink-0 rounded-[34px] px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap",
            item.active ? "btn-primary" : "btn-black"
          )}
        >
          {item.label} {item.count && item.count}
        </button>
      ))}
    </div>
  );
};

