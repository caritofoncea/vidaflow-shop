import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getVisibleProducts } from "@/lib/products";

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Each path is locale-agnostic ("" = home). Canonical URL points to /en,
  // with reciprocal en/es/x-default hreflang alternates.
  const make = (
    path: string,
    changeFrequency: ChangeFreq,
    priority: number
  ): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}/en${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: `${SITE_URL}/en${path}`,
        es: `${SITE_URL}/es${path}`,
        "x-default": `${SITE_URL}/en${path}`,
      },
    },
  });

  const staticRoutes = [
    make("", "weekly", 1),
    make("/products", "weekly", 0.9),
    make("/about", "monthly", 0.6),
    make("/contact", "monthly", 0.6),
  ];

  const productRoutes = getVisibleProducts().map((p) =>
    make(`/products/${p.slug}`, "weekly", 0.8)
  );

  return [...staticRoutes, ...productRoutes];
}
