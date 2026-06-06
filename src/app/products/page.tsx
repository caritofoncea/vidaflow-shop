"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useI18n } from "@/i18n";
import {
  getVisibleProducts,
  getSeasonalProducts,
  categoryMeta,
  categoryGroups,
  type ProductCategory,
} from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";
import {
  Search,
  MessageCircle,
  Droplets,
  Zap,
  Sprout,
  ShieldPlus,
  Scale,
  Sparkles,
  Brain,
  Dumbbell,
  Package,
  X,
  ArrowUpDown,
  CalendarDays,
  LayoutGrid,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  droplets: Droplets,
  zap: Zap,
  sprout: Sprout,
  shieldPlus: ShieldPlus,
  scale: Scale,
  sparkles: Sparkles,
  brain: Brain,
  dumbbell: Dumbbell,
  package: Package,
};

type SortOption = "default" | "price-asc" | "price-desc";

function ProductsPageInner() {
  const { t, locale, country, setCountry, whatsappLink } = useI18n();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [showSeasonal, setShowSeasonal] = useState(false);
  const [sort, setSort] = useState<SortOption>("default");

  // Deep-link support: /products?category=cleansing
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && cat in categoryMeta) {
      setActiveCategory(cat as ProductCategory);
    } else if (cat === "all") {
      setActiveCategory("all");
    }
  }, [searchParams]);

  const allProducts = useMemo(() => getVisibleProducts(country), [country]);
  const seasonalProducts = useMemo(() => getSeasonalProducts(country), [country]);

  // Live count per category for the current country
  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const p of allProducts) c[p.category] = (c[p.category] || 0) + 1;
    return c;
  }, [allProducts]);

  const filtered = useMemo(() => {
    let result = allProducts;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.en.toLowerCase().includes(q) ||
          p.name.es.toLowerCase().includes(q) ||
          p.ingredients.toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.includes(q))
      );
    }

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (showSeasonal) {
      result = result.filter((p) => p.isSeasonal && p.isSeasonalActive);
    }

    if (sort === "price-asc" || sort === "price-desc") {
      result = [...result].sort((a, b) => {
        const pa = country === "GT" ? a.priceGT || 0 : a.priceUS || 0;
        const pb = country === "GT" ? b.priceGT || 0 : b.priceUS || 0;
        return sort === "price-asc" ? pa - pb : pb - pa;
      });
    }

    return result;
  }, [allProducts, search, activeCategory, showSeasonal, sort, country]);

  const hasActiveFilters = activeCategory !== "all" || showSeasonal || search.trim() !== "";

  function clearFilters() {
    setSearch("");
    setActiveCategory("all");
    setShowSeasonal(false);
    setSort("default");
  }

  return (
    <section className="py-8 lg:py-16 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-3">
            {t.products.title}
          </h1>
          <p className="text-base sm:text-lg text-stone-500 max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </motion.div>

        {/* Country buy toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center mb-8"
        >
          <p className="text-xs sm:text-sm text-stone-500 mb-3 text-center px-4">
            {locale === "es"
              ? "Elige dónde quieres comprar para ver productos y precios disponibles"
              : "Choose where you want to buy to see available products and prices"}
          </p>
          <div className="inline-flex p-1 rounded-full bg-white border border-stone-200 shadow-sm">
            <button
              onClick={() => setCountry("GT")}
              className={cn(
                "inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all",
                country === "GT" ? "bg-emerald-600 text-white shadow-sm" : "text-stone-600 hover:bg-stone-50"
              )}
            >
              <span className="text-base">🇬🇹</span>
              {locale === "es" ? "Guatemala" : "Guatemala"}
              <span className="text-xs opacity-80">(Q)</span>
            </button>
            <button
              onClick={() => setCountry("US")}
              className={cn(
                "inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all",
                country === "US" ? "bg-emerald-600 text-white shadow-sm" : "text-stone-600 hover:bg-stone-50"
              )}
            >
              <span className="text-base">🇺🇸</span>
              {locale === "es" ? "EE. UU." : "United States"}
              <span className="text-xs opacity-80">($)</span>
            </button>
          </div>
        </motion.div>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={locale === "es" ? "Buscar productos, ingredientes..." : "Search products, ingredients..."}
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2">
              <X className="w-4 h-4 text-stone-400 hover:text-stone-600" />
            </button>
          )}
        </div>

        {/* ── Category browser (grouped, mobile-first) ── */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
            <h2 className="text-sm font-semibold text-stone-700 uppercase tracking-wider">
              {t.products.exploreByCategory}
            </h2>

            {/* Sort + Seasonal + Clear */}
            <div className="flex items-center gap-2">
              {seasonalProducts.length > 0 && (
                <button
                  onClick={() => setShowSeasonal(!showSeasonal)}
                  className={cn(
                    "inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                    showSeasonal ? "bg-amber-500 text-white" : "bg-white text-stone-500 hover:bg-stone-100 border border-stone-200"
                  )}
                >
                  <CalendarDays className="w-3 h-3" />
                  {locale === "es" ? "Temporada" : "Seasonal"}
                </button>
              )}
              <button
                onClick={() =>
                  setSort(sort === "default" ? "price-asc" : sort === "price-asc" ? "price-desc" : "default")
                }
                className={cn(
                  "inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                  sort !== "default" ? "bg-stone-700 text-white" : "bg-white text-stone-500 hover:bg-stone-100 border border-stone-200"
                )}
              >
                <ArrowUpDown className="w-3 h-3" />
                {sort === "price-asc"
                  ? locale === "es" ? "Precio ↑" : "Price ↑"
                  : sort === "price-desc"
                    ? locale === "es" ? "Precio ↓" : "Price ↓"
                    : locale === "es" ? "Ordenar" : "Sort"}
              </button>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-rose-600 hover:bg-rose-50 border border-rose-200 transition-all"
                >
                  <X className="w-3 h-3" />
                  {locale === "es" ? "Limpiar" : "Clear"}
                </button>
              )}
            </div>
          </div>

          {/* "All products" chip */}
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all mb-5 min-h-[44px]",
              activeCategory === "all"
                ? "bg-stone-900 text-white shadow-md"
                : "bg-white text-stone-700 border border-stone-200 hover:border-stone-300 hover:shadow-sm"
            )}
          >
            <LayoutGrid className="w-4 h-4" />
            {t.products.allProducts}
            <span className={cn("text-xs", activeCategory === "all" ? "text-white/70" : "text-stone-400")}>
              {allProducts.length}
            </span>
          </button>

          {/* Groups — full grid (everything visible, nothing hidden off-screen) */}
          <div className="space-y-6">
            {categoryGroups.map((group) => {
              const groupCats = group.categories.filter((c) => (counts[c] || 0) > 0);
              if (groupCats.length === 0) return null;
              return (
                <div key={group.key}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-widest whitespace-nowrap">
                      {group.label[locale]}
                    </span>
                    <span className="h-px flex-1 bg-stone-200/70" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                    {groupCats.map((catKey) => {
                      const meta = categoryMeta[catKey];
                      const Icon = iconMap[meta.icon];
                      const isActive = activeCategory === catKey;
                      return (
                        <button
                          key={catKey}
                          onClick={() => setActiveCategory(isActive ? "all" : catKey)}
                          className={cn(
                            "group/cat flex items-center gap-3 p-2.5 rounded-2xl text-left transition-all min-h-[60px]",
                            isActive
                              ? `bg-gradient-to-br ${meta.gradient} text-white shadow-lg ring-2 ring-offset-1 ring-stone-200`
                              : "bg-white text-stone-700 border border-stone-200 hover:border-stone-300 hover:shadow-md"
                          )}
                        >
                          <span
                            className={cn(
                              "flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 transition-transform group-hover/cat:scale-105",
                              isActive ? "bg-white/20" : `bg-gradient-to-br ${meta.gradient}`
                            )}
                          >
                            {Icon && <Icon className="w-5 h-5 text-white" />}
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold leading-tight">{meta[locale]}</span>
                            <span className={cn("block text-xs", isActive ? "text-white/75" : "text-stone-400")}>
                              {counts[catKey] || 0} {locale === "es" ? "productos" : "products"}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-stone-400 mb-6 text-center">
          {filtered.length} {locale === "es" ? "productos" : "products"}
          {country === "GT" ? " 🇬🇹" : " 🇺🇸"}
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: Math.min(i * 0.03, 0.3) }}
                  layout
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-stone-400" />
            </div>
            <h3 className="text-lg font-semibold text-stone-700 mb-2">
              {locale === "es" ? "No se encontraron productos" : "No products found"}
            </h3>
            <p className="text-stone-400 mb-4">
              {locale === "es"
                ? "Este producto no está disponible en tu país seleccionado aún."
                : "This product is not available in your selected country yet."}
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
            >
              {locale === "es" ? "Limpiar filtros" : "Clear filters"}
            </button>
          </div>
        )}

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-lg mx-auto p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/50">
            <h3 className="text-xl font-semibold text-stone-900 mb-2">
              {locale === "es" ? "¿Necesitas ayuda?" : "Need help choosing?"}
            </h3>
            <p className="text-stone-500 mb-4 text-sm">
              {locale === "es"
                ? "Nuestro equipo te ayudará a encontrar los productos perfectos para tus metas de bienestar."
                : "Our team will help you find the perfect products for your wellness goals."}
            </p>
            <a
              href={whatsappLink(
                locale === "es"
                  ? "¡Hola! Necesito ayuda para elegir productos VidaFlow."
                  : "Hi! I need help choosing VidaFlow products."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-emerald-600/20"
            >
              <MessageCircle className="w-5 h-5" />
              {t.products.orderWhatsApp}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-stone-50" />}>
      <ProductsPageInner />
    </Suspense>
  );
}
