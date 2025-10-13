"use client"

import * as React from "react"

type Video = {
  name: string
  company: string
  youtubeId: string
  logoUrl?: string
}

const VIDEOS: Video[] = [
  { name: "Aar Hashmi", company: "Buzz Filing", youtubeId: "KIn4rnL4V44" },
  { name: "Abhishek K Agarwal", company: "Incorz", youtubeId: "7Vwv2o8JvQ0" },
  { name: "Krishna Pandey", company: "Foundo", youtubeId: "7Vwv2o8JvQ0" },
  { name: "Shubhankar", company: "Micahguru", youtubeId: "RGtfEVWkztY" },
  { name: "Venkatesh", company: "Eclat Interiors", youtubeId: "RGtfEVWkztY" },
  { name: "Praneet Ghosh", company: "JZ Ecommerce", youtubeId: "RGtfEVWkztY" },
]

function loopItems<T>(arr: T[], times = 2): T[] {
  return Array(times).fill(null).flatMap(() => arr)
}

export default function VideoTestimonialsOneRow({
  duration = 34,
  pauseOnHover = true,
  gapClassName = "gap-3 sm:gap-5 md:gap-7 lg:gap-8",
}: {
  duration?: number
  pauseOnHover?: boolean
  gapClassName?: string
}) {
  const items = React.useMemo(() => loopItems(VIDEOS, 2), [])

  return (
    <section className="relative w-full py-10 sm:py-14 md:py-20 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#880000] via-[#ff3b30] to-[#ff8a80]">
            What Our Clients Say
          </span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-black/80">
          Short, authentic video testimonials from real founders.
        </p>
      </div>

      {/* Row */}
      <div className="group relative overflow-hidden" data-pause={pauseOnHover ? "hover" : undefined}>
        {/* Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-14 sm:w-20 md:w-24 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-14 sm:w-20 md:w-24 bg-gradient-to-l from-white via-white/70 to-transparent z-10" />

        {/* Track */}
        <div
          className={[
            "flex items-stretch",
            gapClassName,
            "whitespace-nowrap will-change-transform",
            "animate-[marquee_linear_infinite]",
            "[animation-duration:var(--row-duration,34s)]",
            pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
            "motion-reduce:animate-none motion-reduce:translate-x-0",
            "px-4 sm:px-6 md:px-8",
          ].join(" ")}
          style={{ ["--row-duration" as any]: `${duration}s` }}
        >
          {items.map((v, i) => (
            <Card key={`${v.youtubeId}-${i}`} video={v} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}

function initials(name: string) {
  const parts = name.split(" ")
  const first = parts[0]?.[0] ?? ""
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ""
  return (first + last).toUpperCase()
}

function Card({ video }: { video: Video }) {
  const { name, company, youtubeId, logoUrl } = video
  const [playing, setPlaying] = React.useState(false)

  return (
    <article
      className={[
        "relative flex-none group/card",
        "p-[1px] rounded-2xl bg-gradient-to-b from-black/5 to-black/10 shadow-md ",
        "w-[38vw] min-w-[140px] max-w-[220px]",
        "sm:w-[30vw] sm:min-w-[160px] sm:max-w-[260px]",
        "md:w-[24vw] md:min-w-[180px] md:max-w-[280px]",
        "lg:w-[20vw] lg:min-w-[200px] lg:max-w-[300px]",
        "aspect-[9/16]",
      ].join(" ")}
    >
      <div className="relative h-full w-full rounded-[calc(theme(borderRadius.2xl)-1px)] overflow-hidden bg-white">
        {!playing ? (
          <button onClick={() => setPlaying(true)} className="absolute inset-0">
            <img
              src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-black/60 p-3">
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        ) : (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&autoplay=1`}
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {/* Bottom Glass Info Card */}
        <div className="absolute inset-x-3 bottom-3">
          <div className="flex items-center gap-2 backdrop-blur-md bg-white/85 border border-white/60 shadow-md rounded-xl px-3 py-2">
            {logoUrl ? (
              <img src={logoUrl} alt="" className="h-6 w-6 rounded-full object-cover" />
            ) : (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-500 text-white text-[10px] font-semibold">
                {initials(name)}
              </div>
            )}
            <div className="min-w-0">
              <p className="truncate text-[11px] sm:text-xs md:text-sm font-semibold text-black">
                {name}
              </p>
              <p className="truncate text-[10px] sm:text-[11px] md:text-xs text-black/70">
                {company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
