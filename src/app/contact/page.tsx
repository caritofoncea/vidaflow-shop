"use client";

import { useState } from "react";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Send,
  CheckCircle,
  Music,
  Play,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  const { t, locale, whatsappLink } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const waMessage =
    locale === "es"
      ? "¡Hola VidaFlow! Estoy interesada en sus productos de bienestar. ¿Me pueden ayudar a elegir la mejor opción para mí?"
      : "Hi VidaFlow! I'm interested in your wellness products. Can you help me choose the best option for me?";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-800 via-emerald-900 to-stone-900 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t.contact.title}
            </h1>
            <p className="text-lg text-emerald-100/80">{t.contact.subtitle}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 p-8 lg:p-10 rounded-3xl bg-white border border-stone-100 shadow-sm"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                <p className="text-xl font-semibold text-stone-900">
                  {t.contact.formSuccess}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      {t.contact.formName}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      {t.contact.formEmail}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {t.contact.formSubject}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-full transition-all hover:shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  {t.contact.formSend}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* WhatsApp */}
            <div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-1">
                {t.contact.whatsAppTitle}
              </h3>
              <p className="text-stone-500 text-sm mb-1">+502 3568 4071</p>
              <p className="text-stone-400 text-xs mb-4">
                {t.contact.whatsAppDescription}
              </p>
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-full transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                {t.contact.emailTitle}
              </h3>
              <p className="text-stone-500 text-sm mb-4">
                {t.contact.emailDescription}
              </p>
              <a
                href="mailto:vidaflow.creations@outlook.com"
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm break-all"
              >
                vidaflow.creations@outlook.com
              </a>
            </div>

            {/* Social */}
            <div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm">
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                {t.contact.followTitle}
              </h3>
              <p className="text-stone-500 text-sm mb-4">
                {t.contact.followDescription}
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.tiktok.com/@vidaflowsoul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center">
                    <Music className="w-4 h-4" />
                  </div>
                  <span>TikTok — @vidaflowsoul</span>
                </a>
                <a
                  href="https://www.youtube.com/@VidaFlowCreations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center">
                    <Play className="w-4 h-4" />
                  </div>
                  <span>YouTube — @VidaFlowCreations</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-stone-400">
                  <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>Facebook & Instagram — {locale === "es" ? "Próximamente" : "Coming Soon"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
