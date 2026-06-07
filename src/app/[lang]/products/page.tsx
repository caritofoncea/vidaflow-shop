import type { Metadata } from "next";
import { staticPageMetadata } from "@/lib/page-meta";
import ProductsClient from "./ProductsClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return staticPageMetadata(lang, "products", "/products");
}

export default function ProductsPage() {
  return <ProductsClient />;
}
