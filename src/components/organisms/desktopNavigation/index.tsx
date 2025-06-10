"use client"

import { Button } from "@/components/atoms/button"
import { NavLink } from "@/components/molecules/navLink"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface DesktopNavigationProps {
  className?: string
}

export function DesktopNavigation({ className }: DesktopNavigationProps) {
  return (
    <motion.nav
      className={cn("hidden lg:flex items-center gap-8", className)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <NavLink href="/about" label="About me" />
      <NavLink href="/skills" label="Skills" />
      <NavLink href="/portfolio" label="Portfolio" />
      <Button href="/contact" className="ml-4">
        Contact Me
      </Button>
    </motion.nav>
  )
}
