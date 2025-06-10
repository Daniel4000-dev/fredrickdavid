"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string
  label: string
  className?: string
  onClick?: () => void
  variant?: "desktop" | "mobile"
}

export function NavLink({ href, label, className, onClick, variant = "desktop" }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "transition-all duration-300",
        variant === "desktop" && "text-white hover:text-gray-300 px-4 py-2",
        variant === "mobile" && "text-2xl py-6 text-center block w-full text-white",
        isActive && "font-bold",
        className,
      )}
    >
      {label}
    </Link>
  )
}
