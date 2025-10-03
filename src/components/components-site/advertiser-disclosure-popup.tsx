"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosurePopup({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-tech-white border-2 border-tech-black shadow-tech-strong max-w-2xl w-full h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-tech-black text-tech-white p-4 sm:p-6 flex-shrink-0 border-b-2 border-tech-gold">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold tech-heading">DIVULGATION PUBLICITAIRE</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-tech-white hover:bg-tech-white/20 border border-tech-gold"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-tech-white">
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                COMMENT NOUS GAGNONS DE L'ARGENT
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Meilleurs Sites de Paris Français est un site de comparaison indépendant qui aide les utilisateurs à
                trouver les meilleurs sites de paris en France. Nous pouvons recevoir une compensation lorsque vous
                cliquez sur les liens vers les sites de paris présentés sur notre site web.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                NOTRE ENGAGEMENT ENVERS VOUS
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 mb-3 tech-body leading-relaxed">
                Cette compensation n'influence pas nos classements, avis ou recommandations. Notre équipe éditoriale
                maintient une indépendance complète dans l'évaluation des sites de paris basée sur des facteurs tels que
                :
              </p>
              <ul className="text-sm sm:text-base text-tech-gray-700 list-disc list-inside space-y-2 tech-body">
                <li>Licence et réglementation</li>
                <li>Mesures de sécurité et de sûreté</li>
                <li>Cotes et marchés de paris</li>
                <li>Bonus de bienvenue et promotions</li>
                <li>Qualité du service client</li>
                <li>Méthodes de paiement et vitesses de retrait</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">TRANSPARENCE</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Nous croyons en la transparence complète avec nos utilisateurs. Tous les sites de paris présentés sur
                notre plateforme sont clairement marqués, et nous ne recommandons que des opérateurs qui sont licenciés
                et réglementés en France ou dans d'autres juridictions réputées.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">VOTRE RESPONSABILITÉ</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Bien que nous nous efforcions de fournir des informations précises et à jour, il est de votre
                responsabilité de vérifier tous les termes et conditions directement avec l'opérateur de paris avant de
                placer des paris. Pariez toujours de manière responsable et dans vos moyens.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-tech-red/10 border-t-2 border-tech-red p-3 sm:p-4 flex-shrink-0">
          <p className="text-tech-red font-semibold text-center text-sm tech-subheading">
            18+ | Joueurs français uniquement | Le jeu peut créer une dépendance — Jouez en sécurité.
          </p>
        </div>
      </div>
    </div>
  )
}
