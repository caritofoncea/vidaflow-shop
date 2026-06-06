"use client";

import { useI18n } from "@/i18n";
import Image from "next/image";
import { Zap, Sprout, Sparkles, Moon, Leaf } from "lucide-react";
import { motion } from "framer-motion";

// Image-led benefit cards. Image is the hero; icon + text support the message.
const cards = [
  { key: "energy" as const, icon: Zap, gradient: "from-amber-400 to-orange-500", image: "/images/benefits/energy.jpg" },
  { key: "digestion" as const, icon: Sprout, gradient: "from-lime-400 to-green-600", image: "/images/benefits/digestion.jpg" },
  { key: "beauty" as const, icon: Sparkles, gradient: "from-violet-400 to-purple-600", image: "/images/benefits/beauty.jpg" },
  { key: "balance" as const, icon: Moon, gradient: "from-blue-400 to-indigo-600", image: "/images/benefits/balance.jpg" },
];

export default function BenefitsSection() {
  const { t, locale } = useI18n();
  const eyebrow = locale === "es" ? "EN QUÉ TE AYUDAMOS" : "WHAT WE HELP WITH";

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-700 mb-3">{eyebrow}</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            {t.benefits.title}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-emerald-200" />
            <Leaf className="w-4 h-4 text-emerald-500" />
            <span className="h-px w-10 bg-emerald-200" />
          </div>
          <p className="text-base text-stone-500 max-w-xl mx-auto">{t.benefits.subtitle}</p>
        </motion.div>

        {/* 2x2 grid on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const content = t.benefits[card.key];
            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-stone-100 hover:border-stone-200 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300"
              >
                {/* Image — primary visual */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={content.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Soft gradient for chip legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  {/* Icon chip */}
                  <div
                    className={`absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg ring-2 ring-white/30`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Supporting text */}
                <div className="p-6 lg:p-7">
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">{content.title}</h3>
                  <p className="text-stone-500 leading-relaxed">{content.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
