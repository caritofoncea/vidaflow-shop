"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useI18n } from "@/i18n";
import {
  getProductBySlug,
  getRelatedProducts,
  formatPrice,
  getPaymentLink,
  categoryMeta,
} from "@/lib/products";
import { getProductImage } from "@/lib/product-images";
import { getProductDetails } from "@/lib/product-details";
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  ExternalLink,
  Star,
  Check,
  Beaker,
  BookOpen,
  CalendarDays,
  Info,
  ClipboardList,
  Barcode,
  Boxes,
  Coffee,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t, locale, country, whatsappLink } = useI18n();
  const product = getProductBySlug(slug);
  const details = getProductDetails(slug);
  const [activeTab, setActiveTab] = useState<"ingredients" | "howToUse" | "details">("ingredients");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-stone-900 mb-4">
            {locale === "es" ? "Producto no encontrado" : "Product not found"}
          </h1>
          <Link href="/products" className="text-emerald-600 hover:underline">
            {t.products.backToProducts}
          </Link>
        </div>
      </div>
    );
  }

  const name = product.name[locale];
  const slogan = details?.slogan[locale];
  const desc = details?.longDescription?.[locale] || product.shortDescription[locale];
  const benefits = product.benefits[locale];
  const price = formatPrice(product, country);
  const payLink = getPaymentLink(product, country);
  const cat = categoryMeta[product.category];
  const related = getRelatedProducts(slug, country, 3);
  const flavor = product.flavor[locale];
  const imageUrl = getProductImage(product.slug, product.category, country);
  const isContents = product.isCombo; // combos list contents instead of ingredients

  const disclaimer =
    locale === "es"
      ? "Estos productos no están destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Consulte con un profesional de la salud antes de comenzar cualquier régimen de suplementos."
      : "These products are not intended to diagnose, treat, cure, or prevent any disease. Consult a healthcare professional before starting any supplement regimen.";

  const tabs = [
    { key: "ingredients" as const, label: isContents ? t.products.whatsInside : t.products.ingredients, icon: Beaker },
    { key: "howToUse" as const, label: t.products.howToUse, icon: BookOpen },
    { key: "details" as const, label: t.products.details, icon: ClipboardList },
  ];

  return (
    <section className="py-6 lg:py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.products.backToProducts}
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image — portrait marketing infographic, shown uncropped */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-stone-100 shadow-lg">
              <Image
                src={imageUrl}
                alt={name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />

              {/* Rating badge */}
              <div className="absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-md border border-stone-100">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-semibold text-stone-700">4.9</span>
              </div>

              {/* Seasonal badge */}
              {product.isSeasonal && product.isSeasonalActive && (
                <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400 shadow-md">
                  <CalendarDays className="w-4 h-4 text-amber-900" />
                  <span className="text-sm font-semibold text-amber-900">
                    {locale === "es" ? "Temporada" : "Seasonal"}
                  </span>
                </div>
              )}

              {/* Country badges */}
              <div className="absolute bottom-5 left-5 px-3 py-1.5 rounded-full bg-white shadow-md border border-stone-100">
                <span className="text-sm text-stone-600 font-medium">
                  {product.countries.includes("GT") && "🇬🇹 Guatemala"}
                  {product.countries.includes("GT") && product.countries.includes("US") && "  ·  "}
                  {product.countries.includes("US") && "🇺🇸 USA"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            {/* Category */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                {cat[locale]}
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-xs text-stone-400 uppercase tracking-wider">
                {product.productLine === "core"
                  ? locale === "es" ? "Sistema Base" : "Base System"
                  : product.productLine === "combo"
                    ? locale === "es" ? "Combo" : "Combo Pack"
                    : locale === "es" ? "Línea Potenciadora" : "Enhancing Line"}
              </span>
            </div>

            {/* Slogan */}
            {slogan && (
              <p className="text-base font-semibold text-emerald-700 mb-1.5">{slogan}</p>
            )}

            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-2">{name}</h1>
            <p className="text-base text-stone-500 mb-4">{flavor}</p>
            <p className="text-stone-600 leading-relaxed mb-5">{desc}</p>

            {/* Benefits — directly below the description */}
            <div className="space-y-2 mb-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-700" />
                  </span>
                  <span className="text-stone-700 text-sm leading-relaxed">{b}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-center flex-wrap gap-3 mb-6">
              <span className="text-3xl font-bold text-stone-900">{price}</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
                {locale === "es" ? "Disponible" : "Available"}
              </span>
              <span className="text-sm text-stone-400">{product.format}</span>
            </div>

            {/* Serving & Format panel — fully readable (no truncation) */}
            {details && (
              <div className="mb-6 rounded-2xl bg-stone-50 border border-stone-100 divide-y divide-stone-100">
                {details.sku && details.sku !== "—" && (
                  <div className="flex items-center gap-3 p-3.5">
                    <Barcode className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs uppercase tracking-wider text-stone-400 w-28 flex-shrink-0">{t.products.sku}</span>
                    <span className="text-sm font-semibold text-stone-800">{details.sku}</span>
                  </div>
                )}
                {details.unitsPerBox != null && (
                  <div className="flex items-center gap-3 p-3.5">
                    <Boxes className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs uppercase tracking-wider text-stone-400 w-28 flex-shrink-0">{t.products.unitsPerBox}</span>
                    <span className="text-sm font-semibold text-stone-800">{details.unitsPerBox}</span>
                  </div>
                )}
                <div className="flex items-start gap-3 p-3.5">
                  <Coffee className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs uppercase tracking-wider text-stone-400 w-28 flex-shrink-0 mt-0.5">{t.products.serving}</span>
                  <span className="text-sm font-semibold text-stone-800 leading-relaxed">{details.servingSize[locale]}</span>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={payLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-full transition-all hover:shadow-xl"
              >
                <ExternalLink className="w-5 h-5" />
                {locale === "es" ? "Comprar Ahora" : "Buy Now"}
              </a>
              <a
                href={whatsappLink(
                  locale === "es" ? `¡Hola! Quiero pedir ${name}.` : `Hi! I want to order ${name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                {t.products.orderWhatsApp}
              </a>
            </div>

            {/* Tabs */}
            <div className="border-t border-stone-100 pt-6">
              <div className="grid grid-cols-3 gap-1 mb-5 bg-stone-100 rounded-2xl p-1">
                {tabs.map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={cn(
                        "inline-flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all",
                        activeTab === tab.key
                          ? "bg-white text-stone-900 shadow-sm"
                          : "text-stone-500 hover:text-stone-700"
                      )}
                    >
                      <TabIcon className="w-3.5 h-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  {activeTab === "ingredients" && (
                    <div className="p-5 rounded-2xl bg-stone-50">
                      <p className="text-stone-700 leading-relaxed text-sm">{product.ingredients}</p>
                    </div>
                  )}

                  {activeTab === "howToUse" && (
                    <div className="space-y-3">
                      {details?.usage && (
                        <div className="p-5 rounded-2xl bg-stone-50">
                          <span className="text-sm font-semibold text-stone-700">{t.products.usage}</span>
                          <p className="text-stone-600 text-sm mt-1 leading-relaxed">{details.usage[locale]}</p>
                        </div>
                      )}
                      {details?.preparation && (
                        <div className="p-5 rounded-2xl bg-stone-50">
                          <span className="text-sm font-semibold text-stone-700">{t.products.preparation}</span>
                          <p className="text-stone-600 text-sm mt-1 leading-relaxed">{details.preparation[locale]}</p>
                        </div>
                      )}
                      {details?.servingSize && (
                        <div className="p-5 rounded-2xl bg-stone-50">
                          <span className="text-sm font-semibold text-stone-700">{t.products.serving}</span>
                          <p className="text-stone-600 text-sm mt-1">{details.servingSize[locale]}</p>
                        </div>
                      )}
                      {!details?.usage && !details?.preparation && (
                        <div className="p-5 rounded-2xl bg-stone-50">
                          <p className="text-stone-600 text-sm">{product.format} · {flavor}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "details" && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        {details?.sku && details.sku !== "—" && (
                          <div className="p-4 rounded-2xl bg-stone-50">
                            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">{t.products.sku}</span>
                            <p className="text-stone-700 text-sm mt-1 font-medium">{details.sku}</p>
                          </div>
                        )}
                        <div className="p-4 rounded-2xl bg-stone-50">
                          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">{locale === "es" ? "Formato" : "Format"}</span>
                          <p className="text-stone-700 text-sm mt-1 font-medium">{product.format}</p>
                        </div>
                        {details?.unitsPerBox != null && (
                          <div className="p-4 rounded-2xl bg-stone-50">
                            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">{t.products.unitsPerBox}</span>
                            <p className="text-stone-700 text-sm mt-1 font-medium">{details.unitsPerBox}</p>
                          </div>
                        )}
                        <div className="p-4 rounded-2xl bg-stone-50">
                          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">{t.products.flavor}</span>
                          <p className="text-stone-700 text-sm mt-1 font-medium">{flavor}</p>
                        </div>
                      </div>
                      {details?.restrictions && (
                        <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                          <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">{t.products.restrictions}</span>
                          <p className="text-amber-800 text-sm mt-1 leading-relaxed">{details.restrictions[locale]}</p>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-amber-700 leading-relaxed">{disclaimer}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">{t.products.relatedProducts}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {related.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
