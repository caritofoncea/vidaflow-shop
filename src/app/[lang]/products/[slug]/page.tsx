import type { Metadata } from "next";
import { getProductBySlug, getVisibleProducts } from "@/lib/products";
import { getProductImage } from "@/lib/product-images";
import { SITE_URL, hreflangAlternates } from "@/lib/site";
import { toLocale, ogLocale } from "@/lib/page-meta";
import ProductDetailClient from "./ProductDetailClient";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return getVisibleProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = toLocale(lang);
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: { index: false, follow: true },
    };
  }

  const name = product.name[locale];
  const description = product.shortDescription[locale];
  const image = getProductImage(product.slug, product.category, "US");

  return {
    title: name,
    description,
    alternates: hreflangAlternates(locale, `/products/${product.slug}`),
    openGraph: {
      title: `${name} | VidaFlow`,
      description,
      url: `/${locale}/products/${product.slug}`,
      type: "website",
      locale: ogLocale(locale),
      images: image ? [{ url: image, alt: name }] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const locale = toLocale(lang);
  const product = getProductBySlug(slug);

  // Product structured data (rich results). Uses USD pricing as the canonical
  // offer; the page itself still toggles GT/US pricing client-side.
  const productLd = product && {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name[locale],
    description: product.shortDescription[locale],
    image: `${SITE_URL}${getProductImage(product.slug, product.category, "US")}`,
    brand: { "@type": "Brand", name: "VidaFlow" },
    ...(product.priceUS != null && {
      offers: {
        "@type": "Offer",
        price: product.priceUS,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/${locale}/products/${product.slug}`,
      },
    }),
  };

  return (
    <>
      {productLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
        />
      )}
      <ProductDetailClient />
    </>
  );
}
