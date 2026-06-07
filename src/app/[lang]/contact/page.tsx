import type { Metadata } from "next";
import { staticPageMetadata } from "@/lib/page-meta";
import ContactClient from "./ContactClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return staticPageMetadata(lang, "contact", "/contact");
}

export default function ContactPage() {
  return <ContactClient />;
}
