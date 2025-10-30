// app/[lang]/providers.tsx  (АСИНХРОННЫЙ, загружает сообщения)

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from "react";

export default async function Providers({
                                          lang,
                                          children,
                                        }: {
  lang: string;
  children: ReactNode;
}) {
  const messages =
    (await import(`@/messages/${lang}.json`)).default; // единственный await


  return (
    <NextIntlClientProvider
      locale={lang}
      messages={messages}
      now={new Date()}
      timeZone="Asia/Tashkent"
    >
      {children}
    </NextIntlClientProvider>
  );
}
