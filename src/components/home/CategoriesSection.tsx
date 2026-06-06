"use client";

import { useI18n } from "@/i18n";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Shield,
  Leaf,
  Scale,
  Brain,
  Sun,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

// Each card pairs a goal with a representative catalog-uploads product image.
const categoryData = [
  { key: "detox" as const, icon: Leaf, gradient: "from-lime-500 to-green-600", href: "/products?category=cleansing", image: "/images/products/flora-liv.webp", tint: "from-lime-50 to-emerald-50" },
  { key: "weightManagement" as const, icon: Scale, gradient: "from-rose-500 to-pink-600", href: "/products?category=weight", image: "/images/products/thermo-t3.webp", tint: "from-rose-50 to-pink-50" },
  { key: "antiAge" as const, icon: Sparkles, gradient: "from-violet-500 to-purple-600", href: "/products?category=antiage", image: "/images/products/beauty-in.webp", tint: "from-violet-50 to-fuchsia-50" },
  { key: "immune" as const, icon: Shield, gradient: "from-blue-500 to-cyan-600", href: "/products?category=immune", image: "/images/products/vera-plus.webp", tint: "from-blue-50 to-cyan-50" },
  { key: "mentalPerformance" as const, icon: Brain, gradient: "from-indigo-500 to-blue-600", href: "/products?category=mental", image: "/images/products/on.webp", tint: "from-indigo-50 to-blue-50" },
  { key: "otherSolutions" as const, icon: Sun, gradient: "from-amber-500 to-orange-600", href: "/products?category=energy", image: "/images/products/vita-xtra-t.webp", tint: "from-amber-50 to-orange-50" },
];

export default function CategoriesSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-700 mb-3 uppercase">
            {t.nav.products}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            {t.categories.title}
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            {t.categories.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.map((cat, i) => {
            const Icon = cat.icon;
            const content = t.categories[cat.key];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={cat.href}
                  className="group flex flex-col h-full rounded-3xl bg-white border border-stone-100 overflow-hidden hover:border-stone-200 transition-all duration-300 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1"
                >
                  {/* Image header */}
                  <div className={`relative h-44 bg-gradient-to-br ${cat.tint} overflow-hidden`}>
                    <Image
                      src={cat.image}
                      alt={content.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute top-4 left-4 w-11 h-11 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-semibold text-stone-900 mb-2">
                      {content.title}
                    </h3>
                    <p className="text-stone-500 leading-relaxed mb-4 text-sm flex-1">
                      {content.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-sm group-hover:gap-2 transition-all">
                      {t.categories.learnMore}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
