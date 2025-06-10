"use client"

import { useState } from "react"
import { Button } from "@/components/atoms/button"
import { cn } from "@/lib/utils"
import { X, Menu } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { NavLink } from "@/components/molecules/navLink"

interface MobileNavigationProps {
  className?: string
}

export function MobileNavigation({ className }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className={cn("lg:hidden", className)}>
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="p-2 text-white z-50 relative"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center w-full">
              <NavLink href="/about" label="About me" variant="mobile" onClick={closeMenu} />
              <NavLink href="/skills" label="Skills" variant="mobile" onClick={closeMenu} />
              <NavLink href="/portfolio" label="Portfolio" variant="mobile" onClick={closeMenu} />
              <div className="mt-6">
                <Button href="/contact" onClick={closeMenu}>
                  Contact Me
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
