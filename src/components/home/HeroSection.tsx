"use client";

import { useI18n } from "@/i18n";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  MapPin,
  ShieldCheck,
  HandHeart,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t, locale, whatsappLink } = useI18n();

  const waMessage =
    locale === "es"
      ? "¡Hola VidaFlow! Estoy interesada en sus productos de bienestar. ¿Me pueden ayudar a elegir la mejor opción para mí?"
      : "Hi VidaFlow! I'm interested in your wellness products. Can you help me choose the best option for me?";

  const badges = [
    { icon: MapPin, label: t.hero.badgeAvailable },
    { icon: ShieldCheck, label: t.hero.badgeCheckout },
    { icon: HandHeart, label: t.hero.badgeGuidance },
    { icon: MessageCircle, label: t.hero.badgeSupport },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FBF9F4] via-emerald-50/40 to-[#FBF9F4]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-amber-100/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{locale === "es" ? "Bienestar premium con Fuxion" : "Premium wellness, powered by Fuxion"}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-stone-900 leading-[1.08] tracking-tight mb-5">
              {locale === "es" ? (
                <>
                  Bienestar Premium para{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
                    Energía, Equilibrio y Vitalidad
                  </span>
                </>
              ) : (
                <>
                  Premium Wellness for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
                    Energy, Balance &amp; Vitality
                  </span>
                </>
              )}
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {t.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-5">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-emerald-700 hover:bg-emerald-800 text-white text-base font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-emerald-700/20 group"
              >
                {t.hero.shopNow}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#finder"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-stone-50 text-stone-800 text-base font-semibold rounded-full border border-stone-200 transition-all hover:shadow-lg"
              >
                {t.hero.findProducts}
              </Link>
            </div>

            {/* WhatsApp tertiary */}
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors mb-8"
            >
              <MessageCircle className="w-4 h-4" />
              {t.hero.talkWhatsApp}
            </a>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 pt-6 border-t border-stone-200/70">
              {badges.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="flex items-center gap-2.5 text-left">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-emerald-700" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-stone-600 leading-tight">
                      {b.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT — product collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none aspect-square">
              {/* soft backdrop blob */}
              <div className="absolute inset-4 rounded-[3rem] bg-gradient-to-br from-emerald-200/50 via-emerald-100/40 to-amber-50/60" />

              {/* Main image */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 left-2 w-[62%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/15 ring-4 ring-white"
              >
                <Image src="/images/products/flora-liv.webp" alt="Flora Liv wellness drink" fill className="object-cover" priority sizes="40vw" />
              </motion.div>

              {/* Secondary top-right */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-2 w-[42%] aspect-square rounded-3xl overflow-hidden shadow-xl shadow-emerald-900/10 ring-4 ring-white"
              >
                <Image src="/images/products/vita-xtra-t.webp" alt="Vita Xtra T+ antioxidant drink" fill className="object-cover" sizes="30vw" />
              </motion.div>

              {/* Bottom-right */}
              <motion.div
                animate={{ y: [-4, 8, -4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-3 right-6 w-[48%] aspect-[5/4] rounded-3xl overflow-hidden shadow-xl shadow-emerald-900/10 ring-4 ring-white"
              >
                <Image src="/images/products/obalance.webp" alt="Alpha Balance green drink" fill className="object-cover" sizes="34vw" />
              </motion.div>

              {/* Floating chips */}
              <div className="absolute bottom-6 left-0 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-stone-700">
                  {locale === "es" ? "100% Natural" : "100% Natural"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
