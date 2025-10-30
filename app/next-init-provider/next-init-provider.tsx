"use client";

import { ReactNode } from "react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

type Props = {
  messages: string;
  locale: string;
  children: ReactNode;
  now: Date;
  timeZone: string;
};

export default function NextIntlProvider({
                                           messages,
                                           locale,
                                           children,
                                           now,
                                           timeZone,
                                         }: Props) {
  const msg: AbstractIntlMessages = JSON.parse(messages)
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={msg}
      now={now}
      timeZone={timeZone}
    >
      {children}
    </NextIntlClientProvider>
  );
}
