"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 text-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/favicon.ico" width={40} height={40} alt="Logo de l'Autorité Nationale des Jeux" />
            <span className="text-xl font-bold flex">
              <span className="text-french-blue">Sporta</span>
              <span className="text-gray-800">La</span>
              <span className="text-french-red">Francaise</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
