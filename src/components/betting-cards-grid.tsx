import { BettingSiteCard } from "./betting-card"
import type { BettingSite } from "@/types/betting"

interface BettingCardsGridProps {
  sites: BettingSite[]
}

export function BettingCardsGrid({ sites }: BettingCardsGridProps) {
  return (
    <div className="space-y-6">
      {sites.map((site, index) => (
        <div key={site.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <BettingSiteCard site={site} index={index} isTopChoice={index === 0} />
        </div>
      ))}
    </div>
  )
}
