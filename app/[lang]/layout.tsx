import { Metadata } from "next";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import notFound from "./not-found";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer";
import { QueryProvider } from "@/app/providers/query-provider";

export const metadata: Metadata = {
  title: "Global Pay",
  description: "Global Pay - Discover the Cultural Heritage of Uzbekistan",
};

interface Props {
  children: ReactNode;
  params: { lang: string; };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = params;
  if (!lang) {
    notFound();
  }

  let messages;
  try {
    messages = await import(`../../messages/${lang}.json`);
  } catch {
    // Fallback to default locale (ru) if the requested locale file doesn't exist
    messages = await import("../../messages/ru.json");
  }

  return (
    <QueryProvider>
      <NextIntlClientProvider
        messages={messages.default}
        locale={lang}
        now={new Date()}
        timeZone="Asia/Tashkent"
      >
        <Header />
        <main className="">{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </QueryProvider>
  );
}
