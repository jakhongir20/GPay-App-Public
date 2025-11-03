"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { FormInput, FormSelect } from "@/app/components/shared/form";

interface Props {
  className?: string;
  formAreasActivity?: boolean;
}

interface FormData {
  companyType: string;
  businessCategory: string;
  businessAreas?: string;
}

const companyTypeOptions = [
  { value: "resident", label: "Резидент Республики Узбекистан" },
  { value: "bank", label: "Банк" },
  { value: "mfo", label: "МФО" },
  { value: "other", label: "Другое" },
];

const businessCategoryOptions = [
  { value: "resident", label: "Резидент Республики Узбекистан" },
  { value: "bank", label: "Банк" },
  { value: "mfo", label: "МФО" },
  { value: "other", label: "Другое" },
];

const businessAreasOptions = [
  { value: "resident", label: "Резидент Республики Узбекистан" },
  { value: "bank", label: "Банк" },
  { value: "mfo", label: "МФО" },
  { value: "other", label: "Другое" },
];

export const FormApplication: FC<Props> = ({ className, formAreasActivity = true }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    // Handle form submission
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content gradient-form-bg">
          <div className="flex flex-col gap-10 sm:flex-row">
            <div
              className="flex h-auto flex-col justify-between sm:basis-1/2 sm:gap-4"
            >
              <h2 className="text-h2 md:max-w-[590px] md:mb-auto !mb-6">
                Получите решение для вашего бизнеса
              </h2>
              <p
                className="font-helvetica-neue-cyr md:max-w-[350px] text-lg leading-6 text-white/60"
              >
                Пройдите полный процесс регистрации и мы предложим оптимальное
                решение для вашего бизнеса
              </p>
            </div>
            <div className="sm:basis-1/2">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormSelect
                  label="Тип компании"
                  required
                  register={register("companyType", {
                    required: "Пожалуйста, выберите тип компании",
                  })}
                  options={companyTypeOptions}
                  placeholder="Резидент Республики Узбекистан"
                  error={errors.companyType}
                />

                <FormSelect
                  label="Категория бизнеса"
                  required
                  register={register("businessCategory", {
                    required: "Пожалуйста, выберите категорию бизнеса",
                  })}
                  options={businessCategoryOptions}
                  placeholder="Резидент Республики Узбекистан"
                  error={errors.businessCategory}
                />

                {formAreasActivity && (
                  <FormSelect
                    label="Сферы деятельности"
                    required
                    register={register("businessAreas", {
                      required: "Пожалуйста, выберите сферы деятельности",
                    })}
                    options={businessAreasOptions}
                    placeholder="Резидент Республики Узбекистан"
                    error={errors.businessAreas}
                  />
                )}
                <hr className="border-[#232323]" />

                <div
                  className="flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3"
                >
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-400">Успешно.</p>
                    <div
                      className="mt-1 flex items-center gap-4 text-xs text-white/60"
                    >
                      <span className="cursor-pointer hover:text-white"
                      >Конфиденциальность</span
                      >
                      <span className="cursor-pointer hover:text-white"
                      >Условия</span
                      >
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="h-12 w-full rounded-lg bg-button-primary text-base font-medium text-white transition-colors"
                >
                  Продолжить
                </button>

                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/images/icon/shield-check.svg"
                    alt="Shield Check"
                    className="h-5 w-5"
                  />
                  <span
                    className="font-helvetica-neue-cyr text-sm font-normal text-[#8AE16A]"
                  >Все данные защищены</span
                  >
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
