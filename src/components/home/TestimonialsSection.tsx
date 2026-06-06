"use client";

import { useI18n } from "@/i18n";
import { motion } from "framer-motion";
import { ShieldCheck, MessageCircle, MapPin, HeartHandshake, Clock } from "lucide-react";

const pointIcons = [ShieldCheck, MessageCircle, MapPin, HeartHandshake];

export default function TestimonialsSection() {
  const { t, locale, whatsappLink } = useI18n();

  const waMessage =
    locale === "es"
      ? "¡Hola VidaFlow! Probé sus productos y me gustaría compartir mi experiencia."
      : "Hi VidaFlow! I tried your products and would love to share my experience.";

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold tracking-wide mb-4 uppercase">
            <Clock className="w-4 h-4" />
            {t.testimonials.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Honest trust points instead of invented reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.testimonials.points.map((point, i) => {
            const Icon = pointIcons[i] ?? ShieldCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-3xl bg-white border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-stone-900 mb-1.5">{point.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{point.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Share-your-story CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 font-semibold rounded-full transition-all hover:shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            {t.testimonials.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
