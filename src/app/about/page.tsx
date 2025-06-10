import { AboutSection } from "@/components/templates/aboutSection";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
