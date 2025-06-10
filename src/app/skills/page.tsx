import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SkillsSectionTemplate } from "@/components/templates/skillsSection";

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <SkillsSectionTemplate />
      </main>
      <Footer />
    </>
  )
}
