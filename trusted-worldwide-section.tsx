"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  title: string
  content: string
}

export default function TrustedWorldwideSection() {
  const [windowWidth, setWindowWidth] = useState(0)

  // Track window width for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Nair",
      title: "E-Commerce",
      content:
        "Affordable, fast, and reliable—Incorz helped launch my e-commerce brand in record time.",
    },
    {
      id: 2,
      name: "Arjun Sharma",
      title: "FinTech",
      content:
        "I was impressed with their clear guidance and quick turnaround. Perfect partner for startups like mine",
    },
    {
      id: 3,
      name: "Sneha Patel",
      title: "Fashion Retail",
      content:
        "Thanks to Incorz, I could focus on my business while they handled all compliance smoothly.",
    },
    {
      id: 4,
      name: "Vikram Iyer",
      title: "Healthcare",
      content:
        "Professional, transparent, and supportive—Incorz is the reason my healthcare startup could go global.",
    },
  ]

  // Calculate globe size based on screen width
  const getGlobeSize = () => {
    if (windowWidth < 640) return { width: 500, height: 500 }
    if (windowWidth < 1024) return { width: 600, height: 600 }
    return { width: 800, height: 800 }
  }

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
          <h2 className="text-[#333] text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
            Trusted Worldwide: Serving Across 149+ Countries
          </h2>
          <p className="text-[#555] max-w-3xl mx-auto text-sm sm:text-base">
Real success stories from small business owners to enterprises! You can find our clients' experiences below and discover how Clemta can help you turn your dream business into reality.

          </p>
        </div>

        {/* Background Globe Image with Enhanced Shadow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
   

          {/* Globe image */}
          <div className="relative">
            <Image
              src="/images/globe.png"
              alt="World Globe"
              width={getGlobeSize().width}
              height={getGlobeSize().height}
              className="opacity-40"
              style={{
                filter: "drop-shadow(0 0 20px hex(#ff0d13))",
              }}
            />
          </div>
        </div>

        {/* Testimonials Grid - Responsive Layout */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center lg:items-stretch">
          {/* Left Purple Box - Responsive */}
          <div className="bg-gradient-to-r from-[#880000] to-[#ff0d13] rounded-2xl flex flex-col justify-between overflow-hidden shadow-lg w-full max-w-[386px] lg:max-w-none lg:w-[386px] h-auto sm:h-[400px] lg:h-[467px]">
            <div className="p-6 sm:p-8 flex-grow flex items-center">
              <p className="text-white text-base sm:text-lg">
               Incorz made setting up my IT consultancy seamless. Their expertise saved me weeks of confusion and paperwork.
              </p>
            </div>

            {/* Name and title at bottom of purple box */}
            <div className="p-6 sm:p-8 pt-0">
              <h3 className="font-medium text-base sm:text-lg text-white">Rohit Mehta</h3>
              <p className="text-xs sm:text-sm text-white/80">IT Services</p>
            </div>
          </div>

          {/* Right Testimonials Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-[386px] sm:max-w-[780px] lg:max-w-none">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm relative border border-gray-100 h-auto sm:h-[200px] lg:h-[220px] w-full"
              >
                <div className="mb-2 sm:mb-4">
                  <h3 className="font-medium text-base sm:text-lg text-gray-800">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.title}</p>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">{testimonial.content}</p>

                {/* Active Indicator Dot - Only on the third card (bottom left) */}
                {index === 2 && (
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
