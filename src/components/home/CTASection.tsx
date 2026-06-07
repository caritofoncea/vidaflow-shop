"use client";

import { useI18n } from "@/i18n";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  const { t, locale, whatsappLink, localePath } = useI18n();

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-emerald-800 via-emerald-900 to-stone-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={localePath("/products")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-stone-100 text-stone-900 text-base font-semibold rounded-full transition-all hover:shadow-xl group"
            >
              {t.cta.shopNow}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={whatsappLink(locale === "es" ? "¡Hola VidaFlow! Quiero pedir productos VidaFlow." : "Hi VidaFlow! I want to order VidaFlow products.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-base font-semibold rounded-full transition-all hover:shadow-xl border border-emerald-500"
            >
              <MessageCircle className="w-5 h-5" />
              {t.cta.orderWhatsApp}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
