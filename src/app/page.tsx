import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BettingCardsGrid } from "@/components/betting-cards-grid"
import { InformativeSection } from "@/components/informative-section"
import { OurChoiceSection } from "@/components/our-choice-section"
import { SelectionCriteria } from "@/components/selection-criteria"
import { Footer } from "@/components/footer"
import { ModalProvider } from "@/components/modal-provider"
import { bettingSites } from "@/data/betting-sites"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: 'url("/bg.jpg")' }}>
      <div className="min-h-screen bg-black/20 backdrop-blur-[1px]">
        <Header />

        <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <HeroSection />

          <section id="top-sites" className="mb-12">
            <BettingCardsGrid sites={bettingSites} />
          </section>

          <InformativeSection />

          <OurChoiceSection site={bettingSites[0]} />

          <SelectionCriteria />
        </main>

        <Footer />

        <ModalProvider />
      </div>
    </div>
  )
}
