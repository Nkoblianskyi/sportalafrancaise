export interface BettingSite {
  id: number
  name: string
  logo: string
  rating: number
  bonus: string
  description: string
  features: string[]
  welcomeOffer: string
  terms: string
  userRating: number
  votes: number
  link: string
  backgroundImage?: string
}

export interface Banner {
  id: number
  title: string
  subtitle: string
  image: string
  link: string
}

export interface HorizontalBanner {
  id: number
  name: string
  logo: string
  bonus: string
  welcomeOffer: string
  link: string
  backgroundImage: string
}



export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Boomerang Bet",
    logo: "/boomerang-2.png",
    rating: 9.9,
    bonus: "De Premier Dépôt 100% jusqu'à 100€",
    description: "Plateforme de paris innovante",
    features: ["Streaming en Direct", "Statistiques", "Cash Out"],
    welcomeOffer: "+ CashBack 10% jusqu'à 500€",
    terms:
      "18+ | Nouveaux clients français uniquement | Max 100€ de bonus | Dépôt min 10€ | Cotes min 1,70 | Mise du bonus non retournée | Certains marchés/sports/méthodes de paiement exclus | Bonus à miser 5x | Bonus valide 30 jours | Conditions générales s'appliquent",
    userRating: 9.9,
    votes: 3245,
    link: "https://qualityboost.top/XgnxCbXp",
    backgroundImage: "/banner-3.jpg",
  },
  {
    id: 2,
    name: "Winrolla",
    logo: "/win-rolla.webp",
    rating: 9.7,
    bonus: "De Premier Dépôt 100% Jusqu'à 500€",
    description: "Site de paris premium",
    features: ["Cotes Compétitives", "Cash Out", "Bet Builder"],
    welcomeOffer: "",
    terms:
      "18+ Inscrivez-vous & déposez 10€+ et pariez sur n'importe quel marché (cotes 2,00+). Pas de cashout. Obtenez jusqu'à 500€ en bonus pour des marchés spécifiés, expiration 7 jours. Offre valide jusqu'au 31.12.25. Conditions générales s'appliquent.",
    userRating: 9.7,
    votes: 2934,
    link: "https://qualityboost.top/p9xPYXyM",
    backgroundImage: "/banner-10.jpg",
  },
  {
    id: 3,
    name: "Rich Royal",
    logo: "/rich-royal.webp",
    rating: 9.6,
    bonus: "De Premier Dépôt 100% Jusqu'à 100€",
    description: "Expérience de paris royale",
    features: ["Interface Luxueuse", "Support VIP", "Retraits Rapides"],
    welcomeOffer: "",
    terms:
      "Pariez 10€ au total sur des paris pré-match avec cotes min 2,0 pour qualifier. Obtenez 100€ crédités comme bonus. Conditions s'appliquent. Bonus à miser 3x avant retrait.",
    userRating: 9.6,
    votes: 2156,
    link: "https://qualityboost.top/PGWLkLnJ",
    backgroundImage: "/banner-3.jpg",
  },
  {
    id: 4,
    name: "MrPacho",
    logo: "/mrpacho.svg",
    rating: 9.5,
    bonus: "100% Jusqu'à 100€",
    description: "Paris sportifs modernes",
    features: ["App Mobile", "Paris en Direct", "Support Local"],
    welcomeOffer: "",
    terms:
      "Nouveaux clients uniquement: Déposez 10€+ et placez un pari de 10€+ à cotes 2,0+ pour recevoir 100€ en bonus (valide 7 jours). Exclut certaines méthodes de paiement. France en ligne uniquement, 18+. Conditions s'appliquent.",
    userRating: 9.5,
    votes: 1987,
    link: "https://qualityboost.top/12fG4WMs",
    backgroundImage: "/banner-6.jpg",
  },
  {
    id: 5,
    name: "BillyBets",
    logo: "/billybets.webp",
    rating: 9.4,
    bonus: "100% Jusqu'à 100€",
    description: "Paris sportifs modernes",
    features: ["App Mobile", "Paris en Direct", "Support Local"],
    welcomeOffer: "",
    terms:
      "Nouveaux clients uniquement: Déposez 10€+ et placez un pari de 10€+ à cotes 2,0+ pour recevoir 100€ en bonus (valide 7 jours). Exclut certaines méthodes de paiement. France en ligne uniquement, 18+. Conditions s'appliquent.",
    userRating: 9.4,
    votes: 2389,
    link: "https://qualityboost.top/zp3NyD5H",
    backgroundImage: "/banner-6.jpg",
  },
]

