export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  gridClass: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "maintenance",
    title: "Maintenance",
    description:
      "Prestations clés en main de maintenance pour TPE/PME pour une gestion optimisée de votre équipement informatique.",
    image: "/maintenance-image-cybersky.webp",
    link: "/services/maintenance",
    gridClass: "md:col-span-2", // Prend 2 colonnes sur la grille
  },
  {
    id: "equipement",
    title: "Équipement",
    description:
      "Vente, installation et configuration de matériels informatiques professionnels : ordinateurs, PC, switch, serveurs, bornes Wi-Fi...",
    image: "/equipement-image-cybersky.webp",
    link: "/services/equipement",
    gridClass: "md:col-span-1",
  },
  {
    id: "securite",
    title: "Sécurité",
    description:
      "Solution de sécurité et protection du réseau informatique d'entreprise.",
    image: "/securite-image-cybersky.webp",
    link: "/services/securite",
    gridClass: "md:col-span-1",
  },
  {
    id: "software",
    title: "Software",
    description:
      "Solutions de digitalisation des tâches administratives des TPE/PME et de numérisation et gestion électronique de vos documents.",
    image: "/software-image-cybersky.webp",
    link: "/services/software",
    gridClass: "md:col-span-1",
  },
  {
    id: "cloud",
    title: "Cloud",
    description:
      "Solutions d'hébergement sécurisées et sur-mesure pour vos données.",
    image: "/cloud-image-cybersky.webp",
    link: "/services/cloud",
    gridClass: "md:col-span-1",
  },
];
