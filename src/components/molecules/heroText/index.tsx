"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface HeroTextProps {
  greeting: string
  name: string
  title: string
  className?: string
}

export function HeroText({ greeting, name, title, className }: HeroTextProps) {
  return (
    <motion.div
      className={cn("", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-light mb-2">{greeting}</h2>
      <h1 className="text-5xl md:text-7xl font-bold mb-2">{name}</h1>
      <p className="text-gray-600 text-xl">{title}</p>
    </motion.div>
  )
}
