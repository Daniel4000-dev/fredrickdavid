"use client"

import { cn } from "@/lib/utils"

interface PortfolioFilterProps {
  filters: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
  className?: string
}

export function PortfolioFilter({ filters, activeFilter, onFilterChange, className }: PortfolioFilterProps) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-8 mb-12", className)}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={cn(
            "text-xl font-bold uppercase tracking-wider transition-all duration-300 pb-2",
            activeFilter === filter ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white",
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
