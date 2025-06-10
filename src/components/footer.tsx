import { cn } from "@/lib/utils"
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react"
import { BackToTop } from "./atoms/backToTop"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-black text-white py-12", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <BackToTop />

          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-gray-400 text-sm">@{new Date().getFullYear()} Fredrick David All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
