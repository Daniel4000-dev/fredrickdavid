"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion } from "framer-motion"
import { HeroText } from "@/components/molecules/heroText"
import { SocialLinks } from "@/components/organisms/socialLinks"

interface HeroSectionProps {
  className?: string
  variant?: "desktop" | "mobile"
}

export function HeroSection({ className, variant = "desktop" }: HeroSectionProps) {
  if (variant === "mobile") {
    return (
      <div className={cn("relative h-screen", className)}>
        <div className="absolute inset-0">
          <Image src="/images/fredrick.jpeg" alt="Profile Picture" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        </div>

        <div className="absolute bottom-0 left-0 p-6 w-full text-white">
          <HeroText greeting="Hi, I am" name="Fredrick David" title="Front-end Developer / UI Designer" />

          <div className="mt-8">
            <SocialLinks variant="mobile" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("grid lg:grid-cols-2 min-h-screen", className)}>
      <motion.div
        className="flex flex-col justify-center p-8 lg:p-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroText greeting="Hi, I am" name="Fredrick David" title="Front-end Developer / UI Designer" className="mb-12" />

        <SocialLinks />
      </motion.div>

      <motion.div
        className="bg-black relative hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
          <Image src="/images/fredrick.jpeg" alt="Profile Picture" fill className="object-cover" priority />
      </motion.div>
    </div>
  )
}
