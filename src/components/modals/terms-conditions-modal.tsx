"use client"

import { Button } from "@/components/ui/button"
import { X, FileText } from "lucide-react"

interface TermsConditionsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsConditionsModal({ isOpen, onClose }: TermsConditionsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto animate-slide-up">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-french-blue" />
              <h2 className="text-xl font-bold text-french-blue">Conditions d'Utilisation</h2>
            </div>
            <Button onClick={onClose} variant="ghost" size="sm">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-gray-900">1. Acceptation des Conditions</h3>
            <p className="text-gray-700">
              En accédant et en utilisant le site sportalafrancaise, vous acceptez d'être lié par ces conditions
              d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">2. Description du Service</h3>
            <p className="text-gray-700">
              sportalafrancaise est un site de comparaison et d'information sur les sites de paris sportifs licenciés en
              France. Nous fournissons des avis, des comparaisons et des informations éducatives sur les opérateurs de
              jeux en ligne.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">3. Âge Minimum</h3>
            <p className="text-gray-700">
              Vous devez avoir au moins 18 ans pour utiliser ce site. En utilisant notre service, vous confirmez que
              vous avez l'âge légal requis dans votre juridiction pour accéder à du contenu lié aux paris sportifs.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">4. Utilisation Acceptable</h3>
            <div className="space-y-2">
              <p className="text-gray-700">Vous vous engagez à :</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Utiliser le site de manière légale et responsable</li>
                <li>Ne pas tenter de contourner les mesures de sécurité</li>
                <li>Ne pas utiliser le site à des fins commerciales non autorisées</li>
                <li>Respecter les droits de propriété intellectuelle</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">5. Liens d'Affiliation</h3>
            <p className="text-gray-700">
              Notre site contient des liens d'affiliation vers des opérateurs de paris sportifs. Nous pouvons recevoir
              une commission si vous vous inscrivez via nos liens. Cette relation n'affecte pas l'objectivité de nos
              évaluations.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">6. Avertissement sur les Risques</h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-medium">
                Les paris sportifs comportent des risques financiers. Ne pariez jamais plus que ce que vous pouvez vous
                permettre de perdre. Si vous pensez avoir un problème de jeu, demandez de l'aide.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">7. Limitation de Responsabilité</h3>
            <p className="text-gray-700">
              sportalafrancaise ne peut être tenu responsable des pertes financières résultant de l'utilisation des
              informations fournies sur notre site. Les utilisateurs sont responsables de leurs propres décisions de
              paris.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">8. Propriété Intellectuelle</h3>
            <p className="text-gray-700">
              Tout le contenu de ce site, y compris les textes, images, logos et design, est protégé par le droit
              d'auteur et appartient à sportalafrancaise ou à ses partenaires.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">9. Modifications</h3>
            <p className="text-gray-700">
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet
              dès leur publication sur le site.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">10. Contact</h3>
            <p className="text-gray-700">
              Pour toute question concernant ces conditions d'utilisation, contactez-nous à :
              contact@sportalafrancaise.com
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-600">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <Button onClick={onClose} className="w-full bg-french-blue hover:bg-french-blue/90 text-white">
            Fermer
          </Button>
        </div>
      </div>
    </div>
  )
}
