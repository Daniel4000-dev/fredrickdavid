"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { PortfolioFilter } from "@/components/atoms/portfolioFilter"
import { EnhancedProjectCard } from "@/components/molecules/enhancedProjectCard"

interface Project {
  id: string
  title: string
  description: string
  imageSrc: string
  category: string
  tags: string[]
  demoUrl?: string
  moreUrl?: string
}

interface EnhancedPortfolioGridProps {
  className?: string
}

export function EnhancedPortfolioGrid({ className }: EnhancedPortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState("ALL")

  const projects: Project[] = [
    {
      id: "1",
      title: "eatsome.",
      description: "Restaurant browsing in React.js (Using Yelp API)",
      imageSrc: "/images/eatsome-project.jpg",
      category: "coded, designed",
      tags: ["React.js", "Yelp API", "JavaScript"],
      demoUrl: "/demo/eatsome",
      moreUrl: "/portfolio/eatsome",
    },
    {
      id: "2",
      title: "Mountain Explorer",
      description: "A travel blog focused on mountain adventures and hiking experiences.",
      imageSrc: "/images/mountain-project.jpg",
      category: "designed",
      tags: ["UI/UX", "Travel", "Blog"],
      moreUrl: "/portfolio/mountain-explorer",
    },
    {
      id: "3",
      title: "Tech Solutions",
      description: "Corporate website with service listings and team presentation.",
      imageSrc: "/images/tech-project.jpg",
      category: "coded",
      tags: ["Next.js", "TypeScript", "Corporate"],
      demoUrl: "/demo/tech-solutions",
      moreUrl: "/portfolio/tech-solutions",
    },
  ]

  const filters = ["ALL", "CODED", "DESIGNED"]

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "ALL") return true
    return project.category.toLowerCase().includes(activeFilter.toLowerCase())
  })

  return (
    <div className={cn("", className)}>
      <PortfolioFilter filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <EnhancedProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            category={project.category}
            tags={project.tags}
            demoUrl={project.demoUrl}
            moreUrl={project.moreUrl}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">And many more to come!</h3>
      </div>
    </div>
  )
}
