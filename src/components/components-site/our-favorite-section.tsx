"use client"

import { Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { bettingSites } from "@/data/mock-data"


export function OurFavoriteSection() {
  const favoriteSite = bettingSites[0] // Перший сайт з мок даних

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const renderStars = (rating: number, size = "w-4 h-4") => {
    const value = Math.max(0, Math.min(10, rating)) / 2 // 0..5
    const full = Math.floor(value)
    const frac = value - full

    return Array.from({ length: 5 }, (_, i) => {
      let fillPct = 0
      if (i < full) fillPct = 1
      else if (i === full) fillPct = Math.max(0, frac)

      return (
        <div key={i} className={`relative inline-block ${size}`}>
          {/* Контур завжди */}
          <Star className={`absolute inset-0 ${size} text-tech-gold`} fill="transparent" strokeWidth={1.75} />
          {/* Заповнення обрізкою по ширині */}
          {fillPct > 0 && (
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPct * 100}%` }}>
              <Star className={`${size} text-tech-gold`} fill="currentColor" strokeWidth={1.75} />
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <div className="mt-12 max-w-[1150px] mx-auto px-2">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="bg-tech-white/95 backdrop-blur-sm rounded-lg p-4 lg:p-6 shadow-tech-strong border-2 border-tech-gold relative">
          {/* Corner accents */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-600"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-600"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-600"></div>

          <div className="flex items-center justify-center gap-2 lg:gap-3 mb-2 lg:mb-3">
            <Award className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-tech-black tech-heading">
              NOTRE <span className="text-blue-600">FAVORI</span>
            </h2>
            <Award className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
          </div>
          <p className="text-sm lg:text-base text-tech-gray-700 tech-body">
            Recommandation de l'éditeur basée sur une analyse approfondie et l'expérience utilisateur
          </p>
        </div>
      </div>

      {/* Favorite Site Card - Desktop */}
      <div className="hidden lg:block tech-card border-2 border-tech-gold tech-glow relative overflow-hidden cursor-pointer mb-2">
        <Link href={favoriteSite.link} target="_blank" rel="noopener referrer" className="block">
          {/* Main Content */}
          <div className="h-40 flex items-center py-6 px-4 xl:px-6 bg-tech-white relative">
            {/* PLATFORM - 30% */}
            <div className="flex-[0_0_28%] xl:flex-[0_0_30%] pr-2 flex justify-center items-center h-full relative z-10 mt-4">
              <div className="bg-tech-white border-2 border-tech-black p-3 xl:p-4 shadow-tech-medium relative">
                <img
                  src={favoriteSite.logo || "/placeholder.svg"}
                  alt={favoriteSite.name}
                  className="w-32 xl:w-44 h-14 xl:h-20 object-contain"
                />
                {/* Tech corner accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-600"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-600"></div>
              </div>
            </div>

            {/* Rank and Status Badges */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              <div
                className="tech-badge px-2 xl:px-4 py-1 text-xs font-bold whitespace-nowrap"

              >
                TOP BOOKMAKER
              </div>
            </div>

            {/* WELCOME PACKAGE - 25% */}
            <div className="flex-[0_0_25%] px-1 xl:px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-[10px] xl:text-xs text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">
                Offre De Bienvenue
              </div>
              <div className="text-lg  font-bold text-tech-black mb-1 tech-heading leading-tight">
                {favoriteSite.bonus}
              </div>
              <div className="text-xs font-bold text-tech-black tech-heading leading-tight">
                {favoriteSite.welcomeOffer}
              </div>
            </div>

            {/* RATING - 12% */}
            <div className="flex-[0_0_12%] px-1 xl:px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-3xl xl:text-5xl font-bold leading-none mb-1 tech-heading text-tech-black">
                {favoriteSite.rating.toFixed(1)}
              </div>
              <div className="text-[10px] xl:text-xs font-bold text-tech-gray-600 tech-subheading">SCORE</div>
            </div>

            {/* USER SCORE - 20% */}
            <div className="flex-[0_0_20%] px-1 xl:px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-[10px] xl:text-xs text-tech-gray-600 mb-1 xl:mb-2 tech-subheading">
                ({formatVotes(favoriteSite.votes)})
              </div>
              <div className="flex justify-center gap-0.5 xl:gap-1 mb-1 xl:mb-2">
                {renderStars(favoriteSite.userRating, "w-3 xl:w-5 h-3 xl:h-5")}
              </div>
              <div className="text-xs xl:text-sm text-tech-black font-bold tech-subheading">EXCELLENT</div>
            </div>

            {/* ACCESS - 15% */}
            <div className="flex-[0_0_15%] pl-1 xl:pl-2 text-center flex flex-col justify-center items-center h-full relative z-10">
              <div className="w-full">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 w-full h-10 xl:h-12 mb-1 xl:mb-2 text-xs xl:text-sm font-bold tech-subheading shadow-lg">
                  RÉCLAMER
                </Button>
                <div className="text-[9px] xl:text-xs text-tech-gray-600 font-bold tech-subheading">VISITER SITE</div>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
        <div className="px-4 xl:px-6 pb-3 xl:pb-4 border-t border-neutral-200 bg-neutral-50">
          <p className="text-xs text-neutral-500 text-center py-2">
            18+ | Jeu sécurisé |{" "}
            <a
              href="https://www.arjel.fr/"
              target="_blank"
              rel="noopener referrer"
              className="text-brand-600 hover:text-brand-700 underline"
            >
              arjel.fr
            </a>
          </p>
        </div>
      </div>

      {/* Favorite Site Card - Tablet */}
      <div className="hidden md:block lg:hidden tech-card border-2 border-tech-gold tech-glow relative overflow-hidden cursor-pointer mb-2">
        <Link href={favoriteSite.link} target="_blank" rel="noopener referrer" className="block">
          <div className="pt-6 pb-4 px-3 bg-tech-white relative">
            {/* Badges */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              <div
                className="tech-badge px-2 py-0.5 text-xs font-bold whitespace-nowrap"
              >
                TOP BOOKMAKER
              </div>
            </div>

            <div className="grid grid-cols-12 gap-1 items-center relative z-10">
              {/* Logo */}
              <div className="col-span-3 flex justify-center">
                <div className="bg-tech-white border-2 border-tech-black p-2 shadow-tech-soft w-full mt-2 relative">
                  <img
                    src={favoriteSite.logo || "/placeholder.svg"}
                    alt={favoriteSite.name}
                    className="w-full h-10 object-contain"
                  />
                  <div className="absolute -top-1 -left-1 w-1 h-1 bg-blue-600"></div>
                  <div className="absolute -top-1 -right-1 w-1 h-1 bg-red-600"></div>
                </div>
              </div>

              {/* Bonus */}
              <div className="col-span-3 text-center px-1">
                <div className="text-[9px] text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">Offre De Bienvenue</div>
                <div className="text-base font-bold text-tech-black mb-0.5 tech-heading leading-tight">
                  {favoriteSite.bonus}
                </div>
                <div className="text-xs font-bold text-tech-black tech-heading leading-tight">
                  {favoriteSite.welcomeOffer}
                </div>
              </div>

              {/* Score */}
              <div className="col-span-2 text-center">
                <div className="text-lg font-bold leading-none tech-heading text-tech-black">
                  {favoriteSite.rating.toFixed(1)}
                </div>
                <div className="text-[9px] font-bold text-tech-gray-600 tech-subheading">SCORE</div>
              </div>

              {/* Rating */}
              <div className="col-span-2 text-center px-1">
                <div className="text-[9px] text-tech-gray-600 mb-1 tech-subheading truncate">
                  ({formatVotes(favoriteSite.votes)})
                </div>
                <div className="flex justify-center gap-0.5 mb-1">
                  {renderStars(favoriteSite.userRating, "w-2.5 h-2.5")}
                </div>
              </div>

              {/* Button */}
              <div className="col-span-2 text-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 px-1 py-1 text-[10px] w-full font-bold tech-subheading shadow-lg">
                  RÉCLAMER
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
        <div className="px-3 pb-3 border-t border-neutral-200 bg-neutral-50">
          <p className="text-xs text-neutral-500 text-center py-2">
            18+ | Jeu sécurisé |{" "}
            <a
              href="https://www.arjel.fr/"
              target="_blank"
              rel="noopener referrer"
              className="text-brand-600 hover:text-brand-700 underline"
            >
              arjel.fr
            </a>
          </p>
        </div>
      </div>

      {/* Favorite Site Card - Mobile */}
      <div className="md:hidden tech-card border-2 border-tech-gold tech-glow relative overflow-hidden cursor-pointer mb-1">
        <Link href={favoriteSite.link} target="_blank" rel="noopener referrer" className="block">
          <div className="p-2 relative bg-tech-white">
            {/* Badges */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              <div
                className="tech-badge px-2 py-0.5 text-[10px] font-bold whitespace-nowrap"

              >
                TOP BOOKMAKER
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-2 items-center mt-5 relative z-10">
              {/* Logo */}
              <div className="flex justify-center">
                <div className="bg-tech-white border-2 border-tech-black p-2 shadow-tech-soft relative">
                  <img
                    src={favoriteSite.logo || "/placeholder.svg"}
                    alt={favoriteSite.name}
                    className="h-14 w-auto object-contain"
                  />
                  <div className="absolute -top-1 -left-1 w-1 h-1 bg-blue-600"></div>
                  <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-red-600"></div>
                </div>
              </div>

              {/* Bonus */}
              <div className="text-center">
                <div className="text-[10px] text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">Offre De Bienvenue</div>
                <div className="text-base font-bold text-tech-black leading-tight mb-1 tech-heading">
                  {favoriteSite.bonus}
                </div>
                <div className="text-xs font-bold text-tech-black leading-tight tech-heading">
                  {favoriteSite.welcomeOffer}
                </div>
              </div>
            </div>

            {/* Rating Row */}
            <div className="grid grid-cols-3 items-center justify-center gap-1 mt-1 pt-1 border-t-2 border-tech-gray-200 relative z-10">
              <div className="text-center">
                <div className="text-lg font-bold leading-none mb-1 mt-1.5 tech-heading text-tech-black">
                  {favoriteSite.rating.toFixed(1)}
                </div>
                <div className="text-[8px] text-tech-gray-600 font-bold tech-subheading">SCORE</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center gap-0.5 mt-2 mb-1">
                  {renderStars(favoriteSite.userRating, "w-3.5 h-3.5")}
                </div>
                <div className="text-[9px] text-tech-gray-600 font-bold tech-subheading">
                  ({formatVotes(favoriteSite.votes)})
                </div>
              </div>
              <div className="flex justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 px-3 py-2 text-xs w-full font-bold tech-subheading shadow-lg">
                  RÉCLAMER
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
        <div className="px-2 pb-2 border-t border-neutral-200 bg-neutral-50">
          <p className="text-[10px] text-neutral-500 text-center py-1.5">
            18+ | Jeu sécurisé |{" "}
            <a
              href="https://www.arjel.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:text-brand-700 underline"
            >
              arjel.fr
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
