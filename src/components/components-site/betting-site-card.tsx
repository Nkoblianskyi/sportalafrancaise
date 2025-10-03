"use client"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BettingSite } from "@/data/mock-data"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: SiteCardProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "TOP BOOKMAKER"
      case 2:
        return "OFFRE EXCLUSIVE"
      case 3:
        return "TENDANCE"
      case 4:
        return "VÉRIFIÉ"
      default:
        return "ÉVALUÉ"
    }
  }

  const renderStars = (rating: number, size = "w-4 h-4") => {
    const value = Math.max(0, Math.min(10, rating)) / 2 // 0..5
    const full = Math.floor(value)
    const frac = value - full - 0.2

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
    <div className="block animate-fade-in">
      {/* Desktop Layout */}
      <div
        className={`hidden lg:block tech-card ${rank === 1 ? "border-2 border-tech-gold tech-glow" : "border border-tech-gray-300"} relative overflow-hidden cursor-pointer mb-2 mx-4`}
      >
        <Link href={site.link} target="_blank" rel="noopener referrer" className="block">
          {/* Main Content */}
          <div className="h-40 flex items-center py-6 px-6 pr-12 bg-tech-white relative">
            {/* PLATFORM - 30% */}
            <div className="flex-[0_0_30%] pr-2 flex justify-center items-center h-full relative z-10">
              <div className="bg-tech-white border-2 border-tech-black p-4 shadow-tech-medium relative mt-4">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-36 xl:w-44 h-16 xl:h-20 object-contain"
                />
                {/* Tech corner accents - flags with French colors */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-600"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-600"></div>
              </div>
            </div>

            {/* Rank and Status Badges - positioned absolutely */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              {rank <= 4 && (
                <div
                  className="tech-badge px-2 sm:px-3 md:px-4 py-1 text-xs font-bold whitespace-nowrap"
                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>

            {/* WELCOME PACKAGE - 25% */}
            <div className="flex-[0_0_25%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-[10px] text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">Offre De Bienvenue</div>
              <div className="text-sm xl:text-lg font-bold text-tech-black mb-1 tech-heading">{site.bonus}</div>
              <div className="text-base xl:text-sm font-bold text-tech-black tech-heading">{site.welcomeOffer}</div>
            </div>

            {/* RATING - 12% */}
            <div className="flex-[0_0_12%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-4xl xl:text-5xl font-bold leading-none mb-1 tech-heading text-tech-black">
                {site.rating.toFixed(1)}
              </div>
              <div className="text-xs font-bold text-tech-gray-600 tech-subheading">SCORE</div>
            </div>

            {/* USER SCORE - 20% */}
            <div className="flex-[0_0_20%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-tech-gray-600 mb-2 tech-subheading">({formatVotes(site.votes)} AVIS)</div>
              <div className="flex justify-center gap-1 mb-2">
                {renderStars(site.userRating, "w-4 xl:w-5 h-4 xl:h-5")}
              </div>
              <div className="text-sm text-tech-black font-bold tech-subheading">EXCELLENT</div>
            </div>

            {/* ACCESS - 13% */}
            <div className="flex-[0_0_13%] pl-4 text-center flex flex-col justify-center items-center h-full relative z-10">
              <div className="w-full pr-2">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 w-full h-12 mb-2 text-sm font-bold tech-subheading shadow-lg">
                  OBTENIR BONUS
                </Button>
                <div className="text-xs text-tech-gray-600 font-bold tech-subheading">
                  VISITER {site.name.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
        <div className="px-6 pb-4 border-t border-neutral-200 bg-neutral-50">
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

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden tech-card border border-tech-gray-300 relative overflow-hidden cursor-pointer mb-2 mx-4">
        <Link href={site.link} target="_blank" rel="noopener referrer" className="block">
          {/* Badges */}
          <div className="absolute top-0 left-0 flex gap-0 z-30">
            {rank <= 4 && (
              <div
                className="tech-badge px-2 py-0.5 text-xs font-bold whitespace-nowrap"
              >
                {getRankLabel(rank)}
              </div>
            )}
          </div>
          <div className="pt-6 pb-4 px-4 bg-tech-white relative">
            <div className="grid grid-cols-12 gap-2 items-center relative z-10">
              {/* Logo - 3 колонки */}
              <div className="col-span-3 flex justify-center">
                <div className="bg-tech-white border-2 border-tech-black p-2 shadow-tech-soft w-full mt-4 relative">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-12 object-contain" />
                  <div className="absolute -top-1 -left-1 w-1 h-1 bg-blue-600"></div>
                  <div className="absolute -top-1 -right-1 w-1 h-1 bg-red-600"></div>
                </div>
              </div>

              {/* Bonus - 3 колонки */}
              <div className="col-span-3 text-center">
                <div className="text-xs text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">Offre De Bienvenue</div>
                <div className="text-sm font-bold text-tech-black mb-1 tech-heading">{site.bonus}</div>
                <div className="text-base font-bold text-tech-black tech-heading">{site.welcomeOffer}</div>
              </div>

              {/* Score - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xl font-bold leading-none tech-heading text-tech-black">
                  {site.rating.toFixed(1)}
                </div>
                <div className="text-xs font-bold text-tech-gray-600 tech-subheading">SCORE</div>
              </div>

              {/* Rating - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xs text-tech-gray-600 mb-1 tech-subheading">({formatVotes(site.votes)})</div>
                <div className="flex justify-center gap-0.5 mb-1">{renderStars(site.userRating, "w-3 h-3")}</div>
              </div>

              {/* Button - 2 колонки */}
              <div className="col-span-2 text-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 px-2 py-1 text-[10px] w-full font-bold tech-subheading shadow-lg">
                  OBTENIR BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden tech-card  relative overflow-hidden cursor-pointer mb-1 mx-2">
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Main Content */}
          <div className="p-2 relative bg-tech-white">
            {/* Badges */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              {rank <= 4 && (
                <div
                  className="tech-badge px-3 py-1 text-xs font-bold"
                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-[40%_60%] gap-2 items-center mt-5 relative z-10">
              {/* Logo Column */}
              <div className="flex justify-center">
                <div className="bg-tech-white border-2 border-tech-black p-2 shadow-tech-soft relative">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
                  <div className="absolute -top-1 -left-1 w-1 h-1 bg-blue-600"></div>
                  <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-red-600"></div>
                </div>
              </div>

              {/* Bonus Column */}
              <div className="text-center -mt-4 pr-1">
                <div className="text-[10px] text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">Offre De Bienvenue</div>
                <div className="text-sm font-bold text-tech-black leading-tight mb-1 tech-heading">{site.bonus}</div>
                <div className="text-xs font-bold text-tech-black leading-tight tech-heading">{site.welcomeOffer}</div>
              </div>
            </div>

            {/* Rating Row */}
            <div className="grid grid-cols-3 items-center justify-center gap-1 mt-1 pt-1 border-t-2 border-tech-gray-200 relative z-10">
              <div className="text-center">
                <div className="text-xl font-bold leading-none mb-1 mt-1.5 tech-heading text-tech-black">
                  {site.rating.toFixed(1)}
                </div>
                <div className="text-[8px] text-tech-gray-600 font-bold tech-subheading">SCORE</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center gap-0.5 mt-2 mb-1">{renderStars(site.userRating, "w-4 h-4")}</div>
                <div className="text-[10px] text-tech-gray-600 font-bold tech-subheading">
                  ({formatVotes(site.votes)})
                </div>
              </div>

              {/* Button Column */}
              <div className="flex justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 px-4 py-2 w-full font-bold tech-subheading shadow-lg text-xs">
                  OBTENIR BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
      </div>
    </div>
  )
}
