"use client";

import { FC, useMemo } from "react";
import { useFormStore } from "@/app/store/form-store";

interface Props {
  className?: string;
}

export const FormLeftBanner: FC<Props> = ({ className }) => {
  const { formData } = useFormStore();

  // Calculate completion percentage based on filled required fields
  const { percentage, filledCount, totalCount } = useMemo(() => {
    // Required fields list
    const requiredFields: Array<keyof typeof formData> = [
      // Step 1: Initial form
      "companyType",
      "businessCategory",
      // Step 2: About company
      "businessActivity",
      "inn",
      "lastName",
      "firstName",
      "email",
      "phone",
      "position",
      // Step 3: Legal information
      "brandName",
      "legalEntityName",
      "directorFullName",
      "oked",
      "soato",
      "legalAddress",
      // Step 4: About project
      "projectStage",
      "demoLink",
      "paymentChannels",
      "integrationType",
      "additionalFeatures",
      // Step 5: Financial indicators
      "monthlyTurnoverFrom",
      "monthlyTurnoverTo",
    ];

    // Count filled required fields
    let filled = 0;
    requiredFields.forEach((field) => {
      const value = formData[field];
      if (value !== undefined && value !== null && value !== "") {
        filled++;
      }
    });

    // Check cards (at least one card should be selected)
    if (formData.cards) {
      const hasSelectedCard =
        formData.cards.humo ||
        formData.cards.uzcard ||
        formData.cards.visa;
      if (hasSelectedCard) {
        filled++;
      }
    }

    // Add cards to total count
    const total = requiredFields.length + 1; // +1 for cards

    // Calculate percentage (minimum 5%, maximum 100%)
    const calculatedPercentage = Math.max(
      5,
      Math.min(100, Math.round((filled / total) * 100))
    );

    return {
      percentage: calculatedPercentage,
      filledCount: filled,
      totalCount: total,
    };
  }, [formData]);

  // Calculate number of filled progress bars (out of 12)
  const filledBars = useMemo(() => {
    // Map percentage to number of bars (12 bars total)
    return Math.round((percentage / 100) * 12);
  }, [percentage]);

  // Determine progress bar color based on percentage
  const getProgressBarColor = (index: number) => {
    if (index >= filledBars) {
      return "bg-[#212121]"; // Unfilled bars - gray
    }

    if (percentage === 100) {
      return "bg-[#8AE16A]"; // 100% - green
    } else if (percentage >= 50) {
      return "bg-[#F1DF38]"; // 50%+ - orange
    } else {
      return "bg-[#F56868]"; // Less than 50% - red
    }
  };

  return (
    <section className={className}>
      <div className={"py-3 px-4 bg-[#141414] rounded-xl h-fit"}>
        <h5 className={"mb-4 text-white text-sm"}>Вероятность одобрения</h5>
        <div className={"mb-2 text-[32px] text-[#F2F2F2]"}>
          {percentage}%
        </div>
        <p className={"mb-4 text-xs text-[rgba(237,237,237,0.40)]"}>
          {percentage < 100
            ? "Заполните больше данных"
            : "Все данные заполнены"}
        </p>
        <div className={"flex gap-1"}>
          {Array.from({ length: 12 }).map((item, index) => (
            <div
              key={index}
              className={`h-0.5 w-4 rounded-[30px] ${getProgressBarColor(index)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
