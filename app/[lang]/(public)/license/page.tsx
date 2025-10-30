import { CertificationsSection, PromoBanner } from "@/app/components/sections/shared";
import { PoliticsSection } from "@/app/components/sections/license/politics-section";

export default function LicensePage() {
  return <div>
    <PromoBanner />
    <CertificationsSection />
    <PoliticsSection />
  </div>;
}
