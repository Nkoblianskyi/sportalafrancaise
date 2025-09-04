"use client"

import { Button } from "@/components/ui/button"
import { X, Info, ExternalLink } from "lucide-react"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-slide-up">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Info className="w-6 h-6 text-french-blue" />
              <h2 className="text-xl font-bold text-french-blue">Divulgation Publicitaire</h2>
            </div>
            <Button onClick={onClose} variant="ghost" size="sm">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Information Importante</h3>
            <p className="text-blue-800 text-sm">
              Ce site contient des liens d'affiliation vers des sites de paris sportifs. Nous pouvons recevoir une
              commission si vous vous inscrivez via nos liens, sans frais supplémentaires pour vous.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Notre Engagement</h3>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-french-blue rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Transparence totale :</strong> Nous divulguons clairement toutes nos relations commerciales
                  avec les opérateurs de paris sportifs.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-french-blue rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Évaluations objectives :</strong> Nos classements et avis sont basés sur des critères stricts
                  et ne sont pas influencés par les commissions.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-french-blue rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Licences vérifiées :</strong> Nous ne recommandons que des sites licenciés par l'ANJ et
                  conformes à la réglementation française.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-french-blue rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Jeu responsable :</strong> Nous promouvons activement le jeu responsable et fournissons des
                  ressources d'aide aux joueurs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">Avertissement</h4>
            <p className="text-yellow-800 text-sm">
              Les paris sportifs comportent des risques. Ne pariez que ce que vous pouvez vous permettre de perdre. Si
              vous pensez avoir un problème de jeu, contactez Joueurs Info Service au 09 74 75 13 13.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Ressources Utiles</h4>
            <div className="space-y-2">
              <a
                href="https://www.joueurs-info-service.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-french-blue hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Joueurs Info Service</span>
              </a>
              <a
                href="https://anj.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-french-blue hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Autorité Nationale des Jeux (ANJ)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <Button onClick={onClose} className="w-full bg-french-blue hover:bg-french-blue/90 text-white">
            J'ai Compris
          </Button>
        </div>
      </div>
    </div>
  )
}
