"use client";

import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ProductFinder from "@/components/home/ProductFinder";
import BenefitsSection from "@/components/home/BenefitsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyVidaFlowSection from "@/components/home/WhyVidaFlowSection";
import CountriesSection from "@/components/home/CountriesSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <ProductFinder />
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
