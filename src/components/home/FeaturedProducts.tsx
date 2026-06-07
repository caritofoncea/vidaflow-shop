"use client";

import { useI18n } from "@/i18n";
import { getVisibleProducts } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";

export default function FeaturedProducts() {
  const { t, locale, country, localePath } = useI18n();

  const featured = useMemo(() => {
    const all = getVisibleProducts(country);
    // Pinned best sellers; fall back to others if a pick is unavailable in the country
    const picks = ["flora-liv", "thermo-t3", "vita-xtra-t", "beauty-in"];
    const result = picks
      .map((slug) => all.find((p) => p.slug === slug))
      .filter(Boolean);
    if (result.length < 4) {
      for (const p of all) {
        if (result.length >= 4) break;
        if (!result.includes(p)) result.push(p);
      }
    }
    return result.slice(0, 4);
  }, [country]);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-700 mb-3">
            {locale === "es" ? "MÁS VENDIDOS" : "BEST SELLERS"}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-3">
            {t.hero.bestSellers}
          </h2>
          <p className="text-base text-stone-500 max-w-2xl mx-auto">
            {t.hero.bestSellersSub}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) =>
            product ? (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ) : null
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href={localePath("/products")}
            className="inline-flex items-center gap-2 px-6 py-3 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors group"
          >
            {locale === "es" ? "Ver todos los productos" : "View all products"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
