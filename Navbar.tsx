"use client"

import { useState } from "react"
import { ArrowRight, Menu } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 py-5 mx-auto w-[95%] max-w-[1440px] z-50 bg-gradient-to-r from-[#310971] to-[#690fff] ">
      <div className="flex items-center justify-between font-medium gap-5 ">
        {/* Logo */}
        <a href="/pk">
          <img
            src="/images/Logo.svg"
            alt="logo"
            className="sm:shrink-0 sm:max-w-full w-[240px] 2xs:w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center xl:gap-5 3xl:gap-8">
          <a
            href="/pk"
            className="text-base sm:text-xl xl:text-lg font-semibold text-white border-b-2 border-primary-600 pb-1 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="/pk/about"
className="text-base sm:text-xl xl:text-lg font-light text-white border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-[#320e6f] hover:text-white"
          >
            About
          </a>
          <a
            href="/pk/rewards"
className="text-base sm:text-xl xl:text-lg font-light text-white border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-[#320e6f] hover:text-white"
          >
            Rewards
          </a>
          <a
            href="/pk/pricing"
className="text-base sm:text-xl xl:text-lg font-light text-white border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-[#320e6f] hover:text-white"
          >
            Pricing
          </a>
          <a
            href="/pk/contact"
className="text-base sm:text-xl xl:text-lg font-light text-white border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-[#320e6f] hover:text-white"
          >
            Contact
          </a>
          <a
            href="/pk/faq"
className="text-base sm:text-xl xl:text-lg font-light text-white border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-[#320e6f] hover:text-white"
          >
            FAQs
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center sm:gap-x-6 ">
          {/* Phone */}
          <a
            href="tel:+18778018006"
            className="hidden md:block whitespace-nowrap text-white"
          >
            +1 (877)801-8006
          </a>

          {/* Login */}
          <a
            href="https://app.boostyglobal.com"
            target="_blank"
            className="hidden sm:flex text-white hover:text-primary-600"
          >
            Login
          </a>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-x-5">
          <a
  href="https://app.boostyglobal.com/register"
  target="_blank"
  className="flex items-center justify-center gap-2 text-sm sm:text-base 
             text-white capitalize bg-[#320e6f] rounded-lg sm:rounded-xl 
             pl-6 pr-3 py-4"
>
  <span>Start Your Business</span>
  <ArrowRight className="w-4 h-4" />
</a>

            {/* Hamburger */}
            <button
              className="block xl:hidden text-primary-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-10 w-10" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
