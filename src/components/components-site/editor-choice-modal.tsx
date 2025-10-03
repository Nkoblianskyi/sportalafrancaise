"use client"

import { useState, useEffect } from "react"
import { X, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BettingSite } from "@/data/mock-data"


interface EditorChoiceModalProps {
  bettingSites: BettingSite[]
}

export function EditorChoiceModal({ bettingSites }: EditorChoiceModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Показувати модалку через 8 секунд після завантаження
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  // Беремо тільки перший сайт (індекс 0)
  const site = bettingSites[0]

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">


      <div className="w-full max-w-md flex flex-col items-center">
        {/* Close button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="absolute top-24 right-4 text-tech-white hover:bg-tech-white/20 z-10 w-10 h-10 p-0 bg-tech-black/70 border-2 border-tech-gold rounded-full shadow-tech-glow"
        >
          <X className="w-5 h-5" />
        </Button>
        {/* Header Banner */}
        <div className="text-center mb-6 w-full">
          <div className="relative inline-block">
            <div className="bg-tech-gold text-tech-black font-bold py-3 px-8 relative border-2 border-tech-black shadow-tech-strong">
              <div className="flex items-center gap-3 justify-center">
                <Award className="w-5 h-5" />
                <span className="text-lg font-black tracking-wide tech-heading">CHOIX DE L'ÉDITEUR</span>
                <Award className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Card */}
        <div className="tech-card overflow-hidden border-4 border-tech-gold shadow-tech-glow bg-tech-white relative w-full max-w-sm">


          {/* Logo section */}
          <div className="bg-tech-gray-100 h-32 flex items-center justify-center p-4 border-b-2 border-tech-black relative">
            <img
              src={site?.logo || "/placeholder.svg"}
              alt={site?.name || "Site"}
              className="h-24 w-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="bg-tech-white text-tech-black p-6 text-center relative">

            {/* Bonus Amount */}
            <div className="mb-6">
              <div className="text-sm text-tech-gray-600 font-medium mb-2 tech-subheading">Offre De Bienvenue</div>
              <div className="text-2xl font-black text-tech-black tracking-wider leading-tight tech-heading mb-1">
                {site?.bonus}
              </div>
              <div className="text-xl font-bold leading-tight tech-heading text-tech-black">{site?.welcomeOffer}</div>
            </div>

            {/* Rating Stars */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <span className="font-bold tech-subheading text-lg text-black">{site?.rating.toFixed(1)}/10</span>
            </div>

            {/* CTA Button */}
            <Link href={site?.link || "#"} target="_blank" rel="noopener referrer">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white font-bold border-2 border-green-800 py-3 px-8 text-base w-full shadow-tech-medium transition-all duration-300 hover:scale-105 tech-subheading"
                onClick={() => setIsOpen(false)}
              >
                RÉCLAMER BONUS
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 w-full max-w-sm">
          <div className="bg-tech-white/95 backdrop-blur-sm border-2 border-tech-gold p-4 relative shadow-tech-strong">

            <p className="text-tech-black text-sm font-bold mb-1 tech-subheading">18+ Seulement | anj.fr</p>
            <p className="text-tech-gray-700 text-xs tech-body">Jouez Responsable | Le Jeu Peut Créer une Dépendance</p>
          </div>
        </div>
      </div>
    </div>
  )
}
