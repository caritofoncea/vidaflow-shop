import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["en", "es"] as const;
const DEFAULT_LOCALE = "en";

// Dependency-free locale detection: look at the first Accept-Language tag.
function getLocale(request: NextRequest): string {
  const accept = request.headers.get("accept-language") ?? "";
  const primary = accept.split(",")[0]?.trim().toLowerCase() ?? "";
  return primary.startsWith("es") ? "es" : DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // No locale prefix → redirect to the detected locale, preserving the path.
  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on everything except Next internals and files with an extension
  // (sitemap.xml, robots.txt, favicon.ico, icon.png, /images/*, opengraph-image.*).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
