"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Award, Clock, Users, Zap, Target } from "lucide-react"

export function MainSiteFooter() {
  return (
    <footer className="bg-tech-black text-tech-white py-16 mt-20 border-t-4 border-tech-gold relative">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid-bg opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1150px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="relative">
                <div className=" flex items-center justify-center">
                  <Image src="/logo.png" alt="Drapeau Français" width={32} height={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold tech-heading">
                  <span className="text-blue-600">PARIS</span>
                  <span className="text-tech-white"> MEILLEURS</span>
                  <span className="text-red-600"> SITES</span>
                  <span className="text-tech-white"> FRANÇAIS</span>
                </h3>
                <p className="text-sm text-tech-gray-400 tech-subheading">ANALYSE DE PARIS LEADER EN FRANCE</p>
              </div>
            </Link>
            <p className="text-tech-gray-300 leading-relaxed mb-6 tech-body">
              Analyse algorithmique avancée des meilleures plateformes de paris françaises. Nous fournissons des avis
              techniques complets, une vérification de données en temps réel et des recommandations d'experts pour
              optimiser votre expérience de paris.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-tech-gray-400">
              <div className="flex items-center gap-2 bg-tech-white/5 p-2 border border-tech-gold/20">
                <Users className="w-4 h-4 text-tech-gold" />
                <span className="tech-subheading">50.000+ UTILISATEURS VÉRIFIÉS</span>
              </div>
              <div className="flex items-center gap-2 bg-tech-white/5 p-2 border border-blue-600/20">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="tech-subheading">CERTIFIÉ EXPERT</span>
              </div>
            </div>
          </div>
          
          {/* Trust & Safety */}
          <div>
            <h4 className="text-lg font-bold mb-6 tech-heading flex items-center gap-2 text-blue-600">
              <Shield className="w-5 h-5" />
              PROTOCOLE DE SÉCURITÉ
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-tech-gold/20">
                <Shield className="w-4 h-4 text-tech-gold" />
                <span className="text-sm tech-subheading">LICENCIÉ & RÉGLEMENTÉ</span>
              </div>
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-blue-600/20">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm tech-subheading">SÉCURISÉ & VÉRIFIÉ</span>
              </div>
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-tech-gold/20">
                <Award className="w-4 h-4 text-tech-gold" />
                <span className="text-sm tech-subheading">VALIDÉ PAR DES EXPERTS</span>
              </div>
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-blue-600/20">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm tech-subheading">MISES À JOUR EN TEMPS RÉEL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gambling Partners */}
        <div className="border-t-2 border-tech-gold/30 pt-12 mb-12">
          <h4 className="text-xl font-bold mb-8 text-center text-tech-gold tech-heading">
            PARTENAIRES JEU RESPONSABLE
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <Link href="https://anj.fr/" className="group">
              <div className="bg-transparent border-2 border-tech-black p-4 shadow-tech-medium group-hover:shadow-tech-glow transition-all duration-300 transform group-hover:scale-105 relative">
                <img
                  src="/logo-anj.svg"
                  alt="ANJ - Autorité Nationale des Jeux"
                  className="h-8 md:h-10 object-contain"
                />

              </div>
            </Link>
            <Link href="https://www.joueurs-info-service.fr/" className="group">
              <div className="bg-transparent border-2 border-tech-black p-4 shadow-tech-medium group-hover:shadow-tech-glow transition-all duration-300 transform group-hover:scale-105 relative">
                <img src="/jouers-info-service.png" alt="Joueurs Info Service" className="h-8 md:h-10 object-contain" />

              </div>
            </Link>
            {/* <Link href="https://www.sos-joueurs.org/" className="group">
              <div className="bg-tech-white border-2 border-tech-black p-4 shadow-tech-medium group-hover:shadow-tech-glow transition-all duration-300 transform group-hover:scale-105 relative">
                <img src="/logo-sos-joueurs.svg" alt="SOS Joueurs" className="h-6 md:h-8 object-contain" />
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-600"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-tech-gold"></div>
              </div>
            </Link> */}
            <Link href="https://www.mediateur-jeux.fr/" className="group">
              <div className="bg-transparentborder-2 border-tech-black p-4 shadow-tech-medium group-hover:shadow-tech-glow transition-all duration-300 transform group-hover:scale-105 relative">
                <img
                  src="/logo-mediateurs-des-jeux.png"
                  alt="Médiateur des Jeux"
                  className="h-8 md:h-10 object-contain"
                />

              </div>
            </Link>
            <Link href="https://www.adictel.eu/" className="group">
              <div className="bg-transparent border-2 border-tech-black p-4 shadow-tech-medium group-hover:shadow-tech-glow transition-all duration-300 transform group-hover:scale-105 relative">
                <img src="/logo-adictel.svg" alt="ADICTEL" className="h-8 md:h-10 object-contain" />

              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 pt-8 text-center border-blue-600/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <p className="text-tech-gray-400 text-sm tech-body">
              © 2025 MEILLEURSSITESPARISFRANCAIS.FR | TOUS DROITS RÉSERVÉS
            </p>
            <div className="flex items-center gap-6 text-sm text-tech-gray-400">
              <span className="tech-subheading">DÉVELOPPÉ EN FRANCE</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 border border-tech-black bg-blue-600"></div>
                <div className="w-4 h-3 bg-tech-white border border-tech-black"></div>
                <div className="w-4 h-3 border border-tech-black bg-red-600"></div>
              </div>
            </div>
          </div>
          <div className="border-2 border-blue-600 p-6 relative bg-blue-600/10">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-blue-600"></div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-tech-gold"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-tech-gold"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-600"></div>

            <p className="font-bold text-sm mb-2 tech-heading text-blue-600">
              🔞 18+ | JOUEURS FRANÇAIS UNIQUEMENT | LE JEU PEUT CRÉER UNE DÉPENDANCE — JOUEZ EN SÉCURITÉ
            </p>
            <p className="text-xs tech-body text-blue-600">
              SI VOUS OU QUELQU'UN QUE VOUS CONNAISSEZ AVEZ UN PROBLÈME DE JEU, VEUILLEZ CHERCHER DE L'AIDE.
              <Link href="/responsible-gaming" className="underline hover:text-tech-white ml-2 tech-subheading">
                OBTENIR DU SOUTIEN
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
