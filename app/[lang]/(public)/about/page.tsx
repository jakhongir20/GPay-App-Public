import { CertificationsSection, PromoBanner } from "@/app/components/sections/shared";
import { AboutInfoSection, CabinetBannerSection, PoliticsSection } from "@/app/components/sections/about";
import { AboutTeamSection } from "@/app/components/sections/about/about-team-section";
import { CasesSection } from "@/app/components/sections/home";

const strings: Record<string, { title: string; body: string }> = {
  en: { title: "About", body: "About our payments platform." },
  ru: { title: "О компании", body: "О нашей платежной платформе." },
  uz: { title: "Kompaniya haqida", body: "To'lov platformamiz haqida." },
};


export default function AboutPage({ params }: { params: { lang: string } }) {
  const s = strings[params.lang] ?? strings.en;
  return (
    <div className="">
      <PromoBanner
        title={"Global Pay — ваш партнёр в безопасных онлайн-платежах"}
        description={"Создаём инфраструктуру интернет-эквайринга для бизнеса Узбекистана"}
      />
      <CabinetBannerSection />
      <AboutInfoSection />
      <AboutTeamSection />
      <CertificationsSection title={"Официальные лицензии"} />
      {/*<div className="container-custom">*/}
      {/*  <hr className="border-[#232323]" />*/}
      {/*</div>*/}
      <CertificationsSection title={"Сертификаты и соответствия"} />
      <PoliticsSection />
      <CasesSection sectionClassName={"bg-transparent px-0 xs:px-10 md:px-16"} />
    </div>
  );
}


