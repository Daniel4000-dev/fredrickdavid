"use client"

import { SectionTitle } from "@/components/atoms/sectionTitle"
import { EnhancedContactForm } from "@/components/molecules/enhancedContactForm"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ContactSectionProps {
  className?: string
}

export function ContactSection({ className }: ContactSectionProps) {
  return (
    <section className={cn("py-16 bg-gray-100", className)} id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block border-4 border-black px-12 py-6 mb-8">
            <SectionTitle>Contact</SectionTitle>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-gray-700 leading-relaxed">
              My name is Tomasz Gajda, I&apos;m a third year Applied Computer Science student at AGH University of Science
              and Technology in Cracow, Poland.
            </p>
          </div>

          <EnhancedContactForm />
        </motion.div>
      </div>
    </section>
  )
}
