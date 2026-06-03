"use client";

import { useI18n } from "@/i18n";
import { Gem, Award, HeadphonesIcon, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const icons = [Gem, Award, HeadphonesIcon, ShoppingCart];

export default function WhyVidaFlowSection() {
  const { t } = useI18n();

  const items = [
    t.whyVidaFlow.ingredients,
    t.whyVidaFlow.trusted,
    t.whyVidaFlow.support,
    t.whyVidaFlow.ordering,
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              {t.whyVidaFlow.title}
            </h2>
            <p className="text-lg text-stone-500 mb-10">
              {t.whyVidaFlow.subtitle}
            </p>

            <div className="space-y-6">
              {items.map((item, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-stone-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-emerald-100 to-amber-50" />
              <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_60%)]" />
              <div className="absolute inset-8 rounded-[2rem] border-2 border-dashed border-emerald-200/50 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-4">
                  {items.map((item, i) => {
                    const Icon = icons[i];
                    return (
                      <div
                        key={i}
                        className="w-28 h-28 rounded-2xl bg-white shadow-lg flex flex-col items-center justify-center gap-2 p-3"
                      >
                        <Icon className="w-6 h-6 text-emerald-600" />
                        <span className="text-xs font-medium text-stone-700 text-center leading-tight">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
