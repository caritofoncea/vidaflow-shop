"use client";

import { useI18n } from "@/i18n";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const { t } = useI18n();

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-700 mb-3 uppercase">
            ★★★★★ {t.testimonials.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            {t.testimonials.title}
          </h2>
          {/* Product image accents */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {["flora-liv", "beauty-in", "vita-xtra-t", "thermo-t3", "golden-flx"].map((slug) => (
              <div
                key={slug}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-white ring-2 ring-white shadow-md"
              >
                <Image
                  src={`/images/products/${slug}.webp`}
                  alt=""
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-stone-100 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-emerald-200 mb-4" />
              <p className="text-stone-700 leading-relaxed mb-6 text-lg">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {item.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">{item.name}</p>
                    <p className="text-sm text-stone-500">{item.location}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
