"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsConditionsPopup({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-tech-white border-2 border-tech-black shadow-tech-strong max-w-2xl w-full h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-tech-black text-tech-white p-4 sm:p-6 flex-shrink-0 border-b-2 border-tech-gold">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold tech-heading">CONDITIONS GÉNÉRALES</h2>
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
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">CONDITIONS GÉNÉRALES</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                En utilisant Meilleurs Sites de Paris Français, vous acceptez de vous conformer et d'être lié par les
                conditions générales suivantes. Ces conditions s'appliquent à tous les utilisateurs de notre site web et
                services.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">RESTRICTIONS D'ÂGE</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Vous devez avoir au moins 18 ans pour utiliser ce site web. Nous prenons la vérification d'âge au
                sérieux et promouvons des pratiques de jeu responsables. Si vous avez moins de 18 ans, veuillez quitter
                ce site web immédiatement.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">JEU RESPONSABLE</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 mb-3 tech-body leading-relaxed">
                Nous nous engageons à promouvoir le jeu responsable. Veuillez vous rappeler :
              </p>
              <ul className="text-sm sm:text-base text-tech-gray-700 list-disc list-inside space-y-2 tech-body">
                <li>Ne pariez qu'avec de l'argent que vous pouvez vous permettre de perdre</li>
                <li>Fixez des limites de temps et de dépenses avant de commencer</li>
                <li>Ne courez jamais après vos pertes</li>
                <li>Prenez des pauses régulières du jeu</li>
                <li>Cherchez de l'aide si le jeu devient un problème</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                PRÉCISION DES INFORMATIONS
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Bien que nous nous efforcions de fournir des informations précises et à jour sur les sites de paris, les
                bonus et les promotions, nous ne pouvons garantir l'exactitude de tout le contenu. Les conditions
                générales peuvent changer sans préavis.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">LIENS TIERS</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Notre site web contient des liens vers des sites de paris tiers. Nous ne sommes pas responsables du
                contenu, des conditions ou des pratiques de ces sites externes. Consultez toujours leurs conditions
                générales avant utilisation.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                LIMITATION DE RESPONSABILITÉ
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Meilleurs Sites de Paris Français ne sera pas responsable de tout dommage direct, indirect, accessoire
                ou consécutif découlant de votre utilisation de ce site web ou des informations qu'il contient.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">AIDE ET SUPPORT</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 mb-3 tech-body leading-relaxed">
                Si vous avez besoin d'aide pour l'addiction au jeu, veuillez contacter :
              </p>
              <ul className="text-sm sm:text-base text-tech-gray-700 list-disc list-inside space-y-2 tech-body">
                <li>
                  <strong>Joueurs Info Service:</strong> www.joueurs-info-service.fr
                </li>
                <li>
                  <strong>SOS Joueurs:</strong> www.sos-joueurs.org
                </li>
                <li>
                  <strong>Adictel:</strong> www.adictel.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-tech-red/10 border-t-2 border-tech-red p-3 sm:p-4 flex-shrink-0">
          <p className="text-tech-red font-semibold text-center text-sm tech-subheading">
            18+ | Mises et conditions générales s'appliquent | Jouez responsable
          </p>
        </div>
      </div>
    </div>
  )
}
