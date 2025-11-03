import { FormAsideSteps } from "@/app/components/sections/form-application/form-aside-steps";
import { FormLeftBanner } from "@/app/components/sections/form-application/form-left-banner";
import { FinancialStep } from "@/app/components/sections/form-application/financial-step";

export default function FormSlug4Page() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className="section-content bg-transparent !px-0">
          <div className={"grid md:grid-cols-[328px_1fr_284px] gap-y-8 gap-x-3"}>
            <FormAsideSteps step={4} />
            <FinancialStep />
            <FormLeftBanner />
          </div>
        </section>
      </div>
    </section>
  );
}
