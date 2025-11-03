"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Collapse } from "@/app/components/shared/Collapse";
import { FormInput } from "@/app/components/shared/form";

interface Props {
  className?: string;
}

interface BusinessInfoFormData {
  companyType: string;
  businessCategory: string;
  businessActivity: string;
  inn: string;
}

export const FinalSubmitStep: FC<Props> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessInfoFormData>({
    mode: "onBlur",
  });

  const onSubmit = (data: BusinessInfoFormData) => {
    console.log("Business info:", data);
    // Handle form submission
  };

  return (
    <section>
      <div className={"mb-12"}>
        <img src={"/images/status.svg"} className={"w-16 h-16"} />
      </div>
      <div className="flex flex-col mb-10">
        <h2 className="text-section-title mb-4 lg:mb-6 max-w-[600px]">
          Ваша заявка готова!
        </h2>
        <p className="text-section-subtitle max-w-[450px]">
          Осталось проверить правильность введенных данных и можно отправлять
        </p>
      </div>
      <Collapse title="Информация о бизнесе" defaultOpen className="mb-4">
        <div className={"sm:p-6 p-4 !pt-2 bg-[#141414] rounded-xl"}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            <FormInput
              label="Тип компании"
              required
              register={register("companyType", {
                required: "Пожалуйста, введите тип компании",
              })}
              placeholder="Резидент Республики Узбекистан"
              error={errors.companyType}
            />
            <FormInput
              label="Категория бизнеса"
              required
              register={register("businessCategory", {
                required: "Пожалуйста, введите категорию бизнеса",
              })}
              placeholder="Резидент Республики Узбекистан"
              error={errors.businessCategory}
            />
            <FormInput
              label="Сферы деятельности"
              required
              register={register("businessActivity", {
                required: "Пожалуйста, введите сферы деятельности",
              })}
              placeholder="Резидент Республики Узбекистан"
              error={errors.businessActivity}
            />
            <FormInput
              label="ИНН"
              required
              register={register("inn", {
                required: "Пожалуйста, введите ИНН",
                pattern: {
                  value: /^\d+$/,
                  message: "ИНН должен содержать только цифры",
                },
                minLength: {
                  value: 9,
                  message: "ИНН должен содержать минимум 9 цифр",
                },
              })}
              placeholder="Резидент Республики Узбекистан"
              error={errors.inn}
            />
          </form>
        </div>
      </Collapse>
      <hr className={"border-t border-[#1C1C1C] sm:my-8 my-6"} />
      <Collapse title="Данные контактного лица" className="mb-4">
        <div className={"sm:p-6 p-4 !pt-2 bg-[#141414] rounded-xl"}>
          {/* form of "Данные контактного лица" */}
        </div>
      </Collapse>
    </section>
  );
};
