import { CertificationsSection, PromoBanner } from "@/app/components/sections/shared";
import { AboutInfoSection, CabinetBannerSection, PoliticsSection } from "@/app/components/sections/about";

const strings: Record<string, { title: string; body: string }> = {
  en: { title: "About", body: "About our payments platform." },
  ru: { title: "О компании", body: "О нашей платежной платформе." },
  uz: { title: "Kompaniya haqida", body: "To'lov platformamiz haqida." },
};

export default function AboutPage({ params }: { params: { lang: string } }) {
  const s = strings[params.lang] ?? strings.en;
  return (
    <div className="">
      <PromoBanner />
      <CabinetBannerSection />
      <AboutInfoSection />
      <CertificationsSection />
      <div className="container-custom">
        <hr className="border-[#232323]" />
      </div>
      <CertificationsSection />
      <PoliticsSection />
    </div>
  );
}


