import { AboutSection } from "@/components/templates/aboutSection";
import { ContactSection } from "@/components/templates/contactSection";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/templates/heroSection";
import { PortfolioSection } from "@/components/templates/portfolioSection";
import { SkillsSectionTemplate } from "@/components/templates/skillsSection";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection variant="desktop" className="hidden lg:grid" />
        <HeroSection variant="mobile" className="lg:hidden" />
        <AboutSection />
        <SkillsSectionTemplate />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
