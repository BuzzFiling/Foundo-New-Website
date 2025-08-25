"use client"
import { ArrowRight, Star } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#310971] to-[#690fff] mt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center pt-8 pb-4">
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border mt-16">
            <span className="text-sm font-medium text-gray-900">Excellent</span>
            <span className="text-sm font-bold text-gray-900">4.7</span>
            <span className="text-sm text-gray-600">out of 5</span>
            <Star className="w-4 h-4 fill-green-500 text-green-500" />
            <span className="text-sm font-medium text-gray-900">Trustpilot</span>
          </div>
        </div>

        <div className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Start Your U.S{" "}
            <img src="https://flagcdn.com/24x18/us.png" alt="US Flag" className="inline-block w-8 h-6 mx-2" /> Business
            from
            <br />
            India{""}
            <img src="https://flagcdn.com/24x18/in.png" alt="Pakistan Flag" className="inline-block w-8 h-6 mx-2" />{" "}
            Fast & Fully Online
          </h1>

          <p className="text-xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
            Form your LLC, get your EIN, open a business bank account & stay compliant all in
            <br />
            one simple package. Starting at $149 + state fees.
          </p>
         <div className="flex justify-center items-center">
  <button
    onClick={() => window.open("https://app.boostyglobal.com/register", "_blank")}
    className="flex items-center justify-center gap-2 text-sm sm:text-base 
             text-[#5f00ff] capitalize bg-white rounded-full sm:rounded-full  px-6 py-3 "
  >
    <span>Start Your Business</span>
    <ArrowRight className="w-4 h-4" />
  </button>
</div>

        </div>

        <div className="pb-16">
          <div className="max-w-5xl mx-auto">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5eafb51238ec07d5bfa4c45af78be41ec1b80686-EhyTnEEKZKT6VB0f6oHzmX1hBz7fiT.png"
              alt="BuzzFiling Dashboard Interface"
              className="w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </main>
    </div>
  )
}