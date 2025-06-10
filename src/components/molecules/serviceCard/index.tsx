import type React from "react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <div className={cn("flex items-start gap-4 mb-8", className)}>
      <div className="text-black mt-1">{icon}</div>
      <div>
        <h3 className="uppercase font-bold mb-2 tracking-wide">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
