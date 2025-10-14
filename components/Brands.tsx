"use client"

import { useState } from "react"

type Logo = {
  src: string
  alt: string
  width?: number
  height?: number
}
type LogoInput = Logo | string

interface BrandLogo {
  src: string
  alt: string
  width?: number
  height?: number
}

interface LogoMarqueeProps {
  logos?: LogoInput[]
  speed?: number
  pauseOnHover?: boolean
  className?: string
  heading?: string
  subheading?: string
  rows?: number
  brandLogo?: BrandLogo
}

const defaultCompanyLogos: LogoInput[] = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
  "https://www.bing.com/th/id/OIP.ReQPqyw_bQ55YhU846rjowAAAA?w=205&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
]

function normalizeLogos(logos: LogoInput[]): Logo[] {
  return logos.map((l) => {
    if (typeof l === "string") {
      try {
        const u = new URL(l)
        const host = u.hostname.replace("www.", "")
        return { src: l, alt: host }
      } catch {
        const name = l.split("/").pop()?.split(".")[0]?.replace(/[-_]/g, " ") || "logo"
        return { src: l, alt: name }
      }
    }
    return l
  })
}

export default function Brands({
  logos = defaultCompanyLogos, // Using defaultCompanyLogos as default value
  speed = 60,
  pauseOnHover = true,
  className = "mt-[-100px]",
  rows = 3,
  brandLogo,
}: LogoMarqueeProps) {
  const items = normalizeLogos(logos)

  const MarqueeRow = ({ delay = 0, reverse = false }: { delay?: number; reverse?: boolean }) => {
    const [isRowPaused, setIsRowPaused] = useState(false)

    return (
      <div
        className="relative flex overflow-hidden "
        onMouseEnter={() => pauseOnHover && setIsRowPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsRowPaused(false)}
      >
        {/* Track A */}
        <div
          className="flex shrink-0 items-center justify-center gap-16 pr-16"
          style={{
            animationName: reverse ? "scroll-reverse" : "scroll",
            animationDuration: `${speed}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: `${delay}s`,
            animationPlayState: isRowPaused ? "paused" : "running",
          }}
        >
          {items.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="group relative flex h-14 w-28 shrink-0 items-center justify-center transition-all duration-300"
            >
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width || 112}
                height={logo.height || 56}
                className="mx-auto block h-auto max-h-14 w-auto max-w-full object-contain opacity-40 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Track B (duplicate for seamless loop) */}
        <div
          className="flex shrink-0 items-center justify-center gap-16 pr-16"
          style={{
            animationName: reverse ? "scroll-reverse" : "scroll",
            animationDuration: `${speed}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: `${delay}s`,
            animationPlayState: isRowPaused ? "paused" : "running",
          }}
          aria-hidden="true"
        >
          {items.map((logo, index) => (
            <div
              key={`logo-duplicate-${index}`}
              className="group relative flex h-14 w-28 shrink-0 items-center justify-center transition-all duration-300"
            >
              <img
                src={logo.src || "/placeholder.svg"}
                alt=""
                width={logo.width || 112}
                height={logo.height || 56}
                className="mx-auto block h-auto max-h-14 w-auto max-w-full object-contain opacity-40 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full  overflow-hidden ${className}`}>
      {/* Header */}
      <div className="mx-auto mb-20 max-w-4xl space-y-5 text-center">
        {brandLogo?.src && (
          <div className="mb-4 flex justify-center">
            <img
              src={brandLogo.src || "/placeholder.svg"}
              alt={brandLogo.alt}
              width={brandLogo.width ?? 140}
              height={brandLogo.height ?? 40}
              className="h-auto w-auto max-h-16 object-contain opacity-90"
              loading="eager"
            />
          </div>
        )}


      </div>

      {/* Marquee Rows */}
      <div className="space-y-8" role="region" aria-label="Company logos">
        {Array.from({ length: rows }).map((_, index) => (
          <MarqueeRow key={`row-${index}`} delay={index * 1.5} reverse={index % 2 !== 0} />
        ))}
      </div>

      {/* Built-in keyframes */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
