import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VidaFlow — Flow Into Your Best Life | Premium Wellness Products",
    template: "%s | VidaFlow",
  },
  description:
    "Premium wellness solutions designed to help you optimize your energy, health, and daily performance. Shop Fuxion-based health products for energy, detox, weight management, and more.",
  keywords: [
    "wellness",
    "health products",
    "Fuxion",
    "energy supplements",
    "detox",
    "weight management",
    "immune support",
    "VidaFlow",
  ],
  openGraph: {
    title: "VidaFlow — Flow Into Your Best Life",
    description:
      "Premium wellness solutions designed to help you optimize your energy, health, and daily performance.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_GT",
    siteName: "VidaFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "VidaFlow — Flow Into Your Best Life",
    description:
      "Premium wellness solutions for energy, health, and daily performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
