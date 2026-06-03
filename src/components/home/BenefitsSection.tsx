"use client";

import { useI18n } from "@/i18n";
import {
  Zap,
  Heart,
  Scale,
  Shield,
  Brain,
  Clock,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

const icons = [Zap, Heart, Scale, Shield, Brain, Clock];

// Brand-aligned circular icon gradients: forest green, sage, teal + soft gold accents
const iconGradients = [
  "from-amber-400 to-amber-600",      // More Energy — soft gold
  "from-emerald-400 to-emerald-600",  // Better Digestion — sage green
  "from-teal-400 to-teal-600",        // Weight Management — teal
  "from-emerald-600 to-emerald-800",  // Immune Support — deep forest
  "from-lime-400 to-green-600",       // Mental Clarity — fresh green
  "from-amber-300 to-yellow-500",     // Healthy Aging — gold
];

export default function BenefitsSection() {
  const { t, locale } = useI18n();

  const eyebrow = locale === "es" ? "EN QUÉ TE AYUDAMOS" : "WHAT WE HELP WITH";

  const benefits = [
    t.benefits.energy,
    t.benefits.digestion,
    t.benefits.weight,
    t.benefits.immune,
    t.benefits.clarity,
    t.benefits.aging,
  ];

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
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-700 mb-3">
            {eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            {t.benefits.title}
          </h2>
          {/* Leaf divider */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-emerald-200" />
            <Leaf className="w-4 h-4 text-emerald-500" />
            <span className="h-px w-10 bg-emerald-200" />
          </div>
          <p className="text-base text-stone-500 max-w-xl mx-auto">
            {t.benefits.subtitle}
          </p>
        </motion.div>

        {/* Cards — smaller, tighter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-stone-100 hover:border-emerald-200 bg-white hover:bg-emerald-50/30 transition-all duration-300 hover:shadow-md hover:shadow-emerald-100/50 text-center sm:text-left"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${iconGradients[i]} flex items-center justify-center mb-4 shadow-sm shadow-emerald-200/50 group-hover:scale-110 transition-transform mx-auto sm:mx-0`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
