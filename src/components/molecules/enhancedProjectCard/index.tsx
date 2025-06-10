"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/atoms/button"
import { motion } from "framer-motion"

interface EnhancedProjectCardProps {
  title: string
  description: string
  imageSrc: string
  demoUrl?: string
  moreUrl?: string
  category: string
  tags?: string[]
  className?: string
}

export function EnhancedProjectCard({
  title,
  description,
  imageSrc,
  demoUrl,
  moreUrl,
  category,
  tags,
  className,
}: EnhancedProjectCardProps) {
  return (
    <motion.div
      className={cn("group relative overflow-hidden rounded-lg", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="mb-2">
            <span className="text-sm italic">{category}</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm mb-4 line-clamp-2">{description}</p>

          {tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span key={tag} className="text-xs bg-white/20 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-4">
            {demoUrl && (
              <Button href={demoUrl} variant="outline" className="text-sm py-2 px-4">
                Demo
              </Button>
            )}
            {moreUrl && (
              <Button href={moreUrl} variant="outline" className="text-sm py-2 px-4">
                More
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
