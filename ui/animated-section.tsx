"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
  threshold?: number
  rootMargin?: string
}

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
}: AnimatedSectionProps) {
  const [isVisible, ref] = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  })

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    const baseClasses = "transition-all duration-1000 opacity-100"

    const animationClasses = {
      "fade-up": "translate-y-0",
      "fade-down": "translate-y-0",
      "fade-left": "translate-x-0",
      "fade-right": "translate-x-0",
      "zoom-in": "scale-100",
      "zoom-out": "scale-100",
    }

    return `${baseClasses} ${animationClasses[animation]}`
  }

  const getInitialClass = () => {
    const initialClasses = {
      "fade-up": "translate-y-8",
      "fade-down": "-translate-y-8",
      "fade-left": "translate-x-6", // Reduced from 10 to 6
      "fade-right": "-translate-x-6", // Reduced from 10 to 6
      "zoom-in": "scale-95",
      "zoom-out": "scale-105",
    }

    return initialClasses[animation]
  }

  return (
    <div
      ref={ref}
      className={`${className} ${getInitialClass()} ${getAnimationClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
