import { Metadata } from "next";

// import {
//   CardsSection,
//   CasesSection,
//   ChooseUsSection,
//   FaqSection,
//   OurProductsSection,
//   RateCalculatorSection,
//   ResultsSection,
//   SolutionBusinessSection,
// } from "@/components/sections/home";
// import { PaymentSolutionSection } from "@/components/sections/home/payment-solution-section";


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  // const dict = await getDictionary(lang);

  return {
    title: "Madaniy Meros",
    description: `Madaniy Meros - `,
  };
}


export default function Home({ params }: { params: { lang: string; }; }) {
  return (
    <div className="">
      somehitnf
      {/*<CardsSection />*/}
      {/*<SolutionBusinessSection />*/}
      {/*<OurProductsSection />*/}
      {/*<ResultsSection />*/}
      {/*<CasesSection />*/}
      {/*<ChooseUsSection />*/}
      {/*<RateCalculatorSection />*/}
      {/*<PaymentSolutionSection />*/}
      {/*<FaqSection />*/}
    </div>
  );
}



