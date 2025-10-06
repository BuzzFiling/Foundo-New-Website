"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-r from-[#F30C12] to-[#690206]">
      <div className="mx-auto w-[95%] max-w-[1440px] py-5">
        <div className="flex items-center justify-between font-medium gap-5">
          {/* Logo */}
          <a href="/">
            <img
              src="/images/Logo.svg"
              alt="logo"
              className="sm:shrink-0 sm:max-w-full w-[200px] sm:w-[240px]"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center xl:gap-5 3xl:gap-8">
            {["Home","Process","Pricing","Services","About","Contact"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-base sm:text-xl xl:text-lg font-light text-white border-b-2 border-transparent pb-1 hover:border-white/30 first:font-semibold first:border-white/60"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-x-5 sm:gap-x-6">
            <a
              href="tel:+17865749305"
              className="hidden md:block whitespace-nowrap text-white"
            >
              +1 (786) 574-9305
            </a>

            <a
              href="#contact"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center justify-center gap-2 text-sm sm:text-base text-[#F30C12] bg-white rounded-full px-6 py-3"
            >
              <span>Start Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Hamburger */}
            <button
              className="block xl:hidden text-white"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-10 w-10" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-72 max-w-full bg-gradient-to-r from-[#F30C12] to-[#690206] shadow-xl transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="flex justify-between items-center p-5 border-b border-white/20">
  {/* Logo */}
          <a href="/">
            <img
              src="/images/Logo.svg"
              alt="logo"
              className="sm:shrink-0 sm:max-w-full w-[200px] sm:w-[240px]"
            />
          </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="text-white"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <nav className="flex flex-col p-5 gap-4">
              {["Home","Process","Pricing","Services","About","Contact"].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="block rounded-lg px-3 py-2 text-white text-base font-medium hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}

              <a
                href="tel:+17865749305"
                className="block px-3 py-2 text-white/90 hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                +1 (786) 574-9305
              </a>

              <a
                href="#contact"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 text-sm text-[#F30C12] bg-white rounded-full px-6 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Start Your Business</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}