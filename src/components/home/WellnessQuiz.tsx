"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Per-goal visual accent + matching products deep-link (locale-independent).
const meta: Record<string, { gradient: string; href: string }> = {
  energy: { gradient: "from-amber-400 to-orange-500", href: "/products?category=energy" },
  digestion: { gradient: "from-lime-400 to-green-600", href: "/products?category=cleansing" },
  weight: { gradient: "from-rose-400 to-pink-600", href: "/products?category=weight" },
  beauty: { gradient: "from-violet-400 to-purple-600", href: "/products?category=antiage" },
  stress: { gradient: "from-blue-400 to-indigo-600", href: "/products?category=mental" },
};

export default function WellnessQuiz() {
  const { t, locale, whatsappLink } = useI18n();
  const [selected, setSelected] = useState<string | null>(null);

  const options = t.quiz.options;
  const current = options.find((o) => o.key === selected);

  const waMessage = current
    ? locale === "es"
      ? `¡Hola VidaFlow! Seleccioné ${current.label} y me gustaría recibir recomendaciones de productos personalizadas.`
      : `Hi VidaFlow! I selected ${current.label} and would like personalized product recommendations.`
    : "";

  return (
    <section id="finder" className="py-16 lg:py-24 bg-[#FBF9F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4" />
            {locale === "es" ? "Quiz de bienestar" : "Wellness Quiz"}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-3">
            {t.quiz.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-500 max-w-xl mx-auto">
            {t.quiz.subtitle}
          </p>
        </motion.div>

        {/* Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {options.map((o) => {
            const m = meta[o.key];
            const active = selected === o.key;
            return (
              <motion.button
                key={o.key}
                onClick={() => setSelected(o.key)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                aria-pressed={active}
                className={cn(
                  "flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border min-h-[108px] transition-colors duration-200 last:odd:col-span-2 sm:last:odd:col-span-1",
                  active
                    ? `bg-gradient-to-br ${m.gradient} text-white border-transparent shadow-lg`
                    : "bg-white border-stone-200 text-stone-700 hover:border-stone-300 hover:shadow-md"
                )}
              >
                <span className="text-3xl leading-none" aria-hidden>
                  {o.emoji}
                </span>
                <span className="text-sm font-semibold leading-tight text-center">
                  {o.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Recommendation — remounts per selection so the enter animation replays */}
        {current && (
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-6 rounded-3xl bg-white border border-emerald-100 shadow-xl shadow-emerald-100/40 p-6 sm:p-8 text-center"
            >
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-emerald-700 mb-2">
                <Sparkles className="w-4 h-4" />
                {t.quiz.recommendedPrefix}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-1.5">
                {current.routine}
              </h3>
              <p className="text-stone-500 text-sm mb-6">
                <span className="mr-1" aria-hidden>{current.emoji}</span>
                {current.label}
              </p>

              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-emerald-600/20"
              >
                <MessageCircle className="w-5 h-5" />
                {t.quiz.cta}
              </a>

              <div className="mt-4">
                <Link
                  href={meta[current.key].href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors group"
                >
                  {t.quiz.browse}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
        )}
      </div>
    </section>
  );
}
