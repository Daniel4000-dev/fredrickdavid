import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("block w-16 h-16", className)}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 12.5L87.5 50L50 87.5L12.5 50L50 12.5Z" stroke="currentColor" strokeWidth="5" />
        <path d="M33 33L67 67" stroke="currentColor" strokeWidth="5" />
        <path d="M67 33L33 67" stroke="currentColor" strokeWidth="5" />
      </svg>
    </Link>
  )
}
