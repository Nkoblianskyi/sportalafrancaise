import { Shield, Award, Users } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="text-center mb-12 animate-fade-in">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-french-blue mb-4 text-balance">
          GUIDE COMPLET DES PARIS SPORTIFS EN FRANCE
        </h1>

        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-pretty">
          Explorez notre analyse approfondie des plateformes de paris sportifs françaises. Évaluations expertes,
          comparatifs exclusifs et recommandations personnalisées pour maximiser vos gains en toute sécurité.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
            <Image src="/flag.png" width={20} height={20} alt="Logo de l'Autorité Nationale des Jeux"  />
            <span className="text-sm font-medium text-green-800">Licence ANJ Vérifiée</span>
          </div>

          <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">SSL Sécurisé</span>
          </div>

          <div className="flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-full">
            <Users className="w-5 h-5 text-red-600" />
            <span className="text-sm font-medium text-red-800">18+ Uniquement</span>
          </div>
        </div>

        <div className="text-sm text-gray-600">Dernière mise à jour: {new Date().toLocaleDateString("fr-FR")}</div>
      </div>
    </section>
  )
}
