import { CabinetFeatures, InfoServicesSection, MainblockSection } from "@/components/sections/cabinet";

const strings: Record<string, { title: string; body: string }> = {
  en: { title: "Cabinet", body: "Cabinet our payments platform." },
  ru: { title: "О компании", body: "О нашей платежной платформе." },
  uz: { title: "Kompaniya haqida", body: "To'lov platformamiz haqida." },
};

export default function CabinetPage({ params }: { params: { lang: string } }) {
  const s = strings[params.lang] ?? strings.en;
  return (
    <div className="">
      <MainblockSection />
      <InfoServicesSection />
      <CabinetFeatures />
      {/*<PromoBanner />*/}
      {/*<CabinetBannerSection />*/}
      {/*<AboutInfoSection />*/}
      {/*<CertificationsSection />*/}
      {/*<div className="container-custom">*/}
      {/*  <hr className="border-[#232323]" />*/}
      {/*</div>*/}
      {/*<CertificationsSection />*/}
      {/*<PoliticsSection />*/}
    </div>
  );
}


