"use client"

import HeroSection from "@/components/hero-section"
import BrandsSection from "@/components/brands-section"
import LLCFormationSection from "@/components/llc-formation-section"
import Navbar from "@/components/Navbar"
import { PricingSection } from "@/pricing-section"
import ServicesGrid from "@/Services"
import Footer from "@/components/footer"
import WhyIncorz from "@/why-incorz"
import ContactForm from "@/components/contact-form"
import AnimatedSection from "@/ui/animated-section"
import ScrollToTop from "@/ui/scroll-to-top"
import TrustedWorldwideSection from "@/trusted-worldwide-section"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <HeroSection />

      <BrandsSection />

      <AnimatedSection animation="fade-up" delay={200}>
        <LLCFormationSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <PricingSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up">
        <ServicesGrid />
      </AnimatedSection>

      <AnimatedSection animation="zoom-in" delay={100}>
        <WhyIncorz />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <TrustedWorldwideSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <ContactForm />
      </AnimatedSection>

      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </main>
  )
}
