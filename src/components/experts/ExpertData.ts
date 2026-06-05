export interface ExpertItem {
  id: string;
  name: string;
  description: string;
  image: string;
  specialties: string[];
}

export const expertsData: ExpertItem[] = [
  {
    id: "expert-1",
    name: "Maxime Gallery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, doloribus nemo! Praesentium, deserunt corporis modi obcaecati aut quod aspernatur magnam rem molestiae nisi et consequatur facilis quam magni facere dolores iusto quisquam!",
    image: "/avatar-expert-cybersky.webp", // A changer au futur avec les vraies photos des experts
    specialties: ["Maintenance", "Sécurité", "Réseau"],
  },
  {
    id: "expert-2",
    name: "Maxime Gallery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, doloribus nemo! Praesentium, deserunt corporis modi obcaecati aut quod aspernatur magnam rem molestiae nisi et consequatur facilis quam magni facere dolores iusto quisquam!",
    image: "/avatar-expert-cybersky.webp",
    specialties: ["Maintenance", "Sécurité", "Réseau"],
  },
  {
    id: "expert-3",
    name: "Maxime Gallery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, doloribus nemo! Praesentium, deserunt corporis modi obcaecati aut quod aspernatur magnam rem molestiae nisi et consequatur facilis quam magni facere dolores iusto quisquam!",
    image: "/avatar-expert-cybersky.webp",
    specialties: ["Maintenance", "Sécurité", "Réseau"],
  },
];
