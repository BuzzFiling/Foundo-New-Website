"use client"

import { useState } from "react"
import { ArrowRight, Menu } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // Full-width, full-bleed gradient lives here
    <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-r from-[#310971] to-[#690fff]">
      {/* Constrain content width inside */}
      <div className="mx-auto w-[95%] max-w-[1440px] py-5">
        <div className="flex items-center justify-between font-medium gap-5">
          <a href="/">
            <img
              src="/images/Logo.svg"
              alt="logo"
              className="sm:shrink-0 sm:max-w-full w-[240px] 2xs:w-auto"
            />
          </a>

          <nav className="hidden xl:flex items-center xl:gap-5 3xl:gap-8">
            <a href="/" className="text-base sm:text-xl xl:text-lg font-semibold text-white border-b-2 border-white/60 pb-1">
              Home
            </a>
            <a href="/#process" className="text-base sm:text-xl xl:text-lg font-light text-white border-b-2 border-transparent pb-1 hover:border-white/30">
              Process
            </a>
            <a href="/#pricing" className="text-base sm:text-xl xl:text-lg font-light text-white border-b-2 border-transparent pb-1 hover:border-white/30">
              Pricing
            </a>
            <a href="/#services" className="text-base sm:text-xl xl:text-lg font-light text-white border-b-2 border-transparent pb-1 hover:border-white/30">
              Services
            </a>
            <a 
            href="/#about"
             className="text-base sm:text-xl xl:text-lg font-light text-white border-b-2 border-transparent pb-1 hover:border-white/30">
              About
            </a>
            <a href="/#contact" className="text-base sm:text-xl xl:text-lg font-light text-white border-b-2 border-transparent pb-1 hover:border-white/30">
              Contact
            </a>
          </nav>

          <div className="flex items-center sm:gap-x-6">
            <a href="tel:+17865749305" className="hidden md:block whitespace-nowrap text-white">
              +1 (786)574-9305
            </a>

            {/* <a
              href="https://app.boostyglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex text-white hover:opacity-80"
            >
              Login
            </a> */}

            <div className="flex items-center gap-x-5">
              <a
                href="https://app.boostyglobal.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm sm:text-base text-[#5f00ff] bg-white rounded-full px-6 py-3"
              >
                <span>Start Your Business</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                className="block xl:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
              >
                <Menu className="h-10 w-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}