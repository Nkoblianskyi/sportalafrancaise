export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
  isANJLicensed: boolean
  licenseNumber?: string
  securityVerified: boolean
}

export interface ModalState {
  ageVerification: boolean
  advertiserDisclosure: boolean
  termsConditions: boolean
  cookieBanner: boolean
}

export interface RegulatoryOrg {
  href: string
  src: string
  alt: string
}
