import { ContactSection } from "@/components/templates/contactSection";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
