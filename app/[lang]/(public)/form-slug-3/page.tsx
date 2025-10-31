import { FormAsideSteps } from "@/app/components/sections/form-application/form-aside-steps";
import { FormLeftBanner } from "@/app/components/sections/form-application/form-left-banner";
import { AboutProjectStep } from "@/app/components/sections/form-application/about-project-step";

export default function FormSlug3Page() {
  return (
    <section className="section-padding py-16">
      <div className="container-custom">
        <section className="section-content bg-transparent !p-0">
          <div className={"grid md:grid-cols-[328px_1fr_284px] gap-y-8 gap-x-3"}>
            <FormAsideSteps step={3} />
            <AboutProjectStep />
            <FormLeftBanner />
          </div>
        </section>
      </div>
    </section>
  );
}
