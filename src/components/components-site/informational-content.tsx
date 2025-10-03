"use client"

export function InformationalContent() {
  return (
    <div className="mt-12 max-w-[1150px] mx-auto">
      {/* Main Guide Section */}
      <section className="bg-brand-dark/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-strong mb-8 border border-white/30">
        <div className="relative px-6 py-8 bg-black/50 backdrop-blur-md">
          <div className="relative z-10 text-white">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
                Votre Guide Ultime de <span className="text-brand-accent">Sélection de Bookmaker Français</span>
              </h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Choisir le bookmaker parfait nécessite une expertise et une analyse approfondie. Notre guide complet
                élimine les conjectures avec des avis professionnels et des comparaisons détaillées.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Trouvez Votre Partenaire de Paris Idéal</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Chaque joueur a des préférences différentes et des besoins spécifiques. Commencez par déterminer les
                    sports et les marchés de paris qui vous intéressent le plus, puis vérifiez que les fournisseurs que
                    vous avez choisis offrent une couverture complète dans ces catégories.
                  </p>
                  <p>
                    De plus, examinez attentivement la structure des prix et les taux de rendement de chaque
                    fournisseur. Des cotes améliorées augmentent considérablement vos rendements potentiels et vos
                    performances globales en matière de paris.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Exploitez les Opportunités de Bonus</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Le paysage actuel des paris, très concurrentiel, incite les fournisseurs à améliorer continuellement
                    leurs offres promotionnelles afin d'attirer et de fidéliser les clients fidèles. Les forfaits de
                    bienvenue ont considérablement évolué et offrent une valeur exceptionnelle aux nouveaux arrivants
                    qui maîtrisent l'art de l'exploitation stratégique des bonus.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">
                  Comprendre la Réglementation Française des Jeux
                </h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Le marché français des jeux fonctionne dans un cadre réglementaire strict conçu pour protéger les
                    consommateurs tout en garantissant l'équité sur toutes les plateformes. Les opérateurs agréés
                    doivent se conformer à des directives complètes couvrant tous les aspects, de la sécurité financière
                    à la protection des données des clients.
                  </p>
                  <p>
                    Cette surveillance réglementaire offre une tranquillité d'esprit aux joueurs français, qui savent
                    que les plateformes qu'ils ont choisies répondent aux normes les plus élevées de l'industrie.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Informative Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-brand-accent">
                Pourquoi Choisir des Bookmakers Français Licenciés ?
              </h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Les bookmakers français agréés offrent une sécurité et une protection des consommateurs inégalées.
                  Grâce à la stricte surveillance réglementaire de l'Autorité Nationale des Jeux (ANJ), ces plateformes
                  garantissent l'équité, la sécurité des transactions et des pratiques de jeu responsables.
                </p>
                <p>
                  De plus, les opérateurs français offrent un support client localisé, des méthodes de paiement
                  familières et une couverture complète des sports français, notamment le football, le rugby et le
                  cyclisme, lors d'événements français majeurs.
                </p>
              </div>
            </div>

            {/* Footer Disclaimer */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                <p className="text-red-300 font-bold mb-2 text-sm">
                  CE MATÉRIEL EST PROTÉGÉ PAR LE DROIT D'AUTEUR. TOUS LES SERVICES ET CAMPAGNES SONT EXCLUSIVEMENT POUR
                  LES CITOYENS FRANÇAIS DE 18 ANS ET PLUS.
                </p>
                <p className="text-red-200 text-xs">
                  YDERLIGERE BEGRÆNSNINGER KAN GÆLDE INKLUSIVE IDENTITETSVERIFIKATION, LOKATIONSBEGRÆNSNINGER OG
                  STATSBORGERSKABSKRAV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
