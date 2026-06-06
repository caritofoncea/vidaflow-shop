"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n";
import type { ProductData } from "@/lib/products";
import { formatPrice, getPaymentLink, categoryMeta } from "@/lib/products";
import { getProductImage } from "@/lib/product-images";
import { getProductDetails } from "@/lib/product-details";
import { ExternalLink, CalendarDays, Package } from "lucide-react";

export default function ProductCard({ product }: { product: ProductData }) {
  const { locale, country } = useI18n();
  const cat = categoryMeta[product.category];
  const price = formatPrice(product, country);
  const payLink = getPaymentLink(product, country);
  const name = product.name[locale];
  const catLabel = cat[locale];
  const imageUrl = getProductImage(product.slug, product.category, country);
  const details = getProductDetails(product.slug);
  const slogan = details?.slogan[locale];

  return (
    <div className="group flex flex-col h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-stone-100 hover:border-stone-200 transition-all duration-300 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1">
      {/* Image area — portrait marketing infographic, shown uncropped on white */}
      <Link href={`/products/${product.slug}`} className="block relative">
        <div className="relative aspect-[4/5] bg-white">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />

          {/* Category badge */}
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-white/85 backdrop-blur-sm shadow-sm border border-stone-100">
            <span className="text-[10px] font-semibold text-stone-700 uppercase tracking-wide">
              {catLabel}
            </span>
          </div>

          {/* Seasonal badge */}
          {product.isSeasonal && product.isSeasonalActive && (
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400 shadow-sm">
              <CalendarDays className="w-3 h-3 text-amber-900" />
              <span className="text-[10px] font-semibold text-amber-900">
                {locale === "es" ? "Temporada" : "Seasonal"}
              </span>
            </div>
          )}

          {/* Combo badge */}
          {product.isCombo && !product.isSeasonal && (
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-600 shadow-sm">
              <Package className="w-3 h-3 text-white" />
              <span className="text-[10px] font-semibold text-white">
                {locale === "es" ? "Combo" : "Pack"}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-3 sm:p-5">
        {/* Slogan eyebrow */}
        {slogan && (
          <div className="text-[10px] sm:text-[11px] font-semibold text-emerald-600 leading-snug mb-1 line-clamp-1">
            {slogan}
          </div>
        )}

        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm sm:text-base font-semibold text-stone-900 mb-1 group-hover:text-emerald-700 transition-colors leading-tight line-clamp-2">
            {name}
          </h3>
        </Link>

        <p className="hidden sm:block text-sm text-stone-500 leading-relaxed mb-3 line-clamp-2 flex-1">
          {product.shortDescription[locale]}
        </p>

        {/* Price */}
        <div className="mt-auto pt-2 flex items-baseline gap-1.5">
          <span className="text-base sm:text-lg font-bold text-stone-900">{price}</span>
          <span className="text-[10px] sm:text-xs text-stone-400">{product.format}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 pt-3 mt-2 border-t border-stone-100">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 text-center px-2 py-2.5 text-[11px] sm:text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-50 hover:bg-stone-100 rounded-full transition-colors"
          >
            {locale === "es" ? "Detalles" : "Details"}
          </Link>
          <a
            href={payLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] sm:text-xs font-medium rounded-full transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            {locale === "es" ? "Comprar" : "Buy"}
          </a>
        </div>
      </div>
    </div>
  );
}
