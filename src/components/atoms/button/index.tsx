"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ButtonProps {
  children: React.ReactNode
  href?: string
  className?: string
  variant?: "primary" | "outline"
  onClick?: () => void
  type?: "button" | "submit"
}

export function Button({ children, href, className, variant = "primary", onClick, type = "button" }: ButtonProps) {
  const buttonClasses = cn(
    "inline-block text-center py-3 px-8 uppercase tracking-wider transition-all duration-300 font-medium",
    variant === "primary" && "bg-white text-black border-2 border-black hover:bg-black hover:text-white",
    variant === "outline" && "border-2 border-white text-white hover:bg-white hover:text-black",
    className,
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  )
}
