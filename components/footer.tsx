"use client"

import Link from "next/link"
import Image from "next/image"
import { regulatoryOrgs } from "@/data/regulatory-orgs"
import { Shield, Phone, AlertTriangle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 backdrop-blur-sm border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/favicon.ico" width={40} height={40} alt="Logo de l'Autorité Nationale des Jeux" />
              <span className="text-xl font-bold flex">
                <span className="text-blue-600">Sporta</span>
                <span className="text-white">La</span>
                <span className="text-french-red">Francaise</span>
              </span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Votre guide de confiance pour les meilleurs sites de paris sportifs licenciés ANJ en France.
            </p>
            <div className="flex items-center space-x-2 text-sm text-green-600">
              <Shield className="w-4 h-4" />
              <span>100% Sites Licenciés ANJ</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm text-gray-400 hover:text-french-blue transition-colors">
                Accueil
              </Link>
              <Link href="/a-propos" className="block text-sm text-gray-400 hover:text-french-blue transition-colors">
                À Propos
              </Link>
              <Link
                href="/politique-cookies"
                className="block text-sm text-gray-400 hover:text-french-blue transition-colors"
              >
                Politique Cookies
              </Link>
              <Link
                href="/politique-confidentialite"
                className="block text-sm text-gray-400 hover:text-french-blue transition-colors"
              >
                Confidentialité
              </Link>
            </nav>
          </div>

          {/* Responsible Gaming */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white mb-4">Jeu Responsable</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 mb-1">Interdit aux mineurs</p>
                  <p className="text-xs text-gray-300">18 ans et plus uniquement</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 mb-1">Aide aux joueurs</p>
                  <p className="text-xs text-gray-300">09 74 75 13 13 (gratuit)</p>
                </div>
              </div>

              <div className="text-xs text-gray-400">
                <p>Jouer comporte des risques.</p>
                <p>Ne pariez que ce que vous pouvez perdre.</p>
              </div>
            </div>
          </div>

          {/* Contact */}
        </div>

        {/* Regulatory Organizations */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-center font-semibold text-white mb-6">Organismes de Régulation et de Protection</h3>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {regulatoryOrgs.map((org, index) => (
              <a
                key={index}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3  border border-gray-200 rounded-lg hover:border-french-blue hover:shadow-md transition-all duration-200 group"
              >
                <Image
                  src={org.src || "/placeholder.svg?height=40&width=120&query=regulatory organization logo"}
                  alt={org.alt}
                  width={120}
                  height={40}
                  className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-xs text-gray-500 mb-2">
              Sites partenaires licenciés et régulés par l'Autorité Nationale des Jeux (ANJ)
            </p>
            <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
              <span>• Jeu responsable</span>
              <span>• Protection des joueurs</span>
              <span>• Sécurité garantie</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} sportalafrancaise. Tous droits réservés.</p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Dernière mise à jour: {new Date().toLocaleDateString("fr-FR")}</span>
              <span>•</span>
              <span>Conformité RGPD</span>
              <span>•</span>
              <span>Sites licenciés ANJ uniquement</span>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-yellow-800">
                <p className="font-medium mb-1">Avertissement Important</p>
                <p>
                  Les paris sportifs comportent des risques. La dépendance aux jeux est une maladie. Pour être aidé,
                  appelez le 09 74 75 13 13 (appel non surtaxé). Interdiction de vente de tabac aux mineurs de moins de
                  18 ans. La preuve de majorité de l'acheteur est exigée au moment de la vente en ligne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
