"use client";

import { useI18n } from "@/i18n";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppFAB() {
  const { locale, whatsappLink } = useI18n();

  const message =
    locale === "es"
      ? "¡Hola VidaFlow! Estoy interesada en sus productos de bienestar. ¿Me pueden ayudar a elegir la mejor opción para mí?"
      : "Hi VidaFlow! I'm interested in your wellness products. Can you help me choose the best option for me?";

  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 flex items-center justify-center transition-colors hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}
