import dayjs from "dayjs";
import "dayjs/locale/ru";

import "dayjs/locale/uz";
import { cookies } from "next/headers";
// Create a configured dayjs instance
const createConfiguredDayjs = () => {
  // Get locale from cookies or default to 'ru'
  const cookieStore = cookies();
  const locale = cookieStore.get("locale")?.value || "ru";

  // Set the locale globally for dayjs
  const dayjsLocale = locale === "ru" ? "ru" : "uz"; // fallback to uz for non-ru locales
  dayjs.locale(dayjsLocale);

  return dayjs;
};

// For client-side usage
const createClientConfiguredDayjs = (locale: string) => {
  const dayjsLocale = locale === "ru" ? "ru" : "uz"; // fallback to uz for non-ru locales
  dayjs.locale(dayjsLocale);
  return dayjs;
};

export { createConfiguredDayjs, createClientConfiguredDayjs };
export default dayjs;
