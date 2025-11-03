"use client";

import { FC, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { FormInput, FormSelect } from "@/app/components/shared/form";
import { useFormStore } from "@/app/store/form-store";
import { formatINN, formatPhone } from "@/app/shared/helpers/helper-functions";

interface Props {
  className?: string;
}

interface FormData {
  // Business information
  companyType: string;
  businessCategory: string;
  businessActivity: string;
  inn: string;

  // Contact person data
  lastName: string;
  firstName: string;
  middleName?: string;
  email: string;
  phone: string;
  position: string;
}

// Static data for company types
const staticCompanyTypes = [
  {
    id: "cmhhq162400072tjyh4qru3xd",
    type: "RESIDENT",
    displayName: "Резидент Республики Узбекистан",
    description: "Резидент Республики Узбекистан",
    isActive: true,
    sortOrder: 1,
  },
];

// Static data for business categories
const staticBusinessCategories = [
  {
    id: "cmhgpaiku00012toghuicwisp",
    name: "Business Category Ru",
    nameUz: "Business Category Ru",
    description: "Business Descrption",
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "cmhhq227v00082tjyyjh10m8h",
    name: "Здоровье",
    nameUz: "Здоровье",
    description: "Здоровье",
    isActive: true,
    sortOrder: 1,
  },
];

// Static data for business activities
const staticBusinessActivities = [
  {
    id: "cmhhq64t700012ttvxtwqvkl9",
    name: "Продажа лекарств",
    nameUz: "Продажа лекарств",
    businessCategoryId: "cmhhq227v00082tjyyjh10m8h",
    isActive: true,
    sortOrder: 1,
  },
];

export const AboutCompanyStep: FC<Props> = ({ className }) => {
  const params = useParams();
  const router = useRouter();
  const lang = (params?.lang as string) || "ru";
  const { formData, setFormData } = useFormStore();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      companyType: formData.companyType || "",
      businessCategory: formData.businessCategory || "",
      businessActivity: formData.businessActivity || "",
      inn: formData.inn || "",
      lastName: formData.lastName || "",
      firstName: formData.firstName || "",
      middleName: formData.middleName || "",
      email: formData.email || "",
      phone: formData.phone || "+998",
      position: formData.position || "",
    },
  });

  const watchedBusinessCategory = watch("businessCategory");

  // Transform company types to options format
  const companyTypeOptions = useMemo(() => {
    return staticCompanyTypes
      .filter((item) => item.isActive !== false)
      .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
      .map((item) => ({
        value: item.id,
        label: item.displayName || item.type || "",
      }));
  }, []);

  // Transform business categories to options format (language-aware)
  const businessCategoryOptions = useMemo(() => {
    return staticBusinessCategories
      .filter((item) => item.isActive !== false)
      .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
      .map((item) => {
        const label = lang === "uz" && item.nameUz ? item.nameUz : item.name || item.nameUz || "";
        return {
          value: item.id,
          label: label,
        };
      });
  }, [lang]);

  // Transform business activities filtered by selected business category
  const businessActivityOptions = useMemo(() => {
    if (!watchedBusinessCategory) return [];

    return staticBusinessActivities
      .filter(
        (item) =>
          item.isActive !== false &&
          item.businessCategoryId === watchedBusinessCategory,
      )
      .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
      .map((item) => {
        const label = lang === "uz" && item.nameUz ? item.nameUz : item.name || item.nameUz || "";
        return {
          value: item.id,
          label: label,
        };
      });
  }, [watchedBusinessCategory, lang]);

  // Reset business activity when business category changes
  useEffect(() => {
    if (watchedBusinessCategory) {
      setValue("businessActivity", "");
    }
  }, [watchedBusinessCategory, setValue]);

  const onSubmit = (data: FormData) => {
    // Save form data to store (merge with existing data)
    setFormData({
      ...formData,
      ...data,
    });

    // Navigate to next page after successful submission
    router.push(`/${lang}/form-slug-2`);
  };

  return (
    <section>
      <div className="flex flex-col">
        <h2 className="text-section-title mb-4 lg:mb-6 max-w-[600px]">
          О компании
        </h2>
        <p className="text-section-subtitle">
          Заполните данные о компании
        </p>
      </div>
      <hr className={"border-t w-full border-[#1C1C1C] my-8"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"p-6 bg-[#141414] rounded-xl"}>
          <h4 className={"text-xl text-text-primary mb-8"}>Информация о бизнесе</h4>
          <div className="w-full space-y-6">
            <FormSelect
              label="Тип компании"
              required
              register={register("companyType", {
                required: "Пожалуйста, выберите тип компании",
              })}
              options={companyTypeOptions}
              placeholder="Выберите тип компании"
              error={errors.companyType}
            />

            <FormSelect
              label="Категория бизнеса"
              required
              register={register("businessCategory", {
                required: "Пожалуйста, выберите категорию бизнеса",
              })}
              options={businessCategoryOptions}
              placeholder="Выберите категорию бизнеса"
              error={errors.businessCategory}
            />

            <FormSelect
              label="Сферы деятельности"
              required
              register={register("businessActivity", {
                required: "Пожалуйста, выберите сферы деятельности",
                validate: (value) => {
                  if (!watchedBusinessCategory) {
                    return "Сначала выберите категорию бизнеса";
                  }
                  return true;
                },
              })}
              options={businessActivityOptions}
              placeholder={
                !watchedBusinessCategory
                  ? "Сначала выберите категорию бизнеса"
                  : businessActivityOptions.length === 0
                    ? "Нет доступных сфер деятельности"
                    : "Выберите сферы деятельности"
              }
              error={errors.businessActivity}
              disabled={!watchedBusinessCategory || businessActivityOptions.length === 0}
            />

            <FormInput
              label="ИНН"
              required
              type="text"
              placeholder="123 456"
              register={register("inn", {
                required: "Пожалуйста, введите ИНН",
                pattern: {
                  value: /^\d{3}\s\d{3}$/,
                  message: "ИНН должен быть в формате XXX XXX",
                },
                onChange: (e) => {
                  const formatted = formatINN(e.target.value);
                  e.target.value = formatted;
                  setValue("inn", formatted, { shouldValidate: true });
                },
              })}
              error={errors.inn}
            />
          </div>
        </div>
        <hr className={"border-t w-full border-[#1C1C1C] my-8"} />
        {/*second form*/}
        <div className={"p-6 bg-[#141414] rounded-xl"}>
          <h4 className={"text-xl text-text-primary mb-8"}>Данные контактного лица</h4>
          <div className="w-full space-y-6">
            <div className="grid lg:grid-cols-3 gap-3">
              <FormInput
                label="Фамилия"
                required
                type="text"
                placeholder="Абдужабборов"
                register={register("lastName", {
                  required: "Пожалуйста, введите фамилию",
                })}
                error={errors.lastName}
              />
              <FormInput
                label="Имя"
                required
                type="text"
                placeholder="Амирбек"
                register={register("firstName", {
                  required: "Пожалуйста, введите имя",
                })}
                error={errors.firstName}
              />
              <FormInput
                label="Отчество (при наличии)"
                required={false}
                type="text"
                placeholder="Шавкат-Угли"
                register={register("middleName")}
                error={errors.middleName}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-3">
              <FormInput
                label="E-mail"
                required
                type="email"
                placeholder="example@email.com"
                register={register("email", {
                  required: "Пожалуйста, введите email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Пожалуйста, введите корректный email адрес",
                  },
                })}
                error={errors.email}
              />
              <FormInput
                label="Телефон"
                required
                type="tel"
                placeholder="+998 XX XXX XX XX"
                register={register("phone", {
                  required: "Пожалуйста, введите номер телефона",
                  // pattern: {
                  //   value: /^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/,
                  //   message: "Телефон должен быть в формате +998 XX XXX XX XX",
                  // },
                  onChange: (e) => {
                    const formatted = formatPhone(e.target.value);
                    e.target.value = formatted;
                    setValue("phone", formatted, { shouldValidate: true });
                  },
                })}
                error={errors.phone}
              />
            </div>
            <FormInput
              label="Должность"
              required
              type="text"
              placeholder="Введите должность"
              register={register("position", {
                required: "Пожалуйста, введите должность",
              })}
              error={errors.position}
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
          <button
            type="submit"
            className="h-12 px-6 rounded-lg bg-button-primary text-base font-medium text-white transition-colors"
          >
            Далее
          </button>
        </div>
      </form>
    </section>
  );
};
