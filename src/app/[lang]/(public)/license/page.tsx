import { CertificationsSection, PromoBanner } from "@/components/sections/shared";
import { PoliticsSection } from "@/components/sections/license/politics-section";

export default function LicensePage() {
  return <div>
    <PromoBanner />
    <CertificationsSection />
    <PoliticsSection />
  </div>;
}
