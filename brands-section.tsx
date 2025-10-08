"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function BrandsSection() {
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

  // Calculate logo size based on screen width
  const getLogoSize = () => {
    if (windowWidth < 480) return 80 // Extra small screens
    if (windowWidth < 640) return 100 // Small screens
    if (windowWidth < 768) return 120 // Medium screens
    return 150 // Large screens
  }

  const brands = [
    {
      name: "Wise",
      logo: "https://cdn.brandfetch.io/idk6fxo1w1/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    {
      name: "FreshBooks",
      logo: "https://cdn.brandfetch.io/idMAvNX8Xu/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    {
      name: "Cleer",
      logo: "https://cdn.brandfetch.io/idxAg10C0L/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    {
      name: "Payoneer",
      logo: "https://cdn.brandfetch.io/idVmyDyyyZ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    {
      name: "OpenPhone",
      logo: "https://cdn.brandfetch.io/id8eCYh_qw/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
  ]

  return (
    <section className="relative w-full py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-r from-[#880000] to-[#ff0d13] flex items-center overflow-hidden border-t-0">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-white text-lg sm:text-xl mb-6 sm:mb-8 md:mb-10">
          Our business partners and cooperating institutions.
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4 xs:gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center p-2">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                width={getLogoSize()}
                height={getLogoSize() * 1.33}
                className="opacity-90 hover:opacity-100 transition-opacity filter brightness-0 invert max-w-[80px] xs:max-w-[100px] sm:max-w-[120px] md:max-w-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
