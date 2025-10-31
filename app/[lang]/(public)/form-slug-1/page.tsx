import { AboutCompanyStep } from "@/app/components/sections/form-application";
import { FormAsideSteps } from "@/app/components/sections/form-application/form-aside-steps";
import { FormLeftBanner } from "@/app/components/sections/form-application/form-left-banner";

export default function FormSlug1() {
  return (
    <section className="section-padding py-16">
      <div className="container-custom">
        <section className="section-content bg-transparent !p-0">
          <div className={"grid md:grid-cols-[328px_1fr_284px] gap-y-8 gap-x-3"}>
            <FormAsideSteps />
            <AboutCompanyStep />
            <FormLeftBanner />
          </div>
        </section>
      </div>
    </section>
  );
}
