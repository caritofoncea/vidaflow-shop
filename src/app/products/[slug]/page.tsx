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
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  ExternalLink,
  Star,
  Check,
  Beaker,
  ListChecks,
  BookOpen,
  CalendarDays,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t, locale, country, whatsappLink } = useI18n();
  const product = getProductBySlug(slug);
  const [activeTab, setActiveTab] = useState<"benefits" | "ingredients" | "howToUse">("benefits");

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
  const desc = product.shortDescription[locale];
  const benefits = product.benefits[locale];
  const price = formatPrice(product, country);
  const payLink = getPaymentLink(product, country);
  const cat = categoryMeta[product.category];
  const related = getRelatedProducts(slug, country, 3);
  const flavor = product.flavor[locale];
  const imageUrl = getProductImage(product.slug, product.category);

  const disclaimer =
    locale === "es"
      ? "Estos productos no están destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Consulte con un profesional de la salud antes de comenzar cualquier régimen de suplementos."
      : "These products are not intended to diagnose, treat, cure, or prevent any disease. Consult a healthcare professional before starting any supplement regimen.";

  const tabs = [
    { key: "benefits" as const, label: locale === "es" ? "Beneficios" : "Benefits", icon: ListChecks },
    { key: "ingredients" as const, label: locale === "es" ? "Ingredientes" : "Ingredients", icon: Beaker },
    { key: "howToUse" as const, label: locale === "es" ? "Formato" : "Format", icon: BookOpen },
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

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Product Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-stone-100 shadow-lg">
              <Image
                src={imageUrl}
                alt={name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Rating badge */}
              <div className="absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
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
              <div className="absolute bottom-5 left-5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
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
                  ? locale === "es" ? "Sistema Base" : "Core System"
                  : product.productLine === "combo"
                    ? locale === "es" ? "Combo" : "Combo Pack"
                    : locale === "es" ? "Línea Especializada" : "Enhancing Line"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-2">{name}</h1>
            <p className="text-base text-stone-500 mb-4">{flavor}</p>
            <p className="text-stone-600 leading-relaxed mb-6">{desc}</p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-stone-900">{price}</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
                {locale === "es" ? "Disponible" : "Available"}
              </span>
              <span className="text-sm text-stone-400">{product.format}</span>
            </div>

            {/* Benefits */}
            <div className="space-y-2 mb-6">
              {benefits.slice(0, 3).map((b, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-700 text-sm leading-relaxed">{b}</span>
                </div>
              ))}
            </div>

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
                  locale === "es"
                    ? `¡Hola! Quiero pedir ${name}.`
                    : `Hi! I want to order ${name}.`
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
              <div className="flex gap-1 mb-5 bg-stone-100 rounded-2xl p-1">
                {tabs.map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={cn(
                        "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
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
                  {activeTab === "benefits" && (
                    <div className="space-y-2.5">
                      {benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/50">
                          <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-stone-700 text-sm">{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeTab === "ingredients" && (
                    <div className="p-5 rounded-2xl bg-stone-50">
                      <p className="text-stone-700 leading-relaxed text-sm">{product.ingredients}</p>
                    </div>
                  )}
                  {activeTab === "howToUse" && (
                    <div className="space-y-3">
                      <div className="p-5 rounded-2xl bg-stone-50">
                        <span className="text-sm font-semibold text-stone-700">{locale === "es" ? "Formato" : "Format"}</span>
                        <p className="text-stone-600 text-sm mt-1">{product.format}</p>
                      </div>
                      <div className="p-5 rounded-2xl bg-stone-50">
                        <span className="text-sm font-semibold text-stone-700">{locale === "es" ? "Sabor" : "Flavor"}</span>
                        <p className="text-stone-600 text-sm mt-1">{flavor}</p>
                      </div>
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
            <h2 className="text-2xl font-bold text-stone-900 mb-8">
              {t.products.relatedProducts}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
