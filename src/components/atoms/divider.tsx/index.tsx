import { cn } from "@/lib/utils"

interface DividerProps {
  className?: string
}

export function Divider({ className }: DividerProps) {
  return (
    <div className={cn("flex items-center justify-center my-8", className)}>
      <div className="w-8 h-0.5 bg-current"></div>
      <div className="mx-1">
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 6L6 0L12 6L18 0L24 6L18 12L12 6L6 12L0 6Z" fill="currentColor" />
        </svg>
      </div>
      <div className="w-8 h-0.5 bg-current"></div>
    </div>
  )
}
