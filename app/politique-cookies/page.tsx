import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ModalProvider } from "@/components/modal-provider"
import { Cookie, Settings, Shield, Info } from "lucide-react"

export const metadata = {
  title: "Politique de Cookies - sportalafrancaise | Gestion des Données",
  description:
    "Découvrez comment sportalafrancaise utilise les cookies pour améliorer votre expérience utilisateur et respecter votre vie privée selon le RGPD.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: 'url("/bg.jpg")' }}>
      <div className="min-h-screen bg-black/20 backdrop-blur-[1px]">
        <Header />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-french-blue to-gold-accent text-white p-8">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-4xl font-bold text-balance text-black">Politique de Cookies</h1>
              </div>
              <p className="text-xl text-pretty text-black">
                Transparence totale sur l'utilisation des cookies sur notre site
              </p>
            </div>

            <div className="p-8 space-y-8">
              {/* Introduction */}
              <section>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-lg font-semibold text-blue-900 mb-2">Information Importante</h2>
                      <p className="text-blue-800 text-sm">
                        Cette politique explique comment sportalafrancaise utilise les cookies et technologies
                        similaires pour améliorer votre expérience de navigation et respecter vos droits à la vie
                        privée.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What are cookies */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-4">Qu'est-ce qu'un Cookie ?</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>
                    Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone)
                    lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et
                    préférences pendant une période donnée.
                  </p>
                </div>
              </section>

              {/* Types of cookies */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-6">Types de Cookies Utilisés</h2>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Shield className="w-6 h-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Cookies Nécessaires</h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Obligatoires</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                    </p>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="font-medium text-gray-900 mb-2">Exemples :</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Cookies de session pour maintenir votre connexion</li>
                        <li>• Cookies de sécurité pour prévenir les attaques</li>
                        <li>• Cookies de préférences linguistiques</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Settings className="w-6 h-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Cookies Analytiques</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Optionnels</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                    </p>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="font-medium text-gray-900 mb-2">Exemples :</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Google Analytics (données anonymisées)</li>
                        <li>• Statistiques de pages visitées</li>
                        <li>• Temps passé sur le site</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Cookie className="w-6 h-6 text-purple-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Cookies Marketing</h3>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Optionnels</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      Ces cookies permettent de personnaliser les publicités et mesurer l'efficacité des campagnes.
                    </p>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="font-medium text-gray-900 mb-2">Exemples :</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Cookies de remarketing</li>
                        <li>• Suivi des conversions</li>
                        <li>• Personnalisation publicitaire</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Settings className="w-6 h-6 text-orange-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Cookies de Préférences</h3>
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Optionnels</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      Ces cookies mémorisent vos choix et préférences pour personnaliser votre expérience.
                    </p>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="font-medium text-gray-900 mb-2">Exemples :</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Préférences d'affichage</li>
                        <li>• Paramètres de compte</li>
                        <li>• Historique de navigation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookie management */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-4">Gestion des Cookies</h2>

                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Via Notre Bannière</h3>
                    <p className="text-green-800 text-sm">
                      Lors de votre première visite, une bannière vous permet de choisir quels cookies accepter. Vous
                      pouvez modifier vos préférences à tout moment.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Via Votre Navigateur</h3>
                    <p className="text-blue-800 text-sm mb-2">
                      Vous pouvez également gérer les cookies directement dans les paramètres de votre navigateur :
                    </p>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>
                        • <strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies
                      </li>
                      <li>
                        • <strong>Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies
                      </li>
                      <li>
                        • <strong>Safari :</strong> Préférences → Confidentialité → Cookies
                      </li>
                      <li>
                        • <strong>Edge :</strong> Paramètres → Cookies et autorisations de site
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Third party cookies */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-4">Cookies Tiers</h2>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm mb-3">
                    Notre site peut contenir des cookies provenant de services tiers :
                  </p>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>
                      • <strong>Google Analytics :</strong> Analyse d'audience (anonymisée)
                    </li>
                    <li>
                      • <strong>Réseaux sociaux :</strong> Boutons de partage
                    </li>
                    <li>
                      • <strong>Partenaires :</strong> Liens d'affiliation vers les bookmakers
                    </li>
                  </ul>
                </div>
              </section>

              {/* Data retention */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-4">Durée de Conservation</h2>

                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Type de Cookie</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Durée</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Cookies de session</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Supprimés à la fermeture du navigateur</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Cookies analytiques</td>
                        <td className="px-4 py-3 text-sm text-gray-700">24 mois maximum</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Cookies marketing</td>
                        <td className="px-4 py-3 text-sm text-gray-700">12 mois maximum</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Cookies de préférences</td>
                        <td className="px-4 py-3 text-sm text-gray-700">12 mois maximum</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-4">Contact</h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 text-sm mb-2">
                    Pour toute question concernant notre politique de cookies :
                  </p>
                  <div className="text-sm text-gray-700">
                    <div>
                      <strong>Email :</strong> privacy@sportalafrancaise.com
                    </div>
                    <div>
                      <strong>Mise à jour :</strong> {new Date().toLocaleDateString("fr-FR")}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />

        <ModalProvider />
      </div>
    </div>
  )
}
