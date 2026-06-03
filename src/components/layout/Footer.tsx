"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";
import { MessageCircle, Mail, Globe, Heart, Play, Music } from "lucide-react";

export default function Footer() {
  const { t, locale, whatsappLink } = useI18n();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-semibold text-white tracking-tight">
                Vida<span className="text-emerald-400">Flow</span>
              </span>
            </Link>
            <p className="text-sm text-stone-400 mb-6">{t.footer.tagline}</p>
            <div className="flex gap-3">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@vidaflowsoul"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-emerald-600 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <Music className="w-4 h-4" />
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@VidaFlowCreations"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-emerald-600 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Play className="w-4 h-4" />
              </a>
              {/* WhatsApp */}
              <a
                href={whatsappLink(
                  locale === "es"
                    ? "¡Hola VidaFlow! Estoy interesada en sus productos de bienestar. ¿Me pueden ayudar a elegir la mejor opción para mí?"
                    : "Hi VidaFlow! I'm interested in your wellness products. Can you help me choose the best option for me?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-emerald-600 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            {/* Coming soon socials */}
            <p className="text-xs text-stone-600 mt-3">
              Facebook & Instagram — {locale === "es" ? "Próximamente" : "Coming Soon"}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-emerald-400 transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/products" className="text-sm hover:text-emerald-400 transition-colors">{t.nav.products}</Link></li>
              <li><Link href="/about" className="text-sm hover:text-emerald-400 transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-emerald-400 transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.support}</h3>
            <ul className="space-y-3">
              <li><Link href="/#faq" className="text-sm hover:text-emerald-400 transition-colors">{t.footer.faqLink}</Link></li>
              <li><a href="#" className="text-sm hover:text-emerald-400 transition-colors">{t.footer.shippingPolicy}</a></li>
              <li><a href="#" className="text-sm hover:text-emerald-400 transition-colors">{t.footer.returnPolicy}</a></li>
              <li><a href="#" className="text-sm hover:text-emerald-400 transition-colors">{t.footer.privacyPolicy}</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.connect}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href="mailto:vidaflow.creations@outlook.com" className="text-sm hover:text-emerald-400 transition-colors">
                  vidaflow.creations@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <a
                  href={whatsappLink(
                    locale === "es"
                      ? "¡Hola VidaFlow! Estoy interesada en sus productos de bienestar."
                      : "Hi VidaFlow! I'm interested in your wellness products."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-emerald-400 transition-colors"
                >
                  +502 3568 4071
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Music className="w-4 h-4 text-emerald-400" />
                <a href="https://www.tiktok.com/@vidaflowsoul" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-emerald-400 transition-colors">
                  @vidaflowsoul
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Play className="w-4 h-4 text-emerald-400" />
                <a href="https://www.youtube.com/@VidaFlowCreations" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-emerald-400 transition-colors">
                  @VidaFlowCreations
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} VidaFlow. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
