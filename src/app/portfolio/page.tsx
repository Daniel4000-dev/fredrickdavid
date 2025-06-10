import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PortfolioSection } from "@/components/templates/portfolioSection";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <PortfolioSection />
      </main>
      <Footer />
    </>
  )
}
