"use client"

import { SectionTitle } from "@/components/atoms/sectionTitle"
import { EnhancedPortfolioGrid } from "@/components/organisms/enhancedPortfolioGrid"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"

interface PortfolioSectionProps {
  className?: string
}

export function PortfolioSection({ className }: PortfolioSectionProps) {
  return (
    <section className={cn("relative py-16", className)} id="portfolio">
      <div className="absolute inset-0 z-0">
        <Image src="/images/mountains.jpg" alt="Mountains" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="bg-gray-300/90 backdrop-blur-sm px-12 py-6 mb-12 inline-block border-4 border-black">
            <SectionTitle>Portfolio</SectionTitle>
          </div>

          <EnhancedPortfolioGrid />
        </motion.div>
      </div>
    </section>
  )
}
