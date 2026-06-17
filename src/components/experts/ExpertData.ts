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
    description: "experts.data.desc_lorem",
    image: "/avatar-expert-cybersky.webp",
    specialties: [
      "experts.data.spec_maintenance",
      "experts.data.spec_security",
      "experts.data.spec_network",
    ],
  },
  {
    id: "expert-2",
    name: "Maxime Gallery",
    description: "experts.data.desc_lorem",
    image: "/avatar-expert-cybersky.webp",
    specialties: [
      "experts.data.spec_maintenance",
      "experts.data.spec_security",
      "experts.data.spec_network",
    ],
  },
  {
    id: "expert-3",
    name: "Maxime Gallery",
    description: "experts.data.desc_lorem",
    image: "/avatar-expert-cybersky.webp",
    specialties: [
      "experts.data.spec_maintenance",
      "experts.data.spec_security",
      "experts.data.spec_network",
    ],
  },
];
