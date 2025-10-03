import { Shield, TrendingUp, Users, Clock, Award, AlertTriangle } from "lucide-react"

export function InformativeSection() {
  return (
    <section className="mb-12 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Guide Complet des Paris Sportifs en France</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez tout ce que vous devez savoir sur les paris sportifs légaux en France, les réglementations ANJ et
          nos conseils d'experts pour parier en toute sécurité.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <Shield className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Licence ANJ Obligatoire</h3>
          <p className="text-gray-700">
            Tous les sites recommandés possèdent une licence officielle de l'Autorité Nationale des Jeux, garantissant
            la sécurité et la légalité de vos paris.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <TrendingUp className="w-8 h-8 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Cotes Compétitives</h3>
          <p className="text-gray-700">
            Nous analysons quotidiennement les cotes pour vous présenter les bookmakers offrant les meilleures
            opportunités de gains sur vos sports favoris.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <Users className="w-8 h-8 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Support Client 24/7</h3>
          <p className="text-gray-700">
            Tous nos partenaires proposent un service client réactif en français, disponible par chat, email ou
            téléphone pour répondre à vos questions.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
          <Clock className="w-8 h-8 text-orange-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Retraits Rapides</h3>
          <p className="text-gray-700">
            Délais de retrait optimisés avec des méthodes de paiement sécurisées : virement bancaire, e-wallets et
            cartes bancaires acceptées.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
          <Award className="w-8 h-8 text-red-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Bonus Exclusifs</h3>
          <p className="text-gray-700">
            Profitez d'offres de bienvenue généreuses et de promotions régulières négociées spécialement pour les
            utilisateurs de notre comparateur.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200">
          <AlertTriangle className="w-8 h-8 text-yellow-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Jeu Responsable</h3>
          <p className="text-gray-700">
            Outils de contrôle disponibles : limites de dépôt, auto-exclusion, et liens vers des organismes d'aide pour
            un jeu maîtrisé.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <Shield className="w-6 h-6 mr-2" />
          Pourquoi Choisir un Site Agréé ANJ ?
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Protection de vos données personnelles et bancaires
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Garantie de paiement de vos gains
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Respect des règles du jeu responsable
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Contrôles réguliers par les autorités françaises
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Résolution des litiges par la médiation ANJ
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Transparence sur les cotes et les conditions
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
