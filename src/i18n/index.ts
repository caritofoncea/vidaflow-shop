"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { en, type TranslationKeys } from "./en";
import { es } from "./es";
import React from "react";

export type Locale = "en" | "es";
export type Country = "GT" | "US";

const translations: Record<Locale, TranslationKeys> = { en, es };

const WHATSAPP_NUMBERS: Record<Country, string> = {
  GT: "50235684071",
  US: "50235684071",
};

interface I18nContextType {
  locale: Locale;
  country: Country;
  t: TranslationKeys;
  setLocale: (locale: Locale) => void;
  setCountry: (country: Country) => void;
  whatsappNumber: string;
  whatsappLink: (message?: string) => string;
  localePath: (path: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  // Locale is driven by the URL ([lang] segment) for SEO. The provider is
  // remounted per locale (keyed in the layout), so initialLocale is the
  // source of truth — no localStorage/navigator detection for language.
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  // Country is a commerce toggle (pricing/availability), defaulted from the
  // language and remembered in localStorage.
  const [country, setCountryState] = useState<Country>(
    initialLocale === "es" ? "GT" : "US"
  );

  useEffect(() => {
    const savedCountry = localStorage.getItem("vidaflow-country") as Country | null;
    if (savedCountry) {
      setCountryState(savedCountry);
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
  }, []);

  const setCountry = useCallback((c: Country) => {
    setCountryState(c);
    localStorage.setItem("vidaflow-country", c);
  }, []);

  const whatsappNumber = WHATSAPP_NUMBERS[country];

  const whatsappLink = useCallback(
    (message?: string) => {
      const base = `https://wa.me/${whatsappNumber}`;
      return message ? `${base}?text=${encodeURIComponent(message)}` : base;
    },
    [whatsappNumber]
  );

  // Prefix an app path with the current locale (/en, /es) for internal links.
  const localePath = useCallback(
    (path: string) => {
      if (path === "/") return `/${locale}`;
      if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
      return `/${locale}${path}`;
    },
    [locale]
  );

  const value: I18nContextType = {
    locale,
    country,
    t: translations[locale],
    setLocale,
    setCountry,
    whatsappNumber,
    whatsappLink,
    localePath,
  };

  return React.createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
