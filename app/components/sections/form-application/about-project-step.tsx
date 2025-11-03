"use client";

import React, { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { Checkbox } from "@/app/components/shared/checkbox";
import { FormInput, FormSelect } from "@/app/components/shared/form";
import { useFormStore } from "@/app/store/form-store";
import { cn } from "@/app/shared/helpers/helper-functions";

interface Props {
  className?: string;
}

interface FormData {
  projectStage: "working" | "preparing";
  demoLink: string;
  projectDescription?: string;
  currentPaymentServices?: string;
  hasNoPaymentServices: boolean;
  paymentChannels: string;
  needsCmsIntegration: boolean;
  cmsPlatform?: string;
  integrationType: string;
  additionalFeatures: string;
}

// Options for select fields
const paymentChannelOptions = [
  { value: "website", label: "Веб-сайт" },
  { value: "mobile", label: "Мобильное приложение" },
  { value: "both", label: "Оба варианта" },
];

const cmsPlatformOptions = [
  { value: "wordpress", label: "WordPress" },
  { value: "opencart", label: "OpenCart" },
  { value: "bitrix", label: "1С-Битрикс" },
  { value: "other", label: "Другое" },
];

const integrationTypeOptions = [
  { value: "api", label: "API" },
  { value: "widget", label: "Виджет" },
  { value: "payment_link", label: "Платежная ссылка" },
];

const additionalFeaturesOptions = [
  { value: "recurring", label: "Регулярные платежи" },
  { value: "installments", label: "Рассрочка" },
  { value: "refunds", label: "Возвраты" },
  { value: "multi", label: "Все функции" },
];

export const AboutProjectStep: FC<Props> = ({ className }) => {
  const params = useParams();
  const router = useRouter();
  const lang = (params?.lang as string) || "ru";
  const { formData, setFormData } = useFormStore();

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      projectStage: formData.projectStage || "working",
      demoLink: formData.demoLink || "",
      projectDescription: formData.projectDescription || "",
      currentPaymentServices: formData.currentPaymentServices || "",
      hasNoPaymentServices: formData.hasNoPaymentServices ?? false,
      paymentChannels: formData.paymentChannels || "",
      needsCmsIntegration: formData.needsCmsIntegration ?? false,
      cmsPlatform: formData.cmsPlatform || "",
      integrationType: formData.integrationType || "",
      additionalFeatures: formData.additionalFeatures || "",
    },
  });

  const watchedHasNoPaymentServices = watch("hasNoPaymentServices");
  const watchedNeedsCmsIntegration = watch("needsCmsIntegration");

  // Clear payment services when checkbox is checked
  useEffect(() => {
    if (watchedHasNoPaymentServices) {
      setValue("currentPaymentServices", "", { shouldValidate: false });
    }
  }, [watchedHasNoPaymentServices, setValue]);

  // Clear CMS platform when needsCmsIntegration is false
  useEffect(() => {
    if (!watchedNeedsCmsIntegration) {
      setValue("cmsPlatform", "", { shouldValidate: false });
    }
  }, [watchedNeedsCmsIntegration, setValue]);

  const onSubmit = (data: FormData) => {
    // Save form data to store (merge with existing data)
    setFormData({
      ...formData,
      ...data,
    });

    // Navigate to next page after successful submission
    router.push(`/${lang}/form-slug-4`);
  };

  return (
    <section className={cn(className)}>
      <div className="flex flex-col">
        <h2 className="text-section-title mb-4 lg:mb-6 max-w-[600px]">
          О проекте
        </h2>
        <p className="text-section-subtitle">
          Расскажите нам о своем бизнесе как можно подробнее
        </p>
      </div>
      <hr className={"border-t w-full border-[#1C1C1C] my-8"} />
      <div className={"p-6 bg-[#141414] rounded-xl"}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
          <div>
            <h4 className={"text-xl text-text-primary mb-4"}>На каком этапе ваш проект сейчас?</h4>
            <Controller
              name="projectStage"
              control={control}
              render={({ field: { value, onChange } }) => (
                <div className={"p-1 rounded-lg flex gap-1 items-center max-w-fit bg-[#1C1C1C]"}>
                  <button
                    type="button"
                    onClick={() => onChange("working")}
                    className={cn(
                      "px-3 py-2 text-base rounded-lg transition-colors",
                      value === "working"
                        ? "bg-button-primary text-white"
                        : "text-[#F2F2F2] hover:text-white",
                    )}
                  >
                    Проект работает
                  </button>
                  <button
                    type="button"
                    onClick={() => onChange("preparing")}
                    className={cn(
                      "px-3 py-2 text-base rounded-lg transition-colors",
                      value === "preparing"
                        ? "bg-button-primary text-white"
                        : "text-[#F2F2F2] hover:text-white",
                    )}
                  >
                    Готовится к запуску
                  </button>
                </div>
              )}
            />
          </div>

          <FormInput
            label="Ссылка на демонстрацию"
            required
            type="url"
            placeholder="https://"
            register={register("demoLink", {
              required: "Пожалуйста, введите ссылку на демонстрацию",
              pattern: {
                value: /^https?:\/\/.+/,
                message: "Введите корректный URL (начинается с http:// или https://)",
              },
            })}
            error={errors.demoLink}
          />

          <div className={"mb-4"}>
            <label className="mb-2 block text-base tracking-[-0.16px] text-white/60">
              Расскажите про ваш проект
            </label>
            <div className="relative">
              <textarea
                {...register("projectDescription")}
                placeholder="Напишите детальное описание, чтобы мы смогли подобрать для вас лучшее решение"
                rows={4}
                className={cn(
                  "w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors border border-transparent resize-none",
                  errors.projectDescription
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary",
                )}
              />
            </div>
            <small className={"text-[rgba(237,237,237,0.60)] text-xs"}>
              Расскажите об особенностях, при помощи чего там и туда сюда и т.д.
            </small>
          </div>

          {/*second title*/}
          <div>
            <h4 className={"text-xl text-text-primary mb-4"}>С какими платежными сервисами работаете сейчас?</h4>
            <FormInput
              label=""
              type="text"
              placeholder="Например: Robokassa, Click и др."
              disabled={watchedHasNoPaymentServices}
              register={register("currentPaymentServices")}
              error={errors.currentPaymentServices}
            />
            <Controller
              name="hasNoPaymentServices"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Checkbox
                  id="demo"
                  label="Нет платежных сервисов"
                  className={"mt-4"}
                  checked={value}
                  onChange={(event) => {
                    onChange(event.target.checked);
                    if (event.target.checked) {
                      setValue("currentPaymentServices", "", { shouldValidate: false });
                    }
                  }}
                />
              )}
            />
          </div>

          {/*third title*/}
          <div>
            <h4 className={"text-xl text-text-primary mb-4"}>Интеграции и сервисы</h4>
            <FormSelect
              label="Через какие каналы принимаете оплату?"
              required
              register={register("paymentChannels", {
                required: "Пожалуйста, выберите канал оплаты",
              })}
              options={paymentChannelOptions}
              placeholder="Выберите канал оплаты"
              error={errors.paymentChannels}
            />

            <div className={"mt-4"}>
              <label className="mb-2 block text-base tracking-[-0.16px] text-white/60">
                <div className={"flex gap-1"}>
                  Нужна ли интеграция CMS/Платформами? <span className="text-text-primary">*</span>
                </div>
              </label>
              <Controller
                name="needsCmsIntegration"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <div className="relative flex gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        onChange(true);
                        if (!value) {
                          setValue("cmsPlatform", "", { shouldValidate: false });
                        }
                      }}
                      className={cn(
                        "px-3 py-2 text-base rounded-lg transition-colors !w-20",
                        value === true
                          ? "bg-button-primary text-white"
                          : "btn-user",
                      )}
                    >
                      Да
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onChange(false);
                        setValue("cmsPlatform", "", { shouldValidate: false });
                      }}
                      className={cn(
                        "px-3 py-2 text-base rounded-lg transition-colors !w-20",
                        value === false
                          ? "bg-button-primary text-white"
                          : "btn-user",
                      )}
                    >
                      Нет
                    </button>
                  </div>
                )}
              />
              {watchedNeedsCmsIntegration && (
                <div className="relative mt-4">
                  <FormSelect
                    label="Выберите CMS/Платформу"
                    required
                    register={register("cmsPlatform", {
                      required: watchedNeedsCmsIntegration ? "Пожалуйста, выберите CMS/Платформу" : false,
                      validate: (value) => {
                        if (watchedNeedsCmsIntegration && !value) {
                          return "Пожалуйста, выберите CMS/Платформу";
                        }
                        return true;
                      },
                    })}
                    options={cmsPlatformOptions}
                    placeholder="Выберите CMS/Платформу"
                    error={errors.cmsPlatform}
                  />
                </div>
              )}
            </div>

            <div className="relative mt-4">
              <FormSelect
                label="Желаемый тип интеграции"
                required
                register={register("integrationType", {
                  required: "Пожалуйста, выберите тип интеграции",
                })}
                options={integrationTypeOptions}
                placeholder="Выберите тип интеграции"
                error={errors.integrationType}
              />
            </div>
            <div className="relative mt-4">
              <FormSelect
                label="Какие дополнительные функции вам нужны?"
                required
                register={register("additionalFeatures", {
                  required: "Пожалуйста, выберите дополнительные функции",
                })}
                options={additionalFeaturesOptions}
                placeholder="Выберите дополнительные функции"
                error={errors.additionalFeatures}
              />
            </div>
          </div>

          {/*  form action*/}
          <div className={"py-6 flex items-center justify-between"}>
            <div className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M15 8C15 8.98224 14.5279 9.85423 13.7983 10.4015C13.9273 11.3044 13.6446 12.2549 12.95 12.9494C12.2553 13.6441 11.3048 13.9269 10.4019 13.7978C9.85465 14.5277 8.98248 15 8 15C7.01773 15 6.14572 14.5279 5.59848 13.7983C4.69556 13.9273 3.74514 13.6445 3.05055 12.9499C2.35595 12.2553 2.07316 11.3048 2.2022 10.4019C1.47228 9.85464 1 8.98248 1 8C1 7.01773 1.47208 6.14573 2.20173 5.59848C2.07273 4.69557 2.35552 3.74513 3.0501 3.05055C3.74471 2.35595 4.69519 2.07316 5.59813 2.2022C6.14535 1.47228 7.01752 1 8 1C8.98224 1 9.85423 1.47205 10.4015 2.20167C11.3044 2.07265 12.2549 2.35544 12.9494 3.05003C13.6441 3.74465 13.9269 4.69516 13.7978 5.59813C14.5277 6.14535 15 7.01752 15 8ZM11.7086 5.15657C12.0364 5.40984 12.0967 5.88086 11.8435 6.20862L7.59347 11.7086C7.45747 11.8846 7.25037 11.9912 7.0281 11.9995C6.80583 12.0078 6.59133 11.9171 6.44254 11.7518L4.19254 9.25176C3.91544 8.94388 3.9404 8.46966 4.24828 8.19257C4.55617 7.91547 5.03038 7.94043 5.30748 8.24831L6.95616 10.0802L10.6565 5.29145C10.9098 4.96369 11.3808 4.9033 11.7086 5.15657Z"
                      fill="#EDEDED" />
              </svg>
              <span
                className="font-helvetica-neue-cyr text-sm font-normal text-[rgba(237,237,237,0.40)]"
              >Сохранено в 10:21</span
              >
            </div>
            <div className={"flex gap-3"}>
              <button
                type={"button"}
                className="h-12 px-4 sm:px-6  btn-user rounded-lg"
                onClick={() => router.push(`/${lang}/form-slug-2`)}
              >
                Назад
              </button>
              <button
                type="submit"
                className="h-12 px-4 sm:px-6 rounded-lg bg-button-primary text-base font-medium text-white transition-colors"
              >
                Далее
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
