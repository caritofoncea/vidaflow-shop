"use client";

import { I18nProvider, type Locale } from "@/i18n";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFAB from "../ui/WhatsAppFAB";

export default function ClientLayout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  return (
    <I18nProvider initialLocale={lang}>
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
      <WhatsAppFAB />
    </I18nProvider>
  );
}
