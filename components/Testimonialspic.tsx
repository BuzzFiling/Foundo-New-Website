"use client"

import { useState } from "react"

type Testimonial = {
  name: string
  role: string
  company: string
  image: string
  quote: string
}

interface TestimonialsProps {
  testimonials?: Testimonial[]
  speed?: number
  pauseOnHover?: boolean
  className?: string
  heading?: string
  subheading?: string
  rows?: number
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp",
    image: "https://i.pravatar.cc/150?img=1",
    quote: "This platform transformed how our team collaborates. We've seen a 40% increase in productivity.",
  },
  {
    name: "Michael Rodriguez",
    role: "Product Designer",
    company: "DesignHub",
    image: "https://i.pravatar.cc/150?img=13",
    quote: "The intuitive interface and powerful features make this an essential tool for our design workflow.",
  },
  {
    name: "Emily Watson",
    role: "CTO",
    company: "StartupXYZ",
    image: "https://i.pravatar.cc/150?img=5",
    quote: "Incredible performance and reliability. Our deployment time has been cut in half.",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    company: "CodeLabs",
    image: "https://i.pravatar.cc/150?img=14",
    quote: "Best developer experience I've had. The documentation and support are top-notch.",
  },
  {
    name: "Jessica Martinez",
    role: "Head of Product",
    company: "InnovateCo",
    image: "https://i.pravatar.cc/150?img=9",
    quote: "Our customers love the speed and quality. This has become central to our tech stack.",
  },
  {
    name: "Alex Thompson",
    role: "Engineering Manager",
    company: "DataFlow",
    image: "https://i.pravatar.cc/150?img=12",
    quote: "Seamless integration and excellent performance. Highly recommend for any modern team.",
  },
  {
    name: "Rachel Green",
    role: "Senior Engineer",
    company: "CloudNine",
    image: "https://i.pravatar.cc/150?img=24",
    quote: "The scalability and flexibility are unmatched. Perfect for our growing infrastructure.",
  },
  {
    name: "James Wilson",
    role: "Tech Lead",
    company: "BuildFast",
    image: "https://i.pravatar.cc/150?img=15",
    quote: "Game-changer for our development process. We ship features 3x faster now.",
  },
  {
    name: "Sophia Lee",
    role: "Product Manager",
    company: "NextGen",
    image: "https://i.pravatar.cc/150?img=47",
    quote: "The analytics and insights have helped us make better product decisions.",
  },
  {
    name: "Daniel Brown",
    role: "DevOps Lead",
    company: "ScaleUp",
    image: "https://i.pravatar.cc/150?img=33",
    quote: "Rock-solid reliability and performance. Our uptime has never been better.",
  },
]

export default function Testimonialspic({
  testimonials = defaultTestimonials,
  speed = 80,
  pauseOnHover = true,
  className = "mt-[50px]",
  rows = 2,
}: TestimonialsProps) {
  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="group relative flex w-[400px] shrink-0 flex-col gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-card hover:shadow-lg ">
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-border/50 transition-all duration-300 group-hover:ring-primary/20">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-foreground">{testimonial.name}</h3>
          <p className="text-xs text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
      <p className="text-pretty text-sm leading-relaxed text-foreground/80">{testimonial.quote}</p>
    </div>
  )

  const MarqueeRow = ({ delay = 0, reverse = false }: { delay?: number; reverse?: boolean }) => {
    const [isRowPaused, setIsRowPaused] = useState(false)

    return (
      <div
        className="relative flex overflow-hidden"
        onMouseEnter={() => pauseOnHover && setIsRowPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsRowPaused(false)}
      >
        {/* Track A */}
        <div
          className="flex shrink-0 items-center gap-6 pr-6"
          style={{
            animationName: reverse ? "scroll-reverse" : "scroll",
            animationDuration: `${speed}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: `${delay}s`,
            animationPlayState: isRowPaused ? "paused" : "running",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`testimonial-${index}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Track B (duplicate for seamless loop) */}
        <div
          className="flex shrink-0 items-center gap-6 pr-6"
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
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`testimonial-duplicate-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {/* Header */}
   

      {/* Marquee Rows */}
      <div className="space-y-6" role="region" aria-label="Customer testimonials">
        {Array.from({ length: rows }).map((_, index) => (
          <MarqueeRow key={`testimonial-row-${index}`} delay={index * 2} reverse={index % 2 !== 0} />
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
