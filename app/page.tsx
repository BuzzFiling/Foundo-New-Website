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
import VideoTestimonials from "@/trusted-worldwide-section"
import TestimonialCards from "@/components/Testimonail"
import ClientLogoMarquee from "@/components/Client"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <HeroSection />

      <BrandsSection />

        <LLCFormationSection />

        <PricingSection />

        <ServicesGrid />

        <WhyIncorz />

        <VideoTestimonials />
        
        {/* <TestimonialCards/>
        
        <ClientLogoMarquee/> */}
                
        <ContactForm/>
        

      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </main>
  )
}
