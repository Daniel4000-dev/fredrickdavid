import { SectionTitle } from "@/components/atoms/sectionTitle"
import { SkillIcon } from "@/components/atoms/skillIcon"
import { cn } from "@/lib/utils"

interface SkillsSectionProps {
  className?: string
}

export function SkillsSection({ className }: SkillsSectionProps) {
  return (
    <div className={cn("", className)}>
      <SectionTitle variant="bordered" className="mb-8">
        Skills
      </SectionTitle>

      <h3 className="text-xl font-bold mb-8 uppercase">Using Now:</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        <SkillIcon src="/images/html5.svg" alt="HTML5" name="HTML5" />
        <SkillIcon src="/images/css3.svg" alt="CSS3" name="CSS3" />
        <SkillIcon src="/images/sass.svg" alt="SASS" name="SASS" />
        <SkillIcon src="/images/javascript.svg" alt="JavaScript" name="JavaScript" />
        <SkillIcon src="/images/typescript.svg" alt="TypeScript" name="TypeScript" />
        <SkillIcon src="/images/react.svg" alt="React" name="React" />
      </div>
    </div>
  )
}
