"use client"

import { SectionTitle } from "@/components/atoms/sectionTitle"
import { ServicesSection } from "@/components/organisms/servicesSection"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AboutSectionProps {
  className?: string
}

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <section className={cn("py-16 bg-gray-100", className)} id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle variant="bordered" className="mb-8">
            About Me
          </SectionTitle>

          <div className="max-w-2xl mb-12">
            <p className="mb-4">
              My name is Tomasz Gajda. I&apos;m a third year Applied Computer Science student at the AGH University of
              Science and Technology in Krakow. I have been learning programming for over a year and this time was just
              enough for me to make sure that this is my place in the industry.
            </p>
            <p>
              Membership in the science club developed my design skills, which quickly turned into a new hobby. I am
              fluent in English (spoken and written) and intermediate Spanish. Apart from designing and programming
              websites, my passion is all kind of motorsport - from rallies to the very king of motorsport - formula 1.
            </p>
          </div>

          <ServicesSection />
        </motion.div>
      </div>
    </section>
  )
}
