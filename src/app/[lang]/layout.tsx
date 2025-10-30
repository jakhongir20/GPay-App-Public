import type { Metadata } from "next";
import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";

export const metadata: Metadata = {
  title: "GS Public",
  description: "Localized pages",
};

export default function LangLayout({
                                     children,
                                     params,
                                   }: Readonly<{ children: React.ReactNode; params: { lang: string; }; }>) {
  const { lang } = params;
  return (
    <div className="min-h-screen bg-body-bg text-text-primary">
      <Header />
      <main className="" data-lang={lang}>
        {children}
      </main>
      <Footer />
    </div>
  );
}


