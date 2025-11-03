"use client";

import { FC, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { FormSelect } from "@/app/components/shared/form";
import { useFormStore } from "@/app/store/form-store";

interface Props {
  className?: string;
  formAreasActivity?: boolean;
}

interface FormData {
  companyType: string;
  businessCategory: string;
  businessAreas?: string;
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

export const FormApplication: FC<Props> = ({ className, formAreasActivity = true }) => {
  const t = useTranslations("HomePage.FormApplication");
  const router = useRouter();
  const params = useParams();
  const lang = params?.lang as string || "ru";
  const { setFormData } = useFormStore();

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

  // Placeholder for business areas (empty for now)
  const businessAreasOptions = useMemo(() => {
    return [];
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      companyType: "",
      businessCategory: "",
      businessAreas: "",
    },
  });

  const onSubmit = (data: FormData) => {
    // Validate that required fields are selected
    if (!data.companyType || !data.businessCategory) {
      return;
    }

    // Store form data in Zustand store
    setFormData({
      companyType: data.companyType,
      businessCategory: data.businessCategory,
      businessAreas: data.businessAreas,
    });

    // Navigate to form-slug-1 with lang parameter
    router.push(`/${lang}/form-slug-1`);
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
                {t("Title")}
              </h2>
              <p
                className="font-helvetica-neue-cyr md:max-w-[350px] text-lg leading-6 text-white/60"
              >
                {t("Description")}
              </p>
            </div>
            <div className="sm:basis-1/2">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormSelect
                  label={t("CompanyTypeLabel")}
                  required
                  register={register("companyType", {
                    required: t("CompanyTypeRequired"),
                  })}
                  options={companyTypeOptions}
                  placeholder={t("CompanyTypePlaceholder") || "Выберите тип компании"}
                  error={errors.companyType}
                />

                <FormSelect
                  label={t("BusinessCategoryLabel")}
                  required
                  register={register("businessCategory", {
                    required: t("BusinessCategoryRequired"),
                  })}
                  options={businessCategoryOptions}
                  placeholder={t("BusinessCategoryPlaceholder") || "Выберите категорию бизнеса"}
                  error={errors.businessCategory}
                />

                {formAreasActivity && (
                  <FormSelect
                    label={t("BusinessAreasLabel")}
                    required
                    register={register("businessAreas", {
                      required: t("BusinessAreasRequired"),
                    })}
                    options={businessAreasOptions}
                    placeholder={t("BusinessAreasPlaceholder") || "Выберите сферы деятельности"}
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
                    <p className="text-sm font-medium text-green-400">{t("Success")}</p>
                    <div
                      className="mt-1 flex items-center gap-4 text-xs text-white/60"
                    >
                      <span className="cursor-pointer hover:text-white"
                      >{t("Privacy")}</span
                      >
                      <span className="cursor-pointer hover:text-white"
                      >{t("Terms")}</span
                      >
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="h-12 w-full rounded-lg bg-button-primary text-base font-medium text-white transition-colors"
                >
                  {t("Continue")}
                </button>

                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/images/icon/shield-check.svg"
                    alt="Shield Check"
                    className="h-5 w-5"
                  />
                  <span
                    className="font-helvetica-neue-cyr text-sm font-normal text-[#8AE16A]"
                  >{t("DataProtected")}</span
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
