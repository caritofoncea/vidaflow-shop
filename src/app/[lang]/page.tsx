import type { Metadata } from "next";
import { staticPageMetadata } from "@/lib/page-meta";
import HeroSection from "@/components/home/HeroSection";
import WellnessQuiz from "@/components/home/WellnessQuiz";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BenefitsSection from "@/components/home/BenefitsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyVidaFlowSection from "@/components/home/WhyVidaFlowSection";
import CountriesSection from "@/components/home/CountriesSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return staticPageMetadata(lang, "home", "/", { absoluteTitle: true });
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WellnessQuiz />
      <FeaturedProducts />
      <BenefitsSection />
      <CategoriesSection />
      <TestimonialsSection />
      <WhyVidaFlowSection />
      <CountriesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
