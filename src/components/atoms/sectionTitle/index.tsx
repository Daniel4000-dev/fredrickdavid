import type React from "react"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  variant?: "light" | "dark" | "bordered"
}

export function SectionTitle({ children, className, variant = "light" }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-4xl md:text-5xl font-bold tracking-wider uppercase",
        variant === "light" && "text-black",
        variant === "dark" && "text-white",
        variant === "bordered" && "border-2 border-black py-2 px-6 inline-block",
        className,
      )}
    >
      {children}
    </h2>
  )
}
