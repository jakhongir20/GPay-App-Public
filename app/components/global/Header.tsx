"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";

const MENU_ITEMS = [
  { href: "/", label: "Главная" },
  { href: "/cabinet", label: "Платежные решения" },
  { href: "/about", label: "О компании" },
  { href: "/team", label: "Разработчикам" },
  { href: "/form-application", label: "Партнерам" },
  { href: "#", label: "Помощь" },
];

const LOCALES = ["uz", "ru", "en"] as const;
const LOCALE_LABELS: Record<string, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleToggle = () => {
    const segments = pathname.split("/").filter(Boolean);
    const currentLang = segments[0];

    const currentIndex = LOCALES.indexOf(currentLang as any);
    const nextIndex = (currentIndex + 1) % LOCALES.length;
    const nextLang = LOCALES[nextIndex];

    const pathWithoutLang = segments.slice(1).join("/");
    const newPath = `/${nextLang}${pathWithoutLang ? "/" + pathWithoutLang : ""}`;

    router.push(newPath);
  };

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
    <header className="header-main">
      <div className="container-custom h-full">
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="flex h-11 items-center">
            <img src="/images/Logo.svg" alt="Global Pay Logo" className="h-9" />
          </Link>

          <nav className={"nav-menu " + (burgerOpen && !isClosing ? " show" : isClosing ? " closing" : "")}>
            {MENU_ITEMS.map((item, index) => (
              <Link key={index} href={item.href} className="nav-link">{item.label}</Link>
            ))}
            <br />
            <div
              className="header-actions header-actions-mobile z-50 flex xs:!hidden"
            >
              <button
                className="btn-language !xs:w-[84px] relative !w-[76px] overflow-hidden"
                onClick={handleToggle}
              >
                <img
                  src="/images/globe.svg"
                  alt="Globe"
                  className="!xs:-left-[5%] absolute -left-[12%] top-1/2 -translate-y-1/2"
                />
                <span className="text-base xs:text-lg">{LOCALE_LABELS[locale] || "UZ"}</span>
              </button>

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
            <button
              className="btn-language relative hidden !w-[84px] overflow-hidden xs:flex"
              onClick={handleToggle}
            >
              <img
                src="/images/globe.svg"
                alt="Globe"
                className="absolute -left-[5%] top-1/2 -translate-y-1/2"
              />
              <span className="">{LOCALE_LABELS[locale] || "UZ"}</span>
            </button>

            <button className="btn-primary">Подключить</button>

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


