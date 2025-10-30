import { Metadata } from "next";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import notFound from "./not-found";
import Header from "@/app/components/global/Header";

export const metadata: Metadata = {
  title: "Madaniy Meros",
  description: "Madaniy Meros - Discover the Cultural Heritage of Uzbekistan",
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
    messages = await import("../../messages/uz.json");
  }

  return (
    <NextIntlClientProvider
      messages={messages.default}
      locale={lang}
      now={new Date()}
      timeZone="Asia/Tashkent"
    >
      <Header />
      <main className="flex items-center justify-center flex-col h-full bg-white">{children}</main>
    </NextIntlClientProvider>
  );
}
