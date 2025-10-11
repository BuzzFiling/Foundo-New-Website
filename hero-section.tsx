"use client"
import { ArrowRight, Star } from "lucide-react"

export default function HeroSection() {
  return (
<div className=" bg-gradient-to-r from-[#880000] to-[#ff0d13] flex items-center">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Trustpilot Rating */}
        <div className="flex justify-center pt-6 pb-4">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border mt-8 sm:mt-16">
            <span className="text-sm font-medium text-gray-900">Excellent</span>
            <span className="text-sm font-bold text-gray-900">4.7</span>
            <span className="text-sm text-gray-600">out of 5</span>
            <Star className="w-4 h-4 fill-green-500 text-green-500" />
            <span className="text-sm font-medium text-gray-900">Trustpilot</span>
          </div>
        </div>

        {/* Heading + Subtitle */}
        <div className="text-center py-10 sm:py-16">
          <h1 className="text-6xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight break-words">
            Start Your U.S Business 🚀 <br className="hidden sm:block"/> 
            Fast & Fully Online
          </h1>

          <p className="text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Form your LLC, get your EIN, open a business bank account & stay compliant – 
            all in one simple package. Starting at $249 + state fees.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center">
            <button
              onClick={() => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" }) // smooth scroll
    }
  }}
              className="flex items-center justify-center gap-2 text-base md:text-lg 
                         text-[#ff0d13] bg-white rounded-full px-6 py-3 font-medium shadow-md hover:shadow-lg transition"
            >
              <span>Start Your Business</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Section */}
        <div className="pb-10 sm:pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center px-2">
              <div className="w-full max-w-[900px] aspect-video">
                <iframe
                  className="w-full h-full rounded-lg sm:rounded-xl"
                  src="https://www.youtube.com/embed/bQ5oFpQiIS4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
