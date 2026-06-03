"use client";

import { useI18n } from "@/i18n";
import Link from "next/link";
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

const categoryData = [
  { key: "antiAge" as const, icon: Sparkles, gradient: "from-rose-500 to-pink-600" },
  { key: "immune" as const, icon: Shield, gradient: "from-blue-500 to-cyan-600" },
  { key: "detox" as const, icon: Leaf, gradient: "from-lime-500 to-green-600" },
  { key: "weightManagement" as const, icon: Scale, gradient: "from-emerald-500 to-teal-600" },
  { key: "mentalPerformance" as const, icon: Brain, gradient: "from-violet-500 to-purple-600" },
  { key: "otherSolutions" as const, icon: Sun, gradient: "from-amber-500 to-orange-600" },
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
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href="/products"
                  className="group block p-8 rounded-3xl bg-white border border-stone-100 hover:border-stone-200 transition-all duration-300 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">
                    {content.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed mb-4">
                    {content.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-medium text-sm group-hover:gap-2 transition-all">
                    {t.categories.learnMore}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
