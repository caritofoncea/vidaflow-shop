import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { SITE_URL } from "@/lib/site";
import type { Locale } from "@/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const LOCALES: Locale[] = ["en", "es"];

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VidaFlow — Flow Into Your Best Life | Premium Wellness Products",
    template: "%s | VidaFlow",
  },
  description:
    "Premium wellness solutions designed to help you optimize your energy, health, and daily performance. Shop Fuxion-based health products for energy, detox, weight management, and more.",
  openGraph: {
    type: "website",
    siteName: "VidaFlow",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Organization structured data (same for every locale).
const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VidaFlow",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-full.webp`,
  description:
    "Premium Fuxion-based wellness products for energy, detox, weight management, immune support, and beauty — available in Guatemala and the US.",
  sameAs: [
    "https://www.instagram.com/vidaflowcreations/",
    "https://www.facebook.com/profile.php?id=61590530343025",
    "https://www.tiktok.com/@vidaflowsoul",
    "https://www.youtube.com/@VidaFlowCreations",
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();
  const locale = lang as Locale;

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <ClientLayout key={locale} lang={locale}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
