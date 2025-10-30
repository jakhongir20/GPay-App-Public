import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const cleanLocale = typeof requested === "string"
    ? requested.replace(/[^a-z-]/gi, "").toLowerCase()
    : "";

  const localeMapping: Record<string, string> = {
    "en-us": "en",
    "en-gb": "en",
    "en-ca": "en",
    "en-au": "en",
    "en-nz": "en",
    "ru-ru": "ru",
    "ru-by": "ru",
    "ru-kz": "ru",
    "ru-ua": "ru",
    "uz-uz": "uz",
    "uz-latn": "uz",
    "uz-cyrl": "uz",
  };

  let locale = hasLocale(["ru", "uz", "en"], cleanLocale)
    ? cleanLocale
    : null;

  if (!locale && cleanLocale) {
    locale = (localeMapping[cleanLocale] || null) as "ru" | "uz" | "en" | null;
  }

  if (!locale) {
    locale = "ru";
  }

  try {
    return {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default,
    };
  } catch (error) {
    console.warn(`Failed to load messages for locale '${locale}', falling back to 'uz'`, error);
    return {
      locale: "ru",
      messages: (await import(`../messages/ru.json`)).default,
    };
  }
});
