"use client";

import { useGetReferenceData } from "@/app/api/generated/globalPayPlatformAPI";
import { useMemo } from "react";
import { useParams } from "next/navigation";

interface ReferenceDataOption {
  value: string;
  label: string;
}

/**
 * Helper hook to fetch and transform reference data for a specific key
 * Supports language-aware labels based on API response structure
 */
export function useReferenceDataOptions(key: string): {
  options: ReferenceDataOption[];
  isLoading: boolean;
  error: unknown;
} {
  const params = useParams();
  const lang = (params?.lang as string) || "ru";

  // Fetch all reference data once - the API might return all data in one call
  const { data, isLoading, error } = useGetReferenceData(
    { active: true },
    {
      query: {
        queryKey: ["reference-data"],
        staleTime: 5 * 60 * 1000, // Cache for 5 minutes
      },
    }
  );

  const options: ReferenceDataOption[] = useMemo(() => {
    if (!data || typeof data !== "object") return [];

    // Map singular form keys to plural API response keys
    const keyMapping: Record<string, string> = {
      companyType: "companyTypes",
      businessCategory: "businessCategories",
      businessAreas: "businessActivities",
    };

    // Get the actual API key (plural form)
    const apiKey = keyMapping[key] || key;

    // Handle nested data structure: response.data[key]
    let responseData: Record<string, unknown> = data as Record<string, unknown>;
    if ("data" in data && typeof (data as Record<string, unknown>).data === "object" && (data as Record<string, unknown>).data !== null) {
      responseData = (data as Record<string, unknown>).data as Record<string, unknown>;
    }

    // Transform API response to options format
    if (apiKey in responseData && Array.isArray((responseData as Record<string, unknown>)[apiKey])) {
      const items = (responseData as Record<string, unknown>)[apiKey] as Array<{
        id?: string;
        name?: string;
        nameUz?: string;
        displayName?: string;
        type?: string;
        description?: string;
        isActive?: boolean;
        sortOrder?: number;
      }>;

      // Filter active items and map to options format
      return items
        .filter((item) => item.isActive !== false)
        .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
        .map((item) => {
          let label = "";

          // For businessCategories: use name or nameUz based on language
          if (apiKey === "businessCategories") {
            if (lang === "uz" && item.nameUz) {
              label = item.nameUz;
            } else {
              label = item.name || item.nameUz || "";
            }
          }
          // For companyTypes: use displayName
          else if (apiKey === "companyTypes") {
            label = item.displayName || item.type || "";
          }
          // For other types: fallback to name or description
          else {
            label = item.name || item.displayName || item.description || "";
          }

          return {
            value: item.id || "",
            label: label,
          };
        });
    }

    return [];
  }, [data, key, lang]);

  return { options, isLoading, error };
}

