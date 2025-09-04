"use client"

import type React from "react"

import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { BettingSite } from "@/types"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  // Fonction pour déterminer quel badge montrer (seulement un)
  const getPrimaryBadge = () => {
    if (site.isTopRating)
      return {
        text: "RECOMMANDÉ",
        color: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-2 border-white shadow-xl",
      }
    if (site.isTopLine)
      return {
        text: "MEILLEUR CHOIX",
        color: "bg-gradient-to-r from-green-600 to-emerald-600 text-white border-2 border-white shadow-xl",
      }
    if (site.isPopular)
      return {
        text: "POPULAIRE",
        color: "bg-gradient-to-r from-orange-500 to-red-500 text-white border-2 border-white shadow-xl",
      }
    if (site.isTrending)
      return {
        text: "TENDANCE",
        color: "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-2 border-white shadow-xl",
      }
    return null
  }

  const primaryBadge = getPrimaryBadge()
  const isFirstItem = rank === 1

  // Fonction sécurisée pour ouvrir les liens
  const handleLinkClick = (e: React.MouseEvent) => {
    // Validation supplémentaire du lien
    if (!site.url || !site.url.startsWith("https://")) {
      e.preventDefault()
      return
    }
  }

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={handleLinkClick}
      className="block group"
      aria-label={`Visiter le site officiel de ${site.name} (nouvelle fenêtre)`}
    >
      <div
        className={`relative rounded-xl p-6 transition-all duration-300 group-hover:scale-[1.02] shadow-xl border-2 ${
          isFirstItem
            ? "bg-gradient-to-br from-purple-100 via-white to-indigo-100 border-yellow-400 shadow-2xl shadow-yellow-400/30"
            : "bg-gradient-to-br from-purple-50 via-white to-indigo-50 border-slate-300 hover:border-slate-400"
        }`}
      >
        {/* Badge - repositionné en haut à droite */}
        {primaryBadge && (
          <div className="absolute -top-3 -right-3 z-20">
            <Badge
              className={`${primaryBadge.color} px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transform rotate-3 hover:rotate-0 transition-transform`}
            >
              {primaryBadge.text}
            </Badge>
          </div>
        )}

        {/* Éléments décoratifs */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          {isFirstItem ? (
            <>
              {/* Étoiles pour le premier */}
              <div className="absolute top-4 left-4 w-6 h-6 opacity-10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-purple-600">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 opacity-10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-amber-600">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="absolute top-1/2 right-8 w-4 h-4 opacity-10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-indigo-600">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              {/* Cercles décoratifs */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-br from-purple-200/20 to-purple-300/15"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-amber-200/20 to-amber-300/15"></div>
            </>
          ) : (
            <>
              {/* Motifs géométriques pour les autres */}
              <div className="absolute top-6 left-6 w-5 h-5 opacity-8">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-600">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                </svg>
              </div>
              <div className="absolute bottom-6 right-6 w-6 h-6 opacity-8">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-600">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="absolute top-1/3 right-12 w-3 h-3 opacity-8">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-purple-600">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              </div>
              <div className="absolute bottom-1/3 left-12 w-4 h-4 opacity-8">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-600">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              {/* Cercles décoratifs */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-purple-200/15 to-purple-300/10"></div>
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-200/15 to-indigo-300/10"></div>
            </>
          )}
        </div>

        <div className="relative z-10">
          {/* Desktop and Tablet Layout */}
          <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 pt-2">
            {/* Numéro de rang */}
            <div
              className={`w-14 h-14 font-bold rounded-full flex items-center justify-center text-2xl flex-shrink-0 border-4 shadow-lg ${
                isFirstItem
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-white"
                  : "bg-gradient-to-r from-slate-700 to-slate-800 text-white border-white"
              }`}
            >
              {rank}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 p-3 rounded-xl border-2 bg-white shadow-md border-slate-300">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={`Logo ${site.name} - Site licencié ANJ`}
                className="w-[140px] h-[86px] lg:w-[160px] lg:h-[96px] object-contain"
                loading="lazy"
              />
            </div>

            {/* Bonus */}
            <div className="flex-1 text-center">
              <div className={`font-bold mb-1 text-xl ${isFirstItem ? "text-purple-700" : "text-slate-700"}`}>
                BONUS INFORMATIONS
              </div>
              <p
                className={`font-semibold leading-tight text-2xl ${isFirstItem ? "text-purple-800" : "text-green-600"}`}
              >
                {site.bonus}
              </p>
            </div>

            {/* Note */}
            <div className="text-center flex-shrink-0">
              <div
                className={`text-xl lg:text-2xl font-bold mb-1 ${isFirstItem ? "text-purple-700" : "text-slate-700"}`}
              >
                {site.rating.toFixed(1)}
                <span className="text-sm text-slate-500">/10</span>
              </div>
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 stroke-[1.5px] ${
                      i < site.stars ? "text-yellow-500 fill-yellow-500" : "text-transparent stroke-slate-400"
                    }`}
                  />
                ))}
              </div>
              <div className="text-slate-500 text-xs">
                <span>({site.reviews} avis)</span>
              </div>
            </div>

            {/* Bouton */}
            <div className="flex-shrink-0">
              <Button
                className={`font-bold px-6 py-3 text-base border-2 flex items-center gap-2 shadow-lg transition-all hover:scale-105 ${
                  isFirstItem
                    ? "bg-purple-600 hover:bg-purple-700 text-white font-bold border-amber-500"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white font-bold border-indigo-500"
                }`}
              >
                VISITER SITE
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden pt-2">
            {/* Ligne du haut : Logo à gauche, Bonus à droite */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-shrink-0 p-2 rounded-lg border-2 bg-white border-slate-300">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={`Logo ${site.name} - Site licencié ANJ`}
                  className="w-[120px] h-[72px] object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 text-center pl-4">
                <div className={`font-bold text-sm mb-1 ${isFirstItem ? "text-purple-700" : "text-slate-700"}`}>
                  BONUS INFO
                </div>
                <p
                  className={`font-semibold leading-tight text-lg ${isFirstItem ? "text-purple-800" : "text-green-600"}`}
                >
                  {site.bonus}
                </p>
              </div>
            </div>

            {/* Note - en une ligne */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className={`font-bold text-lg ${isFirstItem ? "text-purple-700" : "text-slate-700"}`}>
                  {site.rating.toFixed(1)}
                  <span className="text-sm text-slate-500">/10</span>
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 stroke-[1.5px] ${
                        i < site.stars ? "text-yellow-500 fill-yellow-500" : "text-transparent stroke-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-slate-500 text-sm">
                <span>({site.reviews} avis)</span>
              </div>
            </div>

            {/* Bouton */}
            <Button
              className={`font-bold w-full py-3 border-2 flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-105 ${
                isFirstItem
                  ? "bg-purple-600 hover:bg-purple-700 text-white font-bold border-amber-500"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white font-bold border-indigo-500"
              }`}
            >
              VISITER SITE
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 pt-4 border-t border-slate-300 text-center">
          <p className="text-slate-700 text-xs leading-relaxed font-medium">
            <strong>18+ | Jeu responsable | Site licencié ANJ</strong> - Les paris peuvent être dangereux. Aide : 09 74
            75 13 13 - Ne pariez que ce que vous pouvez perdre
          </p>
        </div>
      </div>
    </a>
  )
}
