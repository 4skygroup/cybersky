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

export const maintenanceFigures: FigureItem[] = [
  {
    id: 1,
    stat: "80%",
    description:
      "Des pannes informatiques sont liées à un manque d'entretien ou à une mauvaise configuration.",
    source: "TechRadar / études sectorielles",
  },
  {
    id: 2,
    stat: "10K€",
    description: "Coût estimé d'une journée d'arrêt informatique pour une PME.",
    source: "Syntec Numérique, Cigref, IDC",
  },
  {
    id: 3,
    stat: "20%",
    description:
      "Des incidents peuvent être évités grâce à une maintenance régulière.",
    source: "IDC / Syntec Numérique",
  },
];

