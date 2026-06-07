"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  CheckCircle,
  Music,
  Play,
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export default function ContactPage() {
  const { t, locale, whatsappLink } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const waMessage =
    locale === "es"
      ? "¡Hola VidaFlow! Estoy interesada en sus productos de bienestar. ¿Me pueden ayudar a elegir la mejor opción para mí?"
      : "Hi VidaFlow! I'm interested in your wellness products. Can you help me choose the best option for me?";

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Route the message through WhatsApp — VidaFlow's main channel.
    const composed =
      locale === "es"
        ? `¡Hola VidaFlow! Soy ${form.name}.\n\nAsunto: ${form.subject}\n\n${form.message}\n\nMi correo: ${form.email}`
        : `Hi VidaFlow! I'm ${form.name}.\n\nSubject: ${form.subject}\n\n${form.message}\n\nMy email: ${form.email}`;
    window.open(whatsappLink(composed), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  }

  return (
    <section className="min-h-screen bg-stone-50">
      {/* Hero — warm brand visual instead of a flat green block */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FBF9F4] via-emerald-50/60 to-amber-50/40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-28 -right-24 w-[460px] h-[460px] rounded-full bg-emerald-100/50 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-amber-100/40 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mx-auto mb-6 w-20 h-20 rounded-3xl overflow-hidden shadow-lg ring-4 ring-white bg-white">
              <Image src="/images/logo-full.webp" alt="VidaFlow" width={80} height={80} className="object-cover" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
              {t.contact.title}
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">{t.contact.subtitle}</p>
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-emerald-600/20"
            >
              <MessageCircle className="w-5 h-5" />
              {locale === "es" ? "Escríbenos por WhatsApp" : "Message us on WhatsApp"}
            </a>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                <p className="text-xl font-semibold text-stone-900 mb-2">{t.contact.formSuccess}</p>
                <p className="text-sm text-stone-500 max-w-sm">
                  {locale === "es"
                    ? "Abrimos WhatsApp con tu mensaje listo para enviar. Si no se abrió, escríbenos al +502 3568 4071."
                    : "We opened WhatsApp with your message ready to send. If it didn't open, reach us at +502 3568 4071."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-sm text-stone-500 -mt-1">
                  {locale === "es"
                    ? "Completa el formulario y te conectaremos por WhatsApp para responderte rápido."
                    : "Fill out the form and we'll connect on WhatsApp so we can reply quickly."}
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.formName}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.formEmail}</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.formSubject}</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={update("subject")}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.formMessage}</label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={update("message")}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all hover:shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  {locale === "es" ? "Enviar por WhatsApp" : "Send via WhatsApp"}
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
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-white/15 text-white flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{t.contact.whatsAppTitle}</h3>
              <p className="text-emerald-50 text-sm mb-1">+502 3568 4071</p>
              <p className="text-emerald-100/80 text-xs mb-4">{t.contact.whatsAppDescription}</p>
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-700 text-sm font-semibold rounded-full hover:bg-emerald-50 transition-colors"
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
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{t.contact.emailTitle}</h3>
              <p className="text-stone-500 text-sm mb-4">{t.contact.emailDescription}</p>
              <a
                href="mailto:vidaflow.creations@outlook.com"
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm break-all"
              >
                vidaflow.creations@outlook.com
              </a>
            </div>

            {/* Social */}
            <div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm">
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{t.contact.followTitle}</h3>
              <p className="text-stone-500 text-sm mb-4">{t.contact.followDescription}</p>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/vidaflowcreations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <span>Instagram — @vidaflowcreations</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61590530343025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <FacebookIcon className="w-4 h-4" />
                  </div>
                  <span>Facebook — VidaFlow Creations</span>
                </a>
                <a
                  href="https://www.tiktok.com/@vidaflowsoul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center">
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
                  <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center">
                    <Play className="w-4 h-4" />
                  </div>
                  <span>YouTube — @VidaFlowCreations</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
