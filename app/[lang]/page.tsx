import { Metadata } from "next";
import { OurProductsSection } from "@/app/components/sections/home";


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
      {/*<CardsSection />*/}
      {/*<SolutionBusinessSection />*/}
      <OurProductsSection />
      {/*<ResultsSection />*/}
      {/*<CasesSection />*/}
      {/*<ChooseUsSection />*/}
      {/*<RateCalculatorSection />*/}
      {/*<PaymentSolutionSection />*/}
      {/*<FormApplication />*/}
      {/*<FaqSection />*/}
    </div>
  );
}



