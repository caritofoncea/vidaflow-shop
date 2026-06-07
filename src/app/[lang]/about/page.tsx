import type { Metadata } from "next";
import { staticPageMetadata } from "@/lib/page-meta";
import AboutClient from "./AboutClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return staticPageMetadata(lang, "about", "/about");
}

export default function AboutPage() {
  return <AboutClient />;
}
