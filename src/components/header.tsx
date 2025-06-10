"use client"

import { Logo } from "@/components/atoms/logo"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { DesktopNavigation } from "./organisms/desktopNavigation"
import { MobileNavigation } from "./organisms/mobileNavigation"

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-black/90 backdrop-blur-sm shadow-md" : "bg-transparent",
        className,
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo className="text-white" />
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </motion.header>
  )
}
