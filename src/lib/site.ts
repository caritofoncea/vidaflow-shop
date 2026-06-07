// Canonical production origin, used for metadataBase, sitemap, and robots.
// Defaults to the current live Vercel URL so it works with no setup.
// When a custom domain is added later, either change the fallback below
// or set NEXT_PUBLIC_SITE_URL in Vercel's Environment Variables.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vidaflow-shop.vercel.app"
).replace(/\/+$/, "");

export const LOCALES = ["en", "es"] as const;
export const DEFAULT_LOCALE = "en";

// Builds canonical + reciprocal hreflang alternates for a locale-agnostic path.
// Pass the path WITHOUT the locale prefix, e.g. "/products" or "" for home.
// Returned paths are relative; metadataBase resolves them to absolute URLs.
export function hreflangAlternates(lang: string, path: string) {
  const clean = path === "/" ? "" : path;
  return {
    canonical: `/${lang}${clean}`,
    languages: {
      en: `/en${clean}`,
      es: `/es${clean}`,
      "x-default": `/en${clean}`,
    },
  };
}
