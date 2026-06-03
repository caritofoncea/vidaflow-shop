"use client";

import { useI18n } from "@/i18n";
import { motion } from "framer-motion";
import { Heart, FlaskConical, Users, Globe } from "lucide-react";

const valueIcons = [Heart, FlaskConical, Users, Globe];

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <section className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-800 via-emerald-900 to-stone-900 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.about.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-stone-900 mb-6">{t.about.storyTitle}</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-4">{t.about.storyP1}</p>
          <p className="text-lg text-stone-600 leading-relaxed">{t.about.storyP2}</p>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-stone-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-white border border-stone-100"
            >
              <h3 className="text-2xl font-bold text-stone-900 mb-4">{t.about.missionTitle}</h3>
              <p className="text-stone-600 leading-relaxed text-lg">{t.about.mission}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-white border border-stone-100"
            >
              <h3 className="text-2xl font-bold text-stone-900 mb-4">{t.about.visionTitle}</h3>
              <p className="text-stone-600 leading-relaxed text-lg">{t.about.vision}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-stone-900 mb-6">{t.about.philosophyTitle}</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-4">{t.about.philosophyP1}</p>
          <p className="text-lg text-stone-600 leading-relaxed">{t.about.philosophyP2}</p>
        </motion.div>
      </div>

      {/* Values */}
      <div className="bg-stone-50 py-20">
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
                  className="p-8 rounded-3xl bg-white border border-stone-100 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
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
