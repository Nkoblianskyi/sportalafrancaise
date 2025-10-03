import { BettingSiteCard } from "./betting-card"
import type { BettingSite } from "@/types/betting"

interface OurChoiceSectionProps {
  site: BettingSite
}

export function OurChoiceSection({ site }: OurChoiceSectionProps) {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Notre Choix</h2>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto">
          Notre équipe éditoriale a sélectionné le meilleur site de paris sportifs en France basé sur une analyse
          détaillée et des tests approfondis.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <BettingSiteCard site={site} index={0} isTopChoice={true} />
      </div>
    </section>
  )
}
