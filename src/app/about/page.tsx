"use client";

import { useI18n } from "@/i18n";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heart, FlaskConical, Users, Globe, Target, Eye, Leaf, ArrowRight, MessageCircle } from "lucide-react";

const valueIcons = [Heart, FlaskConical, Users, Globe];
const valueGradients = [
  "from-rose-400 to-pink-600",
  "from-emerald-400 to-teal-600",
  "from-amber-400 to-orange-500",
  "from-blue-400 to-cyan-600",
];

const collage = [
  "/images/products/flora-liv.webp",
  "/images/products/beauty-in.webp",
  "/images/products/vita-xtra-t.webp",
];

export default function AboutPage() {
  const { t, locale, whatsappLink } = useI18n();

  return (
    <section className="min-h-screen bg-white">
      {/* Hero — warm, colorful, with product collage */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FBF9F4] via-emerald-50/60 to-amber-50/40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-28 -right-24 w-[480px] h-[480px] rounded-full bg-emerald-100/50 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-amber-100/40 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                <span>{locale === "es" ? "Bienestar con propósito" : "Wellness with purpose"}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-5">
                {t.about.title}
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-7">
                {t.about.storyP1}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/products" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-emerald-700 hover:bg-emerald-800 text-white text-base font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-emerald-700/20 group">
                  {locale === "es" ? "Ver Productos" : "Explore Products"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={whatsappLink(locale === "es" ? "¡Hola VidaFlow! Quiero saber más sobre ustedes." : "Hi VidaFlow! I'd love to learn more about you.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-stone-50 text-stone-800 text-base font-semibold rounded-full border border-stone-200 transition-all hover:shadow-lg">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  {locale === "es" ? "Escríbenos" : "Say Hello"}
                </a>
              </div>
            </motion.div>

            {/* Product collage */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="relative mx-auto max-w-md lg:max-w-none aspect-square w-full">
              <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-emerald-200/40 via-emerald-100/30 to-amber-50/50" />
              <div className="absolute top-0 left-2 w-[60%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white bg-white">
                <Image src={collage[0]} alt="VidaFlow product" fill className="object-contain" sizes="40vw" />
              </div>
              <div className="absolute top-12 right-0 w-[44%] aspect-square rounded-3xl overflow-hidden shadow-xl ring-4 ring-white bg-white">
                <Image src={collage[1]} alt="VidaFlow product" fill className="object-contain" sizes="30vw" />
              </div>
              <div className="absolute bottom-0 right-8 w-[48%] aspect-[5/4] rounded-3xl overflow-hidden shadow-xl ring-4 ring-white bg-white">
                <Image src={collage[2]} alt="VidaFlow product" fill className="object-contain" sizes="34vw" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md">
              <Leaf className="w-5 h-5 text-white" />
            </span>
            <h2 className="text-3xl font-bold text-stone-900">{t.about.storyTitle}</h2>
          </div>
          <p className="text-lg text-stone-600 leading-relaxed mb-4">{t.about.storyP1}</p>
          <p className="text-lg text-stone-600 leading-relaxed">{t.about.storyP2}</p>
        </motion.div>
      </div>

      {/* Mission & Vision — colorful cards */}
      <div className="bg-stone-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative p-10 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white overflow-hidden shadow-lg">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
              <span className="relative w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-white" />
              </span>
              <h3 className="relative text-2xl font-bold mb-4">{t.about.missionTitle}</h3>
              <p className="relative text-emerald-50 leading-relaxed text-lg">{t.about.mission}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative p-10 rounded-3xl bg-white border border-stone-100 overflow-hidden shadow-sm">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-100/40" />
              <span className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-5 shadow-md">
                <Eye className="w-6 h-6 text-white" />
              </span>
              <h3 className="relative text-2xl font-bold text-stone-900 mb-4">{t.about.visionTitle}</h3>
              <p className="relative text-stone-600 leading-relaxed text-lg">{t.about.vision}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-md">
              <Heart className="w-5 h-5 text-white" />
            </span>
            <h2 className="text-3xl font-bold text-stone-900">{t.about.philosophyTitle}</h2>
          </div>
          <p className="text-lg text-stone-600 leading-relaxed mb-4">{t.about.philosophyP1}</p>
          <p className="text-lg text-stone-600 leading-relaxed">{t.about.philosophyP2}</p>
        </motion.div>
      </div>

      {/* Values — colorful icons */}
      <div className="bg-gradient-to-b from-stone-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white border border-stone-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${valueGradients[i]} text-white flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">{value.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
