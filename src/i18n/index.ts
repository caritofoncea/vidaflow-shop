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
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [country, setCountryState] = useState<Country>("US");

  useEffect(() => {
    const savedLocale = localStorage.getItem("vidaflow-locale") as Locale | null;
    const savedCountry = localStorage.getItem("vidaflow-country") as Country | null;

    if (savedLocale && translations[savedLocale]) {
      setLocaleState(savedLocale);
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "es") setLocaleState("es");
    }

    if (savedCountry) {
      setCountryState(savedCountry);
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("vidaflow-locale", l);
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

  const value: I18nContextType = {
    locale,
    country,
    t: translations[locale],
    setLocale,
    setCountry,
    whatsappNumber,
    whatsappLink,
  };

  return React.createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
