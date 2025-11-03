import { ProcessConnectSection } from "@/app/components/sections/cabinet/process-connect-section";

const strings: Record<string, { title: string; body: string }> = {
  en: { title: "Cabinet", body: "Cabinet our payments platform." },
  ru: { title: "О компании", body: "О нашей платежной платформе." },
  uz: { title: "Kompaniya haqida", body: "To'lov platformamiz haqida." },
};

export default function CabinetPage({ params }: { params: { lang: string } }) {
  const s = strings[params.lang] ?? strings.en;
  return (
    <div className="">
      {/*<MainblockSection />*/}
      {/*<InfoServicesSection />*/}
      {/*<CabinetFeatures />*/}
      {/*<GuidePaymentSection />*/}
      {/*<ChooseUsSection*/}
      {/*  title={"Преимущества в сравнении"}*/}
      {/*  footerContent={false}*/}
      {/*  description={"Нам важно постоянно расширять возможности сервиса"}*/}
      {/*/>*/}
      {/*<AdvWorkSection />*/}
      <ProcessConnectSection />
      {/*<FormApplication />*/}
    </div>
  );
}


