"use client";

import { useI18n } from "@/i18n";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const available = [
  { code: "GT", flag: "🇬🇹", nameKey: "guatemala" as const },
  { code: "US", flag: "🇺🇸", nameKey: "unitedStates" as const },
];

const comingSoon = [
  { code: "MX", flag: "🇲🇽", nameKey: "mexico" as const },
  { code: "CO", flag: "🇨🇴", nameKey: "colombia" as const },
  { code: "ES", flag: "🇪🇸", nameKey: "spain" as const },
  { code: "CL", flag: "🇨🇱", nameKey: "chile" as const },
];

export default function CountriesSection() {
  const { t, localePath } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span>{t.countries.available}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            {t.countries.title}
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            {t.countries.subtitle}
          </p>
        </motion.div>

        {/* Available now */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {available.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-white border-2 border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-xl hover:shadow-emerald-100/50 text-center"
            >
              <span className="text-6xl mb-4 block">{c.flag}</span>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">
                {t.countries[c.nameKey]}
              </h3>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-4">
                {t.countries.available}
              </span>
              <div>
                <a
                  href={localePath("/products")}
                  className="inline-flex items-center gap-1 text-emerald-700 font-medium group-hover:gap-2 transition-all"
                >
                  {t.countries.shopNow}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {comingSoon.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-stone-200 text-center opacity-70"
            >
              <span className="text-3xl mb-2 block">{c.flag}</span>
              <h4 className="text-sm font-semibold text-stone-700 mb-1">
                {t.countries[c.nameKey]}
              </h4>
              <span className="text-xs text-stone-400 font-medium">
                {t.countries.comingSoon}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
