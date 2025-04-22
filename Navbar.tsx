"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest("#mobile-menu") && !target.closest("#menu-button")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // Define menu items (same for both desktop and mobile now)
  const menuItems = [
    {
      name: "PLATFORM",
      hasSubmenu: true,
      items: ["LLC Formation", "Tax Registration", "Business Banking", "Registered Agent"],
    },
    {
      name: "PRODUCTS",
      hasSubmenu: true,
      items: ["US Phone Number", "Address Service", "Mail Forwarding", "Virtual Office"],
    },
    { name: "PRICING", hasSubmenu: false },
  ]

  const [openDropdowns, setOpenDropdowns] = useState<number[]>([])

  // Add a function to toggle dropdowns
  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <nav className="relative bg-gradient-to-r from-[#310971] to-[#690fff] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo section */}
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N13R6cxATomMITg6vaUiEKBRAs2rWI.png"
              alt="ncorz logo"
              width={100}
              height={30}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-4 mr-4">
              {/* Main navigation links */}
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-center text-sm font-medium text-white hover:text-white/80"
                  style={{ fontFamily: "Onest, sans-serif" }}
                >
                  {item.name}
                  {item.hasSubmenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              className="rounded-full bg-white px-6 text-sm font-medium hover:bg-white/90"
              style={{ color: "#310971", fontFamily: "Onest, sans-serif" }}
            >
              Get Started Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              id="menu-button"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile sidebar menu - Removed About Us, FAQ, and user section */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-[280px] bg-gradient-to-b from-[#310971] to-[#690fff] shadow-2xl transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "0px" }}
      >
        <div className="flex flex-col h-full">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N13R6cxATomMITg6vaUiEKBRAs2rWI.png"
              alt="ncorz logo"
              width={80}
              height={24}
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Decorative element */}
          <div className="absolute top-20 left-0 w-20 h-20 bg-purple-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-xl"></div>

          {/* Menu items with visual enhancements - Only main items */}
          <div className="px-4 py-6 space-y-1 flex-grow overflow-y-auto">
            {menuItems.map((item, index) => (
              <div key={index} className="mb-2">
                <div
                  className="block text-lg font-medium text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors relative group cursor-pointer"
                  onClick={() => (item.hasSubmenu ? toggleDropdown(index) : null)}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {item.hasSubmenu && (
                      <ChevronDown
                        className={`h-5 w-5 text-white/70 group-hover:text-white transition-transform duration-200 ${
                          openDropdowns.includes(index) ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Subtle highlight indicator */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/0 group-hover:bg-white/70 rounded-r transition-all"></span>
                </div>

                {/* Submenu items if applicable */}
                {item.hasSubmenu && (
                  <div
                    className={`ml-6 mt-1 space-y-1 border-l border-purple-400/30 pl-4 overflow-hidden transition-all duration-300 ${
                      openDropdowns.includes(index) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href="#"
                        className="block text-base text-white/80 hover:text-white py-2 px-3 rounded-md hover:bg-white/5 transition-colors"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button at the bottom */}
          <div className="mt-auto p-4 border-t border-white/10">
            <button className="w-full py-3 px-4 bg-white text-[#310971] font-medium rounded-lg text-center hover:bg-white/90 transition-colors">
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  )
}
