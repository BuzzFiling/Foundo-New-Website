"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  })
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Track window width for responsive adjustments
  useEffect(() => {
    setIsMounted(true)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const isMobile = windowWidth < 768

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    setFormData({
      fullName: "",
      email: "",
      message: "",
    })

    // Trigger success animation
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 4000) // Hide after 4s
  }

  return (
    <section id="contact" className="w-full py-10 xs:py-12 sm:py-14 md:py-16 bg-[#EA580C]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-white mb-2">
            Reach Out, We&apos;re Here to Help!
          </h2>
          <p className="text-white/80 text-xs xs:text-sm sm:text-base max-w-2xl mx-auto">
            Complete the form, and our team will promptly respond to your inquiry within our working hours!
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#C24505] to-[#EA580C] rounded-lg overflow-hidden flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-8 md:p-10">
            <h3 className="text-xl font-semibold text-white mb-6">Send us a message</h3>

            {/* Success Animation */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mb-6 rounded-lg bg-green-500/90 p-4 text-center text-white font-medium shadow-md"
                >
                  🎉 Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-white mb-1.5 xs:mb-2 text-xs xs:text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-3 xs:px-4 py-2.5 xs:py-3 rounded bg-[#C24505]/70 border border-[#EA580C] text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8A5DE8] text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded bg-[#C24505]/70 border border-[#EA580C] text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8A5DE8]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded bg-[#C24505]/70 border border-[#EA580C] text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8A5DE8]"
                  required
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 
                  text-sm sm:text-base font-medium
                  text-[#EA580C] capitalize bg-white
                  rounded-full px-6 py-3
                  transition-colors hover:bg-[#C24505]"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Image Section */}
          {!isMobile && (
            <div className="w-full md:w-1/2 bg-gradient-to-r from-[#EA580C] to-[#C24505] flex items-center justify-center p-6">
              <div className="relative w-full h-[300px] md:h-full">
                <Image
                  src="https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fc1a8ba111b0fe897ee5f1aa41a3feffa-dUqXkoAJ9SyFVwEbbHFGlggCjRWPKh.png&w=1920&q=75"
                  alt="Support team"
                  fill
                  className="object-contain bg-gradient-to-r from-[#EA580C] to-[#C24505]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
