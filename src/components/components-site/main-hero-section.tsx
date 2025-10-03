"use client"

import { Award, TrendingUp } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function MainHeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      {/* Desktop Hero */}
      <div className="hidden lg:block relative overflow-hidden mb-2">
        <div className="bg-white/70 shadow-lg max-w-[1150px] mx-auto rounded-lg mt-[70px]">
          <div className="relative px-4 py-6">
            <div className="relative z-10 text-center">
              {/* Main Heading */}
              <div className="mb-6 ">
                <h1 className="text-2xl xl:text-3xl font-bold mb-3 text-blue-600 uppercase">
                  Meilleurs <span className="text-white">Sites de Paris Français</span>{" "}
                  <span className="text-red-600">2025</span>
                </h1>

                <div className="w-20 h-0.5 bg-green-600 mx-auto mb-4"></div>

                <p className="text-base text-black max-w-3xl mx-auto leading-relaxed mb-4">
                  Trouver des bookmakers fiables nécessite une expertise et une recherche approfondie. Heureusement,
                  notre analyse complète élimine les conjectures en fournissant des informations détaillées sur les
                  principales plateformes de paris françaises.
                </p>

                {/* Trust Indicators */}
                <div className="mt-8">
                  <div className="flex justify-center items-center gap-1 sm:gap-3">
                    <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                      <Image src="/flag.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
                      <span className="text-[10px] sm:text-xs font-bold tech-subheading">100% Légal</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                      <Award className="w-3 h-3 text-black" />
                      <span className="text-[10px] sm:text-xs font-bold tech-subheading">Bonus Élevés</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                      <TrendingUp className="w-3 h-3 text-black" />
                      <span className="text-[10px] sm:text-xs  font-bold tech-subheading">Retraits Rapides</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-blue-600 font-bold">Mis à jour : {getCurrentMonthYear()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Hero */}
      <div className="hidden md:block lg:hidden mb-2">
        <div className="bg-white/70 shadow-lg max-w-[1150px] mx-auto rounded-lg mt-20">
          <div className="px-4 py-4 text-center">
            <h1 className="text-lg md:text-3xl font-bold mb-3 text-blue-600 uppercase">
              Meilleurs <span className="text-white">Sites de Paris Français</span>{" "}
              <span className="text-red-600">2025</span>
            </h1>

            <p className="text-sm md:text-base text-black mb-4 leading-relaxed max-w-2xl mx-auto">
              Trouver des bookmakers fiables nécessite une expertise et une recherche approfondie. Heureusement, notre
              analyse complète élimine les conjectures en fournissant des informations détaillées sur les principales
              plateformes de paris françaises.
            </p>
            {/* Trust Indicators */}
            <div className="mt-6">
              <div className="flex justify-center items-center gap-1 sm:gap-3">
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <Image src="/flag.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">100% Légal</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <Award className="w-3 h-3 text-black" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">Bonus Élevés</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <TrendingUp className="w-3 h-3 text-black" />
                  <span className="text-[10px] sm:text-xs  font-bold tech-subheading">Retraits Rapides</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs text-blue-600 font-bold">Mis à jour : {getCurrentMonthYear()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero - With Background Image */}
      <div className="lg:hidden md:hidden  relative overflow-hidden rounded-lg mx-2">
        {/* Background Image for Mobile */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}

        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10  rounded-lg mt-10">
          <div className="px-4 py-4 text-center">
            <h1 className="text-base font-bold mb-3 text-blue-600 uppercase">
              Meilleurs <span className="text-white">Sites de Paris Français</span>{" "} <span className="text-red-600">2025</span>
            </h1>

            {/* Trust Indicators */}
            <div className="mt-2">
              <div className="flex justify-center items-center gap-1 sm:gap-3">
                <div className="flex items-center gap-1 sm:gap-2 text-white px-1 sm:px-2 py-1 flex-shrink-0">
                  <Image src="/flag.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">100% Légal</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-white px-1 sm:px-2 py-1 flex-shrink-0">
                  <Award className="w-3 h-3 text-white" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">Bonus Élevés</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-white px-1 sm:px-2 py-1 flex-shrink-0">
                  <TrendingUp className="w-3 h-3 text-white" />
                  <span className="text-[10px] sm:text-xs  font-bold tech-subheading">Retraits Rapides</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs text-blue-600 font-bold">Mis à jour : {getCurrentMonthYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
