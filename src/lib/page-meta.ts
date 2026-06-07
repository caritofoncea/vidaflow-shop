// Localized SEO copy for the static pages. Product pages derive their metadata
// from the product data (name/description per locale) instead.
import type { Metadata } from "next";
import { hreflangAlternates } from "./site";

type Locale = "en" | "es";
type Meta = { title: string; description: string };

export function toLocale(lang: string): Locale {
  return lang === "es" ? "es" : "en";
}

export function ogLocale(locale: Locale): string {
  return locale === "es" ? "es_GT" : "en_US";
}

export const pageMeta: Record<
  "home" | "products" | "about" | "contact",
  Record<Locale, Meta>
> = {
  home: {
    en: {
      title:
        "VidaFlow — Flow Into Your Best Life | Premium Wellness Products",
      description:
        "Premium wellness solutions designed to help you optimize your energy, health, and daily performance. Shop Fuxion-based health products for energy, detox, weight management, and more.",
    },
    es: {
      title:
        "VidaFlow — Fluye Hacia Tu Mejor Vida | Productos de Bienestar Premium",
      description:
        "Soluciones de bienestar premium para optimizar tu energía, salud y rendimiento diario. Descubre productos Fuxion para energía, detox, control de peso y más, en Guatemala y EE. UU.",
    },
  },
  products: {
    en: {
      title: "Shop Wellness Products",
      description:
        "Browse VidaFlow's full range of Fuxion-based wellness products — energy, detox, weight management, immune support, beauty, and more. Available in Guatemala and the US.",
    },
    es: {
      title: "Productos de Bienestar",
      description:
        "Explora toda la gama de productos Fuxion de VidaFlow: energía, detox, control de peso, defensas, belleza y más. Disponibles en Guatemala y Estados Unidos.",
    },
  },
  about: {
    en: {
      title: "About Us — Our Wellness Story",
      description:
        "VidaFlow brings premium Fuxion-based wellness products to Guatemala and the US. Learn about our mission, values, and approach to everyday health and energy.",
    },
    es: {
      title: "Sobre Nosotros — Nuestra Historia de Bienestar",
      description:
        "VidaFlow lleva productos de bienestar Fuxion premium a Guatemala y Estados Unidos. Conoce nuestra misión, valores y nuestra forma de cuidar tu salud y energía cada día.",
    },
  },
  contact: {
    en: {
      title: "Contact Us — Talk to Us on WhatsApp",
      description:
        "Questions about VidaFlow wellness products? Message us on WhatsApp at +502 3568 4071 or email us. We help you choose the right products for your goals.",
    },
    es: {
      title: "Contáctanos — Escríbenos por WhatsApp",
      description:
        "¿Preguntas sobre los productos de bienestar VidaFlow? Escríbenos por WhatsApp al +502 3568 4071 o por correo. Te ayudamos a elegir los productos ideales para tus metas.",
    },
  },
};

// Builds locale-aware metadata (title, description, canonical + hreflang, OG)
// for a static page. Pass the locale-agnostic path ("/", "/products", ...).
export function staticPageMetadata(
  lang: string,
  key: keyof typeof pageMeta,
  path: string,
  opts?: { absoluteTitle?: boolean }
): Metadata {
  const locale = toLocale(lang);
  const m = pageMeta[key][locale];
  return {
    title: opts?.absoluteTitle ? { absolute: m.title } : m.title,
    description: m.description,
    alternates: hreflangAlternates(locale, path),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `/${locale}${path === "/" ? "" : path}`,
      locale: ogLocale(locale),
    },
  };
}
