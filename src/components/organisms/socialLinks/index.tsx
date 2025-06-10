import { SocialIcon } from "@/components/atoms/socialIcon"
import { cn } from "@/lib/utils"
import { AtSign, Github, Linkedin } from "lucide-react"

interface SocialLinksProps {
  className?: string
  variant?: "default" | "mobile"
}

export function SocialLinks({ className, variant = "default" }: SocialLinksProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      <SocialIcon
        href="mailto:contact@example.com"
        icon={<AtSign size={variant === "default" ? 18 : 24} />}
        label="Email"
        variant={variant}
      />
      <SocialIcon
        href="https://github.com/"
        icon={<Github size={variant === "default" ? 18 : 24} />}
        label="GitHub"
        variant={variant}
      />
      <SocialIcon
        href="https://linkedin.com/"
        icon={<Linkedin size={variant === "default" ? 18 : 24} />}
        label="LinkedIn"
        variant={variant}
      />
    </div>
  )
}
