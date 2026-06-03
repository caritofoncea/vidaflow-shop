"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n";
import type { ProductData } from "@/lib/products";
import { formatPrice, getPaymentLink, categoryMeta } from "@/lib/products";
import { getProductImage } from "@/lib/product-images";
import {
  ExternalLink,
  CalendarDays,
  Check,
  Package,
} from "lucide-react";

export default function ProductCard({ product }: { product: ProductData }) {
  const { locale, country } = useI18n();
  const cat = categoryMeta[product.category];
  const price = formatPrice(product, country);
  const payLink = getPaymentLink(product, country);
  const name = product.name[locale];
  const desc = product.shortDescription[locale];
  const benefits = product.benefits[locale].slice(0, 2);
  const catLabel = cat[locale];
  const imageUrl = getProductImage(product.slug, product.category);

  return (
    <div className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-stone-100 hover:border-stone-200 transition-all duration-300 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1">
      {/* Image area */}
      <Link href={`/products/${product.slug}`} className="block relative overflow-hidden">
        <div className="relative h-52 sm:h-56 bg-stone-100">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Category badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
            <span className="text-[11px] font-semibold text-stone-700 uppercase tracking-wide">
              {catLabel}
            </span>
          </div>

          {/* Seasonal badge */}
          {product.isSeasonal && product.isSeasonalActive && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/90 backdrop-blur-sm shadow-sm">
              <CalendarDays className="w-3 h-3 text-amber-900" />
              <span className="text-[11px] font-semibold text-amber-900">
                {locale === "es" ? "Temporada" : "Seasonal"}
              </span>
            </div>
          )}

          {/* Combo badge */}
          {product.isCombo && !product.isSeasonal && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-sm shadow-sm">
              <Package className="w-3 h-3 text-white" />
              <span className="text-[11px] font-semibold text-white">
                {locale === "es" ? "Combo" : "Pack"}
              </span>
            </div>
          )}

          {/* Price overlay on image */}
          <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm">
            <span className="text-sm font-bold text-stone-900">{price}</span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Flavor tag */}
        <div className="text-[11px] font-medium text-emerald-600 uppercase tracking-wider mb-1">
          {product.flavor[locale]}
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="text-base font-semibold text-stone-900 mb-1.5 group-hover:text-emerald-700 transition-colors leading-tight">
            {name}
          </h3>
        </Link>

        <p className="text-sm text-stone-500 leading-relaxed mb-3 line-clamp-2 flex-1">
          {desc}
        </p>

        {/* Mini benefits */}
        <div className="space-y-1 mb-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-xs text-stone-500 leading-tight">{b}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-stone-100">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 text-center px-3 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-50 hover:bg-stone-100 rounded-full transition-colors"
          >
            {locale === "es" ? "Ver Detalles" : "View Details"}
          </Link>
          <a
            href={payLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-full transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            {locale === "es" ? "Comprar" : "Buy Now"}
          </a>
        </div>
      </div>
    </div>
  );
}
