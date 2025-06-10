import { cn } from "@/lib/utils"
import Link from "next/link"
import type { ReactNode } from "react"

interface SocialIconProps {
  href: string
  icon: ReactNode
  label: string
  className?: string
  variant?: "default" | "mobile"
}

export function SocialIcon({ href, icon, label, className, variant = "default" }: SocialIconProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center transition-all duration-900",
        variant === "default"
          ? "bg-white/10 w-10 h-10 rounded-sm hover:bg-black/10"
          : "w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm",
        className,
      )}
    >
      {icon}
    </Link>
  )
}
