"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n, type Locale, type Country } from "@/i18n";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

const countries: { code: Country; flag: string; label: string }[] = [
  { code: "US", flag: "🇺🇸", label: "United States" },
  { code: "GT", flag: "🇬🇹", label: "Guatemala" },
];

const languages: { code: Locale; flag: string; label: string }[] = [
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇬🇹", label: "Español" },
];

export default function Header() {
  const { t, locale, country, setLocale, setCountry, whatsappLink } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/products", label: t.nav.products },
    { href: "/#benefits", label: t.nav.benefits },
    { href: "/about", label: t.nav.about },
    { href: "/#testimonials", label: t.nav.testimonials },
    { href: "/contact", label: t.nav.contact },
  ];

  const currentCountry = countries.find((c) => c.code === country)!;
  const currentLang = languages.find((l) => l.code === locale)!;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/images/logo-mark.webp"
              alt="VidaFlow logo"
              width={44}
              height={44}
              className="w-10 h-10 rounded-full object-cover ring-1 ring-emerald-100 group-hover:ring-emerald-200 transition-all"
              priority
            />
            <span className="text-xl font-semibold text-stone-900 tracking-tight">
              Vida<span className="text-emerald-700">Flow</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-stone-600 hover:text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Country Selector */}
            <div className="relative">
              <button
                onClick={() => { setCountryOpen(!countryOpen); setLangOpen(false); }}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              >
                <span>{currentCountry.flag}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {countryOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-lg border border-stone-200 py-1 z-50">
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => { setCountry(c.code); setCountryOpen(false); }}
                      className={cn(
                        "w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-emerald-50 transition-colors",
                        country === c.code ? "text-emerald-700 font-medium" : "text-stone-700"
                      )}
                    >
                      <span>{c.flag}</span>
                      <span>{c.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => { setLangOpen(!langOpen); setCountryOpen(false); }}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang.label}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-xl shadow-lg border border-stone-200 py-1 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLocale(l.code); setLangOpen(false); }}
                      className={cn(
                        "w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-emerald-50 transition-colors",
                        locale === l.code ? "text-emerald-700 font-medium" : "text-stone-700"
                      )}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink(locale === "es" ? "¡Hola VidaFlow! Estoy interesada en sus productos de bienestar. ¿Me pueden ayudar a elegir la mejor opción para mí?" : "Hi VidaFlow! I'm interested in your wellness products. Can you help me choose the best option for me?")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-full transition-all hover:shadow-lg hover:shadow-emerald-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">{t.nav.talkWhatsApp}</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-stone-100 flex gap-2">
              {countries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCountry(c.code)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium border transition-colors",
                    country === c.code
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                      : "border-stone-200 text-stone-600"
                  )}
                >
                  <span>{c.flag}</span>
                  <span>{c.label}</span>
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLocale(l.code)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium border transition-colors",
                    locale === l.code
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                      : "border-stone-200 text-stone-600"
                  )}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
            <a
              href={whatsappLink(locale === "es" ? "¡Hola VidaFlow! Estoy interesada en sus productos de bienestar. ¿Me pueden ayudar a elegir la mejor opción para mí?" : "Hi VidaFlow! I'm interested in your wellness products. Can you help me choose the best option for me?")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white text-sm font-semibold rounded-xl mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              {t.nav.talkWhatsApp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
