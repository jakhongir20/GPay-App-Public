"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { NavLinks } from "./NavLinks";

const LOCALES = ["uz", "ru", "en"] as const;
const LOCALE_LABELS: Record<string, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

const LOCALE_NAMES: Record<string, string> = {
  uz: "O'zbek",
  ru: "Русский",
  en: "English",
};

export default function Header() {
  const t = useTranslations();
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageSelect = (newLang: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const pathWithoutLang = segments.slice(1).join("/");
    const newPath = `/${newLang}${pathWithoutLang ? "/" + pathWithoutLang : ""}`;

    router.push(newPath);
    router.refresh();
    setLangDropdownOpen(false);
  };


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".language-dropdown-container")) {
        setLangDropdownOpen(false);
      }
    };

    if (langDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langDropdownOpen]);

  const handleMenuToggle = () => {
    if (burgerOpen) {
      // Start closing animation
      setIsClosing(true);
      // Wait for animation to complete (0.4s is the longest delay)
      setTimeout(() => {
        setBurgerOpen(false);
        setIsClosing(false);
      }, 450); // Slightly longer than the animation duration
    } else {
      setBurgerOpen(true);
      setIsClosing(false);
    }
  };

  // Prevent body scrolling when menu is open or closing
  useEffect(() => {
    if (burgerOpen || isClosing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [burgerOpen, isClosing]);

  return (
    <header className="header-main border-b border-[rgba(255,255,255,0.05)]">
      <div className="container-custom h-full">
        <div className="flex h-full items-center justify-between">
          <Link href={`/${locale}`} className="flex h-11 items-center">
            <img src="/images/Logo.svg" alt="Global Pay Logo" className="h-9" />
          </Link>

          <nav className={"nav-menu " + (burgerOpen && !isClosing ? " show" : isClosing ? " closing" : "")}>
            <NavLinks locale={locale} pathname={pathname} onMenuToggle={handleMenuToggle} />
            <br />
            <div
              className="header-actions header-actions-mobile z-50 flex xs:!hidden"
            >
              <div className="language-dropdown-container relative">
                <button
                  className="btn-language !xs:w-[84px] relative !w-[76px] overflow-hidden"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                >
                  <img
                    src="/images/globe.svg"
                    alt="Globe"
                    className="!xs:-left-[5%] absolute -left-[12%] top-1/2 -translate-y-1/2"
                  />
                  <span className="text-base xs:text-lg">{LOCALE_LABELS[locale] || "UZ"}</span>
                </button>
                {langDropdownOpen && (
                  <div
                    className="absolute top-full -right-21 sm:right-0 mt-2 w-[180px] bg-[#1C1C1C] rounded-lg shadow-lg overflow-hidden z-50">
                    {LOCALES.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageSelect(lang)}
                        className={`w-full px-4 py-3  text-left text-white text-sm hover:bg-[#2a2a2a] transition-colors ${locale === lang ? "bg-[#2a2a2a]" : ""
                          }`}
                      >
                        <span className="font-medium">{LOCALE_LABELS[lang]}</span>{" "}
                        <span className="text-white/70">{LOCALE_NAMES[lang]}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="btn-user flex h-[38px] w-[38px] items-center justify-center xs:h-11 xs:w-11"
              >
                <img
                  src="/images/user.svg"
                  alt="User"
                  className="!xs:h-4.5 !xs:w-4.5 !h-4 !w-4"
                />
              </button>
            </div>
          </nav>

          <div className="header-actions">
            <div className="language-dropdown-container relative hidden xs:block">
              <button
                className="btn-language relative !w-[84px] overflow-hidden"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              >
                <img
                  src="/images/globe.svg"
                  alt="Globe"
                  className="absolute -left-[5%] top-1/2 -translate-y-1/2"
                />
                <span className="">{LOCALE_LABELS[locale] || "UZ"}</span>
              </button>
              {langDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-[128px] bg-[#1C1C1C] rounded-lg shadow-lg overflow-hidden z-50">
                  {LOCALES.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageSelect(lang)}
                      className={`w-full px-4 py-3 text-left text-white text-sm flex gap-3 hover:bg-[#2a2a2a] transition-colors ${locale === lang ? "bg-[#2a2a2a]" : ""
                        }`}
                    >
                      <span className="font-medium">{LOCALE_LABELS[lang]}</span>{" "}
                      <span className="text-white/70">{LOCALE_NAMES[lang]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="btn-primary" onClick={() => router.push(`/${locale}/form-slug-1`)}>
              {t("header.connect")}
            </button>

            <button
              className="btn-user hidden h-[38px] w-[38px] items-center justify-center xs:flex xs:h-11 xs:w-11"
            >
              <img src="/images/user.svg" alt="User" className="h-4.5 w-4.5" />
            </button>

            <button
              className={`btn-hamburger lg:hidden ${burgerOpen && !isClosing && "active"}`}
              onClick={handleMenuToggle}
            >
              <div className="hamburger-icon">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


