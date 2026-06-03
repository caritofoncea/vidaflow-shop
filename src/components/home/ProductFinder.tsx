"use client";

import { useI18n } from "@/i18n";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductFinder() {
  const { t } = useI18n();

  return (
    <section id="finder" className="py-16 lg:py-20 bg-[#FBF9F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-900 px-8 py-10 lg:px-12 lg:py-12 text-center"
        >
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-5">
              <Compass className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {t.hero.finderTitle}
            </h2>
            <p className="text-emerald-100/85 max-w-xl mx-auto mb-7 leading-relaxed">
              {t.hero.finderSubtitle}
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-stone-100 text-emerald-800 font-semibold rounded-full transition-all hover:shadow-xl group"
            >
              {t.hero.finderCta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
