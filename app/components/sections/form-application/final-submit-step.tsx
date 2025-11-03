"use client";

import { FC, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Collapse } from "@/app/components/shared/Collapse";
import { SuccessModal } from "@/app/components/shared/SuccessModal";
import { useFormStore } from "@/app/store/form-store";
import { cn } from "@/app/shared/helpers/helper-functions";
import { useCreateApplication, useSubmitApplication } from "@/app/api/generated/globalPayPlatformAPI";
import {
  CreateOnboardingApplicationDtoCompanyType,
} from "@/app/api/generated/models/createOnboardingApplicationDtoCompanyType";

interface Props {
  className?: string;
}

interface DataFieldProps {
  label: string;
  value?: string | boolean | null;
  required?: boolean;
}

const DataField: FC<DataFieldProps> = ({ label, value, required }) => {
  if (value === undefined || value === null || value === "") {
    return null;
  }

  let displayValue: string;
  if (typeof value === "boolean") {
    displayValue = value ? "Да" : "Нет";
  } else {
    displayValue = value.toString();
  }

  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm tracking-[-0.16px] text-white/60">
        {label} {required && <span className="text-text-primary">*</span>}
      </label>
      <div className="text-base text-text-primary">{displayValue}</div>
    </div>
  );
};

export const FinalSubmitStep: FC<Props> = ({ className }) => {
  const router = useRouter();
  const params = useParams();
  const lang = (params?.lang as string) || "ru";
  const { formData, resetFormData } = useFormStore();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");

  // Generate random sessionId
  const generateSessionId = () => {
    const prefix = "sess_";
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return prefix + randomString;
  };

  // Submit application mutation
  const submitApplicationMutation = useSubmitApplication({
    mutation: {
      onSuccess: () => {
        // Submit endpoint called successfully (optional - modal already shown)
        console.log("Application submitted successfully");
      },
      onError: (error) => {
        console.error("Error submitting application:", error);
        // Don't show error to user since creation was successful
      },
    },
  });

  // Create application mutation
  const createApplicationMutation = useCreateApplication({
    mutation: {
      onSuccess: (data, variables) => {
        debugger
        // Show success modal when application is created (201 response)
        setShowSuccessModal(true);

        // Optionally also submit the application
        const createdSessionId = variables.data.sessionId;
        if (createdSessionId) {
          // Submit in background (don't wait for it)
          submitApplicationMutation.mutate({ id: createdSessionId });
        }
      },
      onError: (error) => {
        debugger
        console.error("Error creating application:", error);
      },
    },
  });

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.companyType || !formData.businessCategory) {
      return;
    }

    // Generate sessionId
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);

    // Map companyType ID to enum value
    // For now, defaulting to RESIDENT if not explicitly set
    // You may need to adjust this based on your actual companyType values
    const companyTypeEnum: CreateOnboardingApplicationDtoCompanyType =
      CreateOnboardingApplicationDtoCompanyType.RESIDENT;

    // Create application first
    createApplicationMutation.mutate({
      data: {
        sessionId: newSessionId,
        companyType: companyTypeEnum,
        businessCategoryId: formData.businessCategory,
      },
    });
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Optionally navigate to home page or reset form
    // router.push(`/${lang}`);
    // resetFormData();
  };

  // Helper function to get card names
  const getSelectedCards = () => {
    const cards = formData.cards;
    if (!cards) return "Не указано";

    const selectedCards: string[] = [];
    if (cards.humo) selectedCards.push("Humo");
    if (cards.uzcard) selectedCards.push("Uzcard");
    if (cards.visa) selectedCards.push("Visa");
    if (cards.mastercard) selectedCards.push("Mastercard");

    return selectedCards.length > 0 ? selectedCards.join(", ") : "Не указано";
  };

  // Helper function to get project stage label
  const getProjectStageLabel = () => {
    if (formData.projectStage === "working") return "Проект работает";
    if (formData.projectStage === "preparing") return "Готовится к запуску";
    return "Не указано";
  };

  // Helper function to get payment channel label
  const getPaymentChannelLabel = () => {
    const channels: Record<string, string> = {
      website: "Веб-сайт",
      mobile: "Мобильное приложение",
      both: "Оба варианта",
    };
    return formData.paymentChannels ? channels[formData.paymentChannels] || formData.paymentChannels : "Не указано";
  };

  // Helper function to get integration type label
  const getIntegrationTypeLabel = () => {
    const types: Record<string, string> = {
      api: "API",
      widget: "Виджет",
      payment_link: "Платежная ссылка",
    };
    return formData.integrationType ? types[formData.integrationType] || formData.integrationType : "Не указано";
  };

  // Helper function to get CMS platform label
  const getCmsPlatformLabel = () => {
    const platforms: Record<string, string> = {
      wordpress: "WordPress",
      opencart: "OpenCart",
      bitrix: "1С-Битрикс",
      other: "Другое",
    };
    return formData.cmsPlatform ? platforms[formData.cmsPlatform] || formData.cmsPlatform : "Не указано";
  };

  // Helper function to get additional features label
  const getAdditionalFeaturesLabel = () => {
    const features: Record<string, string> = {
      recurring: "Регулярные платежи",
      installments: "Рассрочка",
      refunds: "Возвраты",
      multi: "Все функции",
    };
    return formData.additionalFeatures ? features[formData.additionalFeatures] || formData.additionalFeatures : "Не указано";
  };

  return (
    <section className={cn(className)}>
      <div className={"mb-12"}>
        <img src={"/images/status.svg"} className={"w-16 h-16"} alt="Status" />
      </div>
      <div className="flex flex-col mb-10">
        <h2 className="text-section-title mb-4 lg:mb-6 max-w-[600px]">
          Ваша заявка готова!
        </h2>
        <p className="text-section-subtitle max-w-[450px]">
          Осталось проверить правильность введенных данных и можно отправлять
        </p>
      </div>

      {/* Step 1: Initial Form - Business Information */}
      <Collapse title="Информация о бизнесе" defaultOpen className="mb-4">
        <div className={"sm:p-6 p-4 !pt-2 bg-[#141414] rounded-xl"}>
          <div className="w-full space-y-6">
            <DataField label="Тип компании" value={formData.companyType} required />
            <DataField label="Категория бизнеса" value={formData.businessCategory} required />
            <DataField label="Сферы деятельности" value={formData.businessAreas} />
            <DataField label="Сферы деятельности (детали)" value={formData.businessActivity} required />
            <DataField label="ИНН" value={formData.inn} required />
          </div>
        </div>
      </Collapse>

      <hr className={"border-t border-[#1C1C1C] sm:my-8 my-6"} />

      {/* Step 2: Contact Person Data */}
      <Collapse title="Данные контактного лица" className="mb-4">
        <div className={"sm:p-6 p-4 !pt-2 bg-[#141414] rounded-xl"}>
          <div className="w-full space-y-6">
            <div className="grid lg:grid-cols-3 gap-3">
              <DataField label="Фамилия" value={formData.lastName} required />
              <DataField label="Имя" value={formData.firstName} required />
              <DataField label="Отчество" value={formData.middleName} />
            </div>
            <div className="grid lg:grid-cols-2 gap-3">
              <DataField label="E-mail" value={formData.email} required />
              <DataField label="Телефон" value={formData.phone} required />
            </div>
            <DataField label="Должность" value={formData.position} required />
          </div>
        </div>
      </Collapse>

      <hr className={"border-t border-[#1C1C1C] sm:my-8 my-6"} />

      {/* Step 3: Legal Information */}
      <Collapse title="Юридическая информация" className="mb-4">
        <div className={"sm:p-6 p-4 !pt-2 bg-[#141414] rounded-xl"}>
          <div className="w-full space-y-6">
            <DataField label="Брендовое название" value={formData.brandName} required />
            {formData.isBrandNameMatchesLegalEntity && (
              <DataField label="Совпадает с юридическим названием" value={formData.isBrandNameMatchesLegalEntity} />
            )}
            <DataField label="Полное наименование юр. лица" value={formData.legalEntityName} required />
            <DataField label="ФИО Директора" value={formData.directorFullName} required />
            <DataField label="ОКЭД" value={formData.oked} required />
            <DataField label="Регион/район (SOATO)" value={formData.soato} required />
            <DataField label="Юридический адрес" value={formData.legalAddress} required />
          </div>
        </div>
      </Collapse>

      <hr className={"border-t border-[#1C1C1C] sm:my-8 my-6"} />

      {/* Step 4: About Project */}
      <Collapse title="О проекте" className="mb-4">
        <div className={"sm:p-6 p-4 !pt-2 bg-[#141414] rounded-xl"}>
          <div className="w-full space-y-6">
            <DataField label="Этап проекта" value={getProjectStageLabel()} required />
            <DataField label="Ссылка на демонстрацию" value={formData.demoLink} required />
            <DataField label="Описание проекта" value={formData.projectDescription} />
            {!formData.hasNoPaymentServices && (
              <DataField label="Текущие платежные сервисы" value={formData.currentPaymentServices} />
            )}
            {formData.hasNoPaymentServices && (
              <DataField label="Платежные сервисы" value="Нет платежных сервисов" />
            )}
            <DataField label="Каналы оплаты" value={getPaymentChannelLabel()} required />
            <DataField
              label="Нужна интеграция CMS/Платформами"
              value={formData.needsCmsIntegration !== undefined ? (formData.needsCmsIntegration ? "Да" : "Нет") : undefined}
            />
            {formData.needsCmsIntegration && (
              <DataField label="CMS/Платформа" value={getCmsPlatformLabel()} />
            )}
            <DataField label="Тип интеграции" value={getIntegrationTypeLabel()} required />
            <DataField label="Дополнительные функции" value={getAdditionalFeaturesLabel()} required />
          </div>
        </div>
      </Collapse>

      <hr className={"border-t border-[#1C1C1C] sm:my-8 my-6"} />

      {/* Step 5: Financial Indicators */}
      <Collapse title="Финансовые показатели" className="mb-4">
        <div className={"sm:p-6 p-4 !pt-2 bg-[#141414] rounded-xl"}>
          <div className="w-full space-y-6">
            <div className="grid grid-cols-2 gap-3">
              <DataField label="Месячные обороты от" value={formData.monthlyTurnoverFrom} required />
              <DataField label="Месячные обороты до" value={formData.monthlyTurnoverTo} required />
            </div>
            <DataField label="Выбранные карты" value={getSelectedCards()} required />
          </div>
        </div>
      </Collapse>

      {/* Submit Button */}
      <div className={"py-6 flex items-center justify-end"}>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={createApplicationMutation.isPending || submitApplicationMutation.isPending}
          className={cn(
            "h-12 px-4 sm:px-6 rounded-lg bg-button-primary text-base font-medium text-white transition-colors",
            "hover:bg-button-primary/90 disabled:opacity-50 disabled:cursor-not-allowed",
          )}
        >
          {createApplicationMutation.isPending || submitApplicationMutation.isPending
            ? "Отправка..."
            : "Отправить заявку"}
        </button>
      </div>

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccessModal} onClose={handleCloseModal} />
    </section>
  );
};
