"use client"

import { cn } from "@/lib/utils"
import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

interface BackToTopProps {
  className?: string
}

export function BackToTop({ className }: BackToTopProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className={cn("text-center", className)}>
      <button
        onClick={scrollToTop}
        className="flex flex-col items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300"
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
        <span className="text-sm uppercase tracking-wider">Back to Top</span>
      </button>
    </div>
  )
}
