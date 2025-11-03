import { Metadata } from "next";
import {
  CardsSection,
  CasesSection,
  ChooseUsSection,
  FaqSection,
  OurProductsSection,
  RateCalculatorSection,
  SolutionBusinessSection,
} from "@/app/components/sections/home";
import { PaymentSolutionSection } from "@/app/components/sections/home/payment-solution-section";
import { FormApplication } from "@/app/components/sections/shared";


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  // const dict = await getDictionary(lang);

  return {
    title: "Global Pay",
    description: `Global Pay - `,
  };
}


export default function Home({ params }: { params: { lang: string; }; }) {
  return (
    <div className="">
      <CardsSection />
      <SolutionBusinessSection />
      <OurProductsSection />
      {/*<ResultsSection />*/}
      <CasesSection />
      <ChooseUsSection title={"Почему нас выбирают"}
                       description={"Нам важно постоянно расширять возможности сервиса"} />
      <RateCalculatorSection />
      <PaymentSolutionSection />
      <FormApplication />
      <FaqSection />
    </div>
  );
}



