export interface FigureItem {
  id: number;
  stat: string;
  description: string;
  source: string;
}

// Les données pour la page Sécurité
export const securiteFigures: FigureItem[] = [
  {
    id: 1,
    stat: "43%",
    description:
      "Des PME victimes d'une cyberattaque ferment ou font faillite dans les 6 mois.",
    source: "ANSSI",
  },
  {
    id: 2,
    stat: "1 sur 2",
    description:
      "Des entreprises de type TPE/PME ont déjà subi une cyberattaque.",
    source: "ANSSI",
  },
  {
    id: 3,
    stat: "300%",
    description:
      "Les menaces ciblent en permanence les systèmes de l'entreprise.",
    source: "ANSSI",
  },
];

// Tu pourras ajouter plus tard :
// export const cloudFigures: FigureItem[] = [ ... ];
// export const maintenanceFigures: FigureItem[] = [ ... ];
