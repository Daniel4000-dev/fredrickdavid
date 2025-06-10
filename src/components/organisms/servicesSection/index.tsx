
import { Divider } from "@/components/atoms/divider.tsx"
import { ServiceCard } from "@/components/molecules/serviceCard"
import { cn } from "@/lib/utils"
import { Palette, Code, Wrench } from "lucide-react"

interface ServicesSectionProps {
  className?: string
}

export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <div className={cn("", className)}>
      <ServiceCard
        title="Design"
        description="I can design the website based on your needs and suggestions. I can also create it from scratch by consulting with you during work."
        icon={<Palette size={24} />}
      />

      <ServiceCard
        title="Development"
        description="Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive."
        icon={<Code size={24} />}
      />

      <ServiceCard
        title="Maintenance"
        description="In case of any problems or the need for changes, I can introduce new functionalities and solutions."
        icon={<Wrench size={24} />}
      />

      <Divider />
    </div>
  )
}
