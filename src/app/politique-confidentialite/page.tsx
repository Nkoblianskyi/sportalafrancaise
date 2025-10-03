import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ModalProvider } from "@/components/modal-provider"
import { Shield, Lock, Eye, UserCheck, Database, Mail } from "lucide-react"

export const metadata = {
  title: "Politique de Confidentialité - sportalafrancaise | Protection des Données",
  description:
    "Découvrez comment sportalafrancaise protège vos données personnelles et respecte votre vie privée conformément au RGPD et à la législation française.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: 'url("/bg.jpg")' }}>
      <div className="min-h-screen bg-black/20 backdrop-blur-[1px]">
        <Header />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-french-blue to-gold-accent text-black p-8">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-4xl font-bold text-balance">Politique de Confidentialité</h1>
              </div>
              <p className="text-xl text-pretty">Votre vie privée est notre priorité - Conformité RGPD garantie</p>
            </div>

            <div className="p-8 space-y-8">
              {/* Introduction */}
              <section>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-blue-800 text-sm">
                    <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString("fr-FR")}
                  </p>
                  <p className="text-blue-800 text-sm mt-2">
                    sportalafrancaise s'engage à protéger votre vie privée et vos données personnelles conformément au
                    Règlement Général sur la Protection des Données (RGPD) et à la législation française en vigueur.
                  </p>
                </div>
              </section>

              {/* Data Controller */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <UserCheck className="w-6 h-6 text-french-blue" />
                  <h2 className="text-2xl font-bold text-french-blue">Responsable du Traitement</h2>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>
                      <strong>Société :</strong> sportalafrancaise
                    </div>
                    <div>
                      <strong>Email :</strong> privacy@sportalafrancaise.com
                    </div>

                  </div>
                </div>
              </section>

              {/* Data Collection */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Database className="w-6 h-6 text-frenchblue" />
                  <h2 className="text-2xl font-bold text-french-blue">Données Collectées</h2>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Données de Navigation</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Adresse IP (anonymisée)</li>
                      <li>• Type de navigateur et version</li>
                      <li>• Pages visitées et temps passé</li>
                      <li>• Référent (site d'origine)</li>
                      <li>• Résolution d'écran et système d'exploitation</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Données Volontaires</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Préférences de cookies</li>
                      <li>• Âge (vérification 18+)</li>
                      <li>• Commentaires ou messages (si applicable)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Purpose of Processing */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="w-6 h-6 text-french-blue" />
                  <h2 className="text-2xl font-bold text-french-blue">Finalités du Traitement</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Fonctionnement du Site</h3>
                      <p className="text-sm text-gray-700">
                        Assurer le bon fonctionnement technique du site et la sécurité des utilisateurs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Amélioration du Service</h3>
                      <p className="text-sm text-gray-700">
                        Analyser l'utilisation du site pour améliorer l'expérience utilisateur et le contenu.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Conformité Légale</h3>
                      <p className="text-sm text-gray-700">
                        Respecter nos obligations légales, notamment la vérification d'âge (18+).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Communication</h3>
                      <p className="text-sm text-gray-700">
                        Répondre à vos questions et vous informer des mises à jour importantes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Legal Basis */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-4">Base Légale du Traitement</h2>

                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Finalité</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Base Légale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Fonctionnement technique</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Intérêt légitime</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Vérification d'âge</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Obligation légale</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Cookies analytiques</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Consentement</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Marketing</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Consentement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-4">Partage des Données</h2>

                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Principe Général</h3>
                    <p className="text-green-800 text-sm">
                      Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers à des fins
                      commerciales.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Exceptions Limitées</h3>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>
                        • <strong>Prestataires techniques :</strong> Hébergement, analytics (Google Analytics)
                      </li>
                      <li>
                        • <strong>Obligations légales :</strong> Autorités compétentes si requis par la loi
                      </li>
                      <li>
                        • <strong>Partenaires :</strong> Données anonymisées uniquement pour les statistiques
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="w-6 h-6 text-french-blue" />
                  <h2 className="text-2xl font-bold text-french-blue">Sécurité des Données</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Mesures Techniques</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Chiffrement SSL/TLS</li>
                      <li>• Serveurs sécurisés</li>
                      <li>• Sauvegardes régulières</li>
                      <li>• Monitoring de sécurité</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Mesures Organisationnelles</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Accès limité aux données</li>
                      <li>• Formation du personnel</li>
                      <li>• Audits de sécurité</li>
                      <li>• Procédures d'incident</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* User Rights */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-6">Vos Droits</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit d'Accès</h3>
                    <p className="text-sm text-gray-700">
                      Obtenir une copie des données personnelles que nous détenons sur vous.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit de Rectification</h3>
                    <p className="text-sm text-gray-700">
                      Corriger ou mettre à jour vos données personnelles inexactes.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit à l'Effacement</h3>
                    <p className="text-sm text-gray-700">
                      Demander la suppression de vos données dans certaines conditions.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit d'Opposition</h3>
                    <p className="text-sm text-gray-700">
                      Vous opposer au traitement de vos données pour des raisons légitimes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-4">Conservation des Données</h2>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>
                      • <strong>Données de navigation :</strong> 24 mois maximum
                    </li>
                    <li>
                      • <strong>Préférences cookies :</strong> 12 mois ou jusqu'à modification
                    </li>
                    <li>
                      • <strong>Vérification d'âge :</strong> Session uniquement (non stockée)
                    </li>
                    <li>
                      • <strong>Logs de sécurité :</strong> 12 mois pour la sécurité du site
                    </li>
                  </ul>
                </div>
              </section>

              {/* Contact */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-6 h-6 text-french-blue" />
                  <h2 className="text-2xl font-bold text-french-blue">Exercer Vos Droits</h2>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 text-sm mb-4">
                    Pour exercer vos droits ou pour toute question concernant cette politique :
                  </p>

                  <div className="space-y-2 text-sm text-gray-700">
                    <div>
                      <strong>Email :</strong> privacy@sportalafrancaise.com
                    </div>
                    <div>
                      <strong>Délai de réponse :</strong> 30 jours maximum
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                    <p className="text-blue-800 text-xs">
                      <strong>Important :</strong> Pour des raisons de sécurité, nous pourrons vous demander de
                      justifier votre identité avant de traiter votre demande.
                    </p>
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
