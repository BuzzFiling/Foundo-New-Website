"use client"

import HeroSection from "@/hero-section"
import BrandsSection from "@/brands-section"
import LLCFormationSection from "@/llc-formation-section"
import Navbar from "@/Navbar"
import PricingSection from "@/pricing-section"
import ServicesGrid from "@/Services"
import Footer from "@/footer"
import WhyIncorz from "@/why-incorz"
import ContactForm from "@/contact-form"
import AnimatedSection from "@/components/animated-section"
import ScrollToTop from "@/components/scroll-to-top"
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
