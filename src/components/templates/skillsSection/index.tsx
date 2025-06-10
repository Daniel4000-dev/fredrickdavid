"use client"

import { SkillsSection } from "@/components/organisms/skillsSection"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SkillsSectionTemplateProps {
  className?: string
}

export function SkillsSectionTemplate({ className }: SkillsSectionTemplateProps) {
  return (
    <section className={cn("py-16", className)} id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SkillsSection />
        </motion.div>
      </div>
    </section>
  )
}
