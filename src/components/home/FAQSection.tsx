"use client";

import { useState } from "react";
import { useI18n } from "@/i18n";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            {t.faq.title}
          </h2>
          <p className="text-lg text-stone-500">
            {t.faq.subtitle}
          </p>
        </motion.div>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={cn(
                  "w-full flex items-center justify-between gap-4 p-6 rounded-2xl text-left transition-all",
                  openIndex === i
                    ? "bg-emerald-50 border border-emerald-200"
                    : "bg-stone-50 border border-transparent hover:bg-stone-100"
                )}
              >
                <span className="font-semibold text-stone-900 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 flex-shrink-0 text-stone-400 transition-transform",
                    openIndex === i && "rotate-180 text-emerald-600"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 py-4 text-stone-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
