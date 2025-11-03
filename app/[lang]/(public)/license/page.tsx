import { CertificationsSection, PromoBanner } from "@/app/components/sections/shared";
import { PoliticsSection } from "@/app/components/sections/license/politics-section";

export default function LicensePage() {
  return <div>
    <PromoBanner
      title={"Документы и лицензии"}
      description={"Мы ценим прозрачность и безопасность. Каждый документ здесь — часть нашей ответственности перед вами"}
    />
    <CertificationsSection title={"Официальные лицензии"} />
    <div className="container-custom">
      <hr className="border-[#232323]" />
    </div>
    <CertificationsSection title={"Сертификаты и соответствия"} />
    <div className="container-custom">
      <hr className="border-[#232323]" />
    </div>
    <PoliticsSection />
  </div>;
}
