import { cn } from "@/lib/utils"
import Image from "next/image"

interface SkillIconProps {
  src: string
  alt: string
  name: string
  className?: string
}

export function SkillIcon({ src, alt, name, className }: SkillIconProps) {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="w-16 h-16 relative">
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" />
      </div>
      <span className="uppercase text-sm tracking-wider">{name}</span>
    </div>
  )
}
