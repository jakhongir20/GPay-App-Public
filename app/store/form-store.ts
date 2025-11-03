import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface FormApplicationData {
  // Step 1: Initial form
  companyType?: string;
  businessCategory?: string;
  businessAreas?: string;
  
  // Step 2: About company (form-slug-1)
  businessActivity?: string;
  inn?: string;
  lastName?: string;
  firstName?: string;
  middleName?: string;
  email?: string;
  phone?: string;
  position?: string;
  
  // Step 3: Legal information (form-slug-2)
  brandName?: string;
  isBrandNameMatchesLegalEntity?: boolean;
  legalEntityName?: string;
  directorFullName?: string;
  oked?: string;
  soato?: string;
  legalAddress?: string;
  
  // Step 4: About project (form-slug-3)
  projectStage?: "working" | "preparing";
  demoLink?: string;
  projectDescription?: string;
  currentPaymentServices?: string;
  hasNoPaymentServices?: boolean;
  paymentChannels?: string;
  needsCmsIntegration?: boolean;
  cmsPlatform?: string;
  integrationType?: string;
  additionalFeatures?: string;
  
  // Step 5: Financial indicators (form-slug-4)
  monthlyTurnoverFrom?: string;
  monthlyTurnoverTo?: string;
  cards?: {
    humo?: boolean;
    uzcard?: boolean;
    visa?: boolean;
    mastercard?: boolean;
  };
  
  // Step 6: Additional data (form-slug-5)
  // Add fields as needed
}

interface FormStore {
  formData: FormApplicationData;
  setFormData: (data: Partial<FormApplicationData>) => void;
  resetFormData: () => void;
}

const initialState: FormApplicationData = {};

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      formData: initialState,
      setFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),
      resetFormData: () =>
        set({
          formData: initialState,
        }),
    }),
    {
      name: "form-application-storage",
    }
  )
);

// Helper function to clear localStorage directly (if needed)
export const clearFormDataFromStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("form-application-storage");
    // Also trigger store reset to sync state
    useFormStore.getState().resetFormData();
  }
};

