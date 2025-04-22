"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HeroSection() {
  // Initialize with a large width to prevent mobile view flash on desktop
  const [windowWidth, setWindowWidth] = useState(1200)
  const [isMounted, setIsMounted] = useState(false)

  // Track window width for responsive adjustments
  useEffect(() => {
    setIsMounted(true)

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

  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024
  const isSmallLaptop = windowWidth >= 1024 && windowWidth < 1280
  const isUltraWide = windowWidth >= 1920

  // Get right image style based on screen size
  const getRightImageStyle = () => {
    // Ultra-wide screens
    if (isUltraWide) {
      return {
        width: "600px",
        height: "550px",
        top: "-250px",
        left: "250px",
        zIndex: 10,
      }
    }

    // Default desktop
    if (windowWidth >= 1280) {
      return {
        width: "497px",
        height: "452px",
        top: "-230px",
        left: "190px",
        zIndex: 10,
      }
    }

    // Small laptop
    if (isSmallLaptop) {
      return {
        width: "400px",
        height: "364px",
        top: "-180px",
        left: "120px",
        zIndex: 10,
      }
    }

    // Tablet
    if (isTablet) {
      return {
        width: "320px",
        height: "291px",
        top: "-140px",
        left: "80px",
        zIndex: 10,
      }
    }

    // Mobile (fallback)
    return {
      width: "497px",
      height: "452px",
      top: "-230px",
      left: "190px",
      zIndex: 10,
    }
  }

  // Prevent hydration mismatch by not rendering different content on server vs client
  if (!isMounted) {
    return (
      <section className="relative min-h-[100svh] bg-gradient-to-r from-[#310971] to-[#690fff] flex items-center px-4 sm:px-6 md:px-16 py-10 sm:py-16 md:py-20 overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-6 sm:gap-8 md:gap-10">
          {/* Loading state or desktop-only content */}
          <div className="flex-1 space-y-4 xs:space-y-5 sm:space-y-6 text-center md:text-left w-full">
            {/* User Avatars */}
            <div className="flex -space-x-2 xs:-space-x-3 sm:-space-x-4 mb-2 sm:mb-4 justify-center md:justify-start">
              {/* Avatar placeholders */}
              <div className="w-9 h-9 rounded-full bg-white/20"></div>
              <div className="w-9 h-9 rounded-full bg-white/20"></div>
              <div className="w-9 h-9 rounded-full bg-white/20"></div>
              <div className="w-9 h-9 rounded-full bg-white/20"></div>
            </div>

            {/* Heading placeholder */}
            <div className="h-12 bg-white/20 rounded w-3/4 mx-auto md:mx-0"></div>
            <div className="h-12 bg-white/20 rounded w-2/4 mx-auto md:mx-0"></div>

            {/* Paragraph placeholder */}
            <div className="h-20 bg-white/20 rounded w-full max-w-md mx-auto md:mx-0"></div>

            {/* CTA Button placeholder */}
            <div className="h-10 bg-white/20 rounded-full w-40 mx-auto md:mx-0"></div>
          </div>

          {/* Right content placeholder */}
          <div className="flex-1 hidden md:block h-80"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-[100svh] bg-gradient-to-r from-[#310971] to-[#690fff] flex items-center px-4 sm:px-6 md:px-16 py-10 sm:py-16 md:py-20 overflow-hidden border-b-0">
      {/* Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`
          w-[300px] h-[300px] 
          xs:w-[350px] xs:h-[350px] 
          sm:w-[400px] sm:h-[400px] 
          md:w-[500px] md:h-[500px]
          xl:w-[600px] xl:h-[600px]
          2xl:w-[700px] 2xl:h-[700px]
          bg-[radial-gradient(circle,rgba(172,127,244,0.5)_0%,transparent_70%)] 
          rounded-full blur-3xl z-0
        `}
        />
      </div>

      {/* Content Wrapper */}
      <div
        className={`
        relative z-10 flex flex-col md:flex-row items-center 
        justify-between w-full mx-auto gap-6 sm:gap-8 md:gap-10
        max-w-7xl 2xl:max-w-[1400px]
      `}
      >
        {/* Left Content */}
        <div
          className={`
          flex-1 space-y-4 xs:space-y-5 sm:space-y-6 
          text-center md:text-left w-full
          ${isUltraWide ? "md:w-5/12" : ""}
        `}
        >
          {/* User Avatars */}
          <div className="flex -space-x-2 xs:-space-x-3 sm:-space-x-4 mb-2 sm:mb-4 justify-center md:justify-start">
            <Image
              src="https://randomuser.me/api/portraits/men/20.jpg"
              alt="User Avatar"
              width={48}
              height={48}
              className="w-9 h-9 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-10 md:w-10 rounded-full border-2 border-white"
            />
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User Avatar"
              width={48}
              height={48}
              className="w-9 h-9 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-10 md:w-10 rounded-full border-2 border-white"
            />
            <Image
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User Avatar"
              width={48}
              height={48}
              className="w-9 h-9 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-10 md:w-10 rounded-full border-2 border-white"
            />
            <Image
              src="https://randomuser.me/api/portraits/women/51.jpg"
              alt="User Avatar"
              width={48}
              height={48}
              className="w-9 h-9 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-10 md:w-10 rounded-full border-2 border-white"
            />
          </div>

          {/* Heading */}
          <h1
            className={`
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl 
            ${isUltraWide ? "xl:text-6xl" : ""}
            font-bold text-white leading-tight relative mx-auto md:mx-0 w-fit
          `}
          >
            Start and Run Your <span className="inline xs:hidden">U.S. Business</span>
            <br className="hidden xs:inline" />
            <span className="hidden xs:inline">U.S. Business</span>{" "}
            <span className="inline xs:hidden">Hassle-Free</span>
            <br className="hidden xs:inline" />
            <span className="relative inline-block w-fit">
              <span className="hidden xs:inline">Hassle-Free</span> With Us
            </span>
            {/* Yellow Scribble Image - Centered on mobile, left-aligned on desktop */}
            <Image
              src="https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-kNvfUnSjuEFsQBFLGr5NrFyV9kR9dH.png&w=1920&q=75"
              alt="Scribble"
              width={200}
              height={40}
              className={`absolute -bottom-2 h-auto pointer-events-none 
                w-[150px] xs:w-[180px] sm:w-[180px] md:w-[200px] ${isUltraWide ? "xl:w-[240px]" : ""}
                ${isMobile ? "left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0" : "left-0"}
              `}
            />
          </h1>

          {/* Paragraph */}
          <p
            className={`
            text-white/90 text-xs xs:text-sm sm:text-base md:text-lg ${isUltraWide ? "xl:text-xl" : ""}
            max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md ${isUltraWide ? "xl:max-w-lg" : ""}
            mx-auto md:mx-0
          `}
          >
            Incorz makes launching and managing your U.S. business simple—no matter where you are. We handle the
            complexities so that you can focus on growth.
          </p>

          {/* CTA Button */}
          <button
            className={`
            bg-white text-[#310971] font-medium 
            px-4 xs:px-5 sm:px-6 ${isUltraWide ? "xl:px-8" : ""}
            py-2 xs:py-2.5 sm:py-3 ${isUltraWide ? "xl:py-4" : ""}
            rounded-full shadow-md hover:bg-gray-100 transition 
            text-xs xs:text-sm sm:text-base ${isUltraWide ? "xl:text-lg" : ""}
            mx-auto md:mx-0 block md:inline-block
          `}
          >
            Get Started Now →
          </button>
        </div>

        {/* Creative Mobile Image - Only visible on mobile */}
        {isMobile && (
          <div className="relative w-full h-[380px] xs:h-[420px] sm:h-[440px] mt-4 xs:mt-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[260px] xs:w-[280px] sm:w-[300px] h-[260px] xs:h-[280px] sm:h-[300px] bg-[#41159e] rounded-full opacity-30 absolute" />
            </div>

            {/* Main Creative Image - LLC Formation Illustration */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] xs:w-[300px] sm:w-[320px] h-[280px] xs:w-[300px] sm:w-[320px] z-10">
              <Image
                src="https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2F2T-QPXBkS-SRwM-YdCRmfw__1_-removebg-preview-yfqS0pe0cW8sAg1Bm5IGlMlLR9OwPE.png&w=1920&q=75"
                alt="Business Formation Illustration"
                width={320}
                height={320}
                className="object-contain"
              />

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <span className="inline-block px-3 py-1 bg-[#41159e]/70 text-white text-xs rounded-full backdrop-blur-sm">
                  Form Your LLC Today
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Right Content - Visible on tablet and above with responsive sizing */}
        {!isMobile && (
          <div
            className={`
            flex-1 relative flex justify-center items-center 
            mt-8 sm:mt-10 md:mt-0 h-[200px] xs:h-[250px] sm:h-[350px] md:h-auto w-full
            ${isUltraWide ? "md:w-7/12" : ""}
          `}
          >
            {/* Decorative Scribble - Only visible on desktop */}
            <Image
              src="https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-nYiiYZjWDMIkJvgnEdUEQwKDBoMjZd.png&w=640&q=75"
              alt="Decorative Scribble"
              width={803}
              height={806}
              style={{
                position: "absolute",
                top: isUltraWide ? "-600px" : "-500px",
                left: isUltraWide ? "-900px" : "-800px",
                transform: "rotate(15deg)",
                zIndex: -20,
              }}
              className="pointer-events-none"
            />

            {/* Main image with responsive sizing */}
            <div className="absolute" style={getRightImageStyle()}>
              <Image
                src="https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2F2T-QPXBkS-SRwM-YdCRmfw__1_-removebg-preview-yfqS0pe0cW8sAg1Bm5IGlMlLR9OwPE.png&w=1920&q=75"
                alt="Business Formation Illustration"
                fill
                className="rounded-xl object-contain"
                sizes={`
                  (min-width: 1920px) 600px,
                  (min-width: 1280px) 497px,
                  (min-width: 1024px) 400px,
                  (min-width: 768px) 320px,
                  100vw
                `}
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
