"use client"

import * as React from "react"

type Logo = { id: string | number; name: string; url: string }

export default function ClientLogoMarquee() {
  const fallbackUrl = "https://www.leegal.co/images/Solvagence-logo.png"

  const logos: Logo[] = [
    { id: 1, name: "Solvagence", url: "https://www.leegal.co/images/Solvagence-logo.png" },
    { id: 2, name: "Future Jobhub", url: "https://www.leegal.co/images/FutureJobHub-logo.png" },
    { id: 3, name: "Cognisol", url: "https://www.leegal.co/images/Cognisol-logo.png" },
    { id: 4, name: "Emomatrix", url: "https://www.leegal.co/images/Emomatrix-logo.png" },
    { id: 5, name: "Kivavee Global", url: "https://www.leegal.co/images/Kivavee-logo.png" },
    { id: 6, name: "KK Digital", url: "https://www.leegal.co/images/KKDigital-logo.png" },
    { id: 7, name: "PMHS Tech", url: "https://www.leegal.co/images/PMHS-logo.png" },
    { id: 8, name: "Zentar", url: "https://www.leegal.co/images/Zentar-logo.png" },
    { id: 9, name: "Aspar Way", url: "https://www.leegal.co/images/AsparWay-logo.png" },
    { id: 10, name: "Dataverve", url: "https://www.leegal.co/images/Dataverve-logo.png" },
    { id: 11, name: "World Coaching Federation", url: "https://www.leegal.co/images/WCF-logo.png" },
    { id: 12, name: "Agentyne", url: "https://www.leegal.co/images/Agentyne-logo.png" },
    { id: 13, name: "HighLevel Crafters", url: "https://www.leegal.co/images/HighLevel-logo.png" },
    { id: 14, name: "CoreTech Networks", url: "https://www.leegal.co/images/CoreTech-logo.png" },
    { id: 15, name: "Vision LLC", url: "https://www.leegal.co/images/Vision-logo.png" },
    { id: 16, name: "Farebees", url: "https://www.leegal.co/images/Farebees-logo.png" },
    { id: 17, name: "Helpic", url: "https://www.leegal.co/images/Helpic-logo.png" },
    { id: 18, name: "Ranking Xperts", url: "https://www.leegal.co/images/RankingXperts-logo.png" },
  ]

  // Split into two rows and duplicate for seamless loop
  const mid = Math.ceil(logos.length / 2)
  const row1 = [...logos.slice(0, mid), ...logos.slice(0, mid)]
  const row2 = [...logos.slice(mid), ...logos.slice(mid)]

  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="mb-8 sm:mb-10 md:mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#880000] via-[#ff3b30] to-[#ff8a80]">
            Our Trusted Clients
          </span>
        </h2>

        {/* Marquee Section */}
        <div className="relative group">
          {/* Fade edges */}


          {/* Row 1 (left → right) */}
          <div
            className="flex items-center gap-12 sm:gap-16 md:gap-20 animate-[logos-left_45s_linear_infinite] group-hover:[animation-play-state:paused]"
            style={{ width: "max-content" }}
          >
            {row1.map((logo, i) => (
              <LogoItem key={`r1-${logo.id}-${i}`} logo={logo} fallbackUrl={fallbackUrl} />
            ))}
          </div>

          <div className="h-10 sm:h-12" />

          {/* Row 2 (right → left) */}
          <div
            className="flex items-center gap-12 sm:gap-16 md:gap-20 animate-[logos-right_50s_linear_infinite] group-hover:[animation-play-state:paused]"
            style={{ width: "max-content" }}
          >
            {row2.map((logo, i) => (
              <LogoItem key={`r2-${logo.id}-${i}`} logo={logo} fallbackUrl={fallbackUrl} />
            ))}
          </div>

          {/* Animations */}
          <style jsx global>{`
            @keyframes logos-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            @keyframes logos-right {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Logo Component with Fallback ─────────────── */
function LogoItem({
  logo,
  fallbackUrl,
}: {
  logo: { id: string | number; name: string; url: string }
  fallbackUrl: string
}) {
  const [src, setSrc] = React.useState(logo.url)

  return (
    <div className="flex-none flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
      <img
        src={src}
        alt={logo.name}
        title={logo.name}
        loading="lazy"
        onError={() => setSrc(fallbackUrl)} // fallback trigger
        className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
      />
    </div>
  )
}
