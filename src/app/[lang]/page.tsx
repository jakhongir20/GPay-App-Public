import {
  CardsSection,
  CasesSection,
  ChooseUsSection,
  FaqSection,
  OurProductsSection,
  RateCalculatorSection,
  ResultsSection,
  SolutionBusinessSection,
} from "@/components/sections/home";
import { PaymentSolutionSection } from "@/components/sections/home/payment-solution-section";


const strings: Record<string, { title: string; body: string; }> = {
  en: { title: "Welcome", body: "This is the public English page." },
  ru: { title: "Добро пожаловать", body: "Это публичная страница на русском." },
  uz: { title: "Xush kelibsiz", body: "Bu ommaviy o'zbekcha sahifa." },
};

export default function Home({ params }: { params: { lang: string; }; }) {
  const s = strings[params.lang] ?? strings.en;
  return (
    <div className="">
      <CardsSection />
      <SolutionBusinessSection />
      <OurProductsSection />
      <ResultsSection />
      <CasesSection />
      <ChooseUsSection />
      <RateCalculatorSection />
      <PaymentSolutionSection />
      <FaqSection />
    </div>
  );
}


