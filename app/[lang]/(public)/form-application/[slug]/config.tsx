import { ReactNode } from "react";

export type SlugConfig = {
  title: string;
  description?: string;
  component: ReactNode;
};

// Centralized configuration for all slug pages
export const SLUG_CONFIG: Record<string, SlugConfig> = {
  "step-1": {
    title: "Step 1 - Basic Information",
    description: "Please provide your basic information",
    component: (
      <div className="card-main">
        <p>Step 1 Form Content Here</p>
      </div>
    ),
  },
  "step-2": {
    title: "Step 2 - Additional Details",
    description: "Please provide additional details",
    component: (
      <div className="card-main">
        <p>Step 2 Form Content Here</p>
      </div>
    ),
  },
  "partners": {
    title: "Partner Application",
    description: "Apply to become a partner",
    component: (
      <div className="card-main">
        <p>Partner Application Form</p>
      </div>
    ),
  },
  "merchant": {
    title: "Merchant Registration",
    description: "Register as a merchant",
    component: (
      <div className="card-main">
        <p>Merchant Registration Form</p>
      </div>
    ),
  },
};

// Helper function to get slug config or return null
export function getSlugConfig(slug: string): SlugConfig | null {
  return SLUG_CONFIG[slug] || null;
}

// Get all available slugs
export function getAllSlugs(): string[] {
  return Object.keys(SLUG_CONFIG);
}

