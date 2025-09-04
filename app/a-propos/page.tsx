import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ModalProvider } from "@/components/modal-provider"
import { Users, Shield, Award, Target, Heart, CheckCircle } from "lucide-react"

export const metadata = {
  title: "À Propos - sportalafrancaise | Notre Mission et Expertise",
  description:
    "Découvrez l'équipe d'experts derrière sportalafrancaise, notre mission de promouvoir le jeu responsable et notre engagement envers la transparence dans l'industrie des paris sportifs.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: 'url("/bg.jpg")' }}>
      <div className="min-h-screen bg-black/20 backdrop-blur-[1px]">
        <Header />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-french-blue to-gold-accent text-white p-8">
              <h1 className="text-4xl font-bold mb-4 text-balance">À Propos de sportalafrancaise</h1>
              <p className="text-xl text-pretty">
                Votre guide de confiance pour naviguer dans l'univers des paris sportifs en France
              </p>
            </div>

            <div className="p-8 space-y-8">
              {/* Mission Section */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-8 h-8 text-french-blue" />
                  <h2 className="text-2xl font-bold text-french-blue">Notre Mission</h2>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    sportalafrancaise s'engage à fournir des informations objectives, transparentes et fiables sur les
                    sites de paris sportifs licenciés en France. Notre mission est d'aider les parieurs à faire des
                    choix éclairés tout en promouvant le jeu responsable et la sécurité en ligne.
                  </p>
                </div>
              </section>

              {/* Values Section */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Heart className="w-8 h-8 text-french-blue" />
                  <h2 className="text-2xl font-bold text-french-blue">Nos Valeurs</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Shield className="w-6 h-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Transparence</h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Nous divulguons clairement nos relations commerciales et nos méthodes d'évaluation pour maintenir
                      la confiance de nos utilisateurs.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="w-6 h-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Expertise</h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Notre équipe d'experts analyse rigoureusement chaque site selon des critères stricts de sécurité,
                      qualité et conformité réglementaire.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Users className="w-6 h-6 text-purple-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Responsabilité</h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Nous promouvons activement le jeu responsable et fournissons des ressources d'aide aux joueurs en
                      difficulté.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Conformité</h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Nous ne recommandons que des sites licenciés par l'ANJ et conformes à la réglementation française
                      en vigueur.
                    </p>
                  </div>
                </div>
              </section>

              {/* Methodology Section */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-6">Notre Méthodologie</h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-french-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Vérification des Licences</h3>
                      <p className="text-gray-700 text-sm">
                        Nous vérifions que chaque site possède une licence ANJ valide et respecte la réglementation
                        française.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-french-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Tests Approfondis</h3>
                      <p className="text-gray-700 text-sm">
                        Notre équipe teste personnellement chaque site : inscription, dépôts, paris, retraits et service
                        client.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-french-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Évaluation Continue</h3>
                      <p className="text-gray-700 text-sm">
                        Nous mettons à jour régulièrement nos évaluations pour refléter les changements et améliorations
                        des opérateurs.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Team Section */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-6">Notre Équipe</h2>

                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Notre équipe est composée d'experts en paris sportifs, d'analystes financiers et de spécialistes en
                    sécurité informatique. Ensemble, nous apportons plus de 15 ans d'expérience dans l'industrie du jeu
                    en ligne.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-french-blue">15+</div>
                      <div className="text-sm text-gray-600">Années d'expérience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-french-blue">50+</div>
                      <div className="text-sm text-gray-600">Sites évalués</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-french-blue">100%</div>
                      <div className="text-sm text-gray-600">Sites licenciés ANJ</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section>
                <h2 className="text-2xl font-bold text-french-blue mb-6">Nous Contacter</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Vous avez des questions, suggestions ou souhaitez signaler un problème ? N'hésitez pas à nous
                    contacter.
                  </p>

                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Email :</strong> contact@sportalafrancaise.com
                    </div>
                    <div>
                      <strong>Réponse :</strong> Sous 24-48 heures
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
