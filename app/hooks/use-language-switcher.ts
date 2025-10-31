// import { useLocale } from "next-intl";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
//
// export function useLanguageSwitcher() {
//   const locale = useLocale()
//   const router = useRouter();
//   const pathName = usePathname();
//   const params = useSearchParams();
//
//   const handleChangeLang = (lang: Locale) => {
//     const newPath = redirectedPathName(lang);
//     router.push(newPath);
//   };
//
//   const currentLangLabel = () => {
//     const currentLang = LANGUAGES.find(o => o.value === locale);
//     return currentLang ? currentLang.label : LANGUAGES[0].label;
//   };
//
//   const redirectedPathName = (locale: string) => {
//     if (!pathName) return '/';
//     const segments = pathName.split('/');
//     segments[1] = locale;
//     segments[segments.length - 1] = segments[segments.length - 1] + '?' + getQueryParams(params);
//     return segments.join('/');
//   };
//
//   return {locale, currentLangLabel, handleChangeLang};
// }
