import { useTranslations } from "next-intl";
import Link from "next/link";

interface NavLinksProps {
  locale: string;
  pathname: string;
  onMenuToggle: () => void;
}

export function NavLinks({ locale, pathname, onMenuToggle }: NavLinksProps) {
  const t = useTranslations();

  // Helper to create locale-aware links
  const getLocalizedHref = (href: string) => {
    if (href === "/") {
      return `/${locale}`;
    }
    return `/${locale}${href}`;
  };

  // Helper to check if a link is active
  const isActiveLink = (href: string) => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const pathWithoutLocale = pathSegments.length > 1 ? "/" + pathSegments.slice(1).join("/") : "/";
    const normalizedItemPath = href === "/" ? "/" : href;
    return pathWithoutLocale === normalizedItemPath ||
      (href === "/" && (pathWithoutLocale === "/" || pathWithoutLocale === ""));
  };

  return (
    <>
      <Link
        href={getLocalizedHref("/")}
        onClick={onMenuToggle}
        className={`nav-link ${isActiveLink("/") ? "nav-link-active" : ""}`}
      >
        {t("nav.home")}
      </Link>
      <Link
        href={getLocalizedHref("/cabinet")}
        onClick={onMenuToggle}
        className={`nav-link ${isActiveLink("/cabinet") ? "nav-link-active" : ""}`}
      >
        {t("nav.solutions")}
      </Link>
      <Link
        href={getLocalizedHref("/about")}
        onClick={onMenuToggle}
        className={`nav-link ${isActiveLink("/about") ? "nav-link-active" : ""}`}
      >
        {t("nav.about")}
      </Link>
      <Link
        href={getLocalizedHref("/team")}
        onClick={onMenuToggle}
        className={`nav-link ${isActiveLink("/team") ? "nav-link-active" : ""}`}
      >
        {t("nav.devs")}
      </Link>
      <Link
        href={getLocalizedHref("/form-application")}
        onClick={onMenuToggle}
        className={`nav-link ${isActiveLink("/form-application") ? "nav-link-active" : ""}`}
      >
        {t("nav.partners")}
      </Link>
      <Link
        href={getLocalizedHref("/license")}
        onClick={onMenuToggle}
        className={`nav-link ${isActiveLink("/license") ? "nav-link-active" : ""}`}
      >
        {t("nav.help")}
      </Link>
    </>
  );
}

