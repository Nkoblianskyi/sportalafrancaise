import { Shield, Award, Gift, Headphones, Lock, Clock } from "lucide-react"

export function SelectionCriteria() {
  const criteria = [
    {
      icon: Shield,
      title: "Licence ANJ",
      description:
        "Vérification de la licence officielle délivrée par l'Autorité Nationale des Jeux pour garantir la légalité et la sécurité.",
    },
    {
      icon: Award,
      title: "Qualité du Service",
      description:
        "Évaluation complète de l'interface utilisateur, de la facilité de navigation et de l'expérience globale.",
    },
    {
      icon: Gift,
      title: "Bonus et Promotions",
      description:
        "Analyse détaillée des offres de bienvenue, conditions de mise et promotions régulières disponibles.",
    },
    {
      icon: Headphones,
      title: "Support Client",
      description: "Test de la réactivité, disponibilité et qualité du service client via chat, email et téléphone.",
    },
    {
      icon: Lock,
      title: "Sécurité",
      description: "Vérification des protocoles de sécurité, chiffrement SSL et protection des données personnelles.",
    },
    {
      icon: Clock,
      title: "Rapidité des Retraits",
      description: "Évaluation des délais de traitement des retraits et des méthodes de paiement disponibles.",
    },
  ]

  return (
    <section id="criteria" className="mb-12">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-french-blue text-center mb-8">Nos Critères de Sélection</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((criterion, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-gray-200 hover:border-french-blue transition-colors"
            >
              <div className="w-16 h-16 bg-french-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <criterion.icon className="w-8 h-8 text-french-blue" />
              </div>

              <h3 className="text-lg font-bold text-french-blue mb-3">{criterion.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{criterion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
