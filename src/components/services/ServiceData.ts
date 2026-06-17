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
    title: "services.data.maintenance_title",
    description: "services.data.maintenance_desc",
    image: "/maintenance-image-cybersky.webp",
    link: "/services/maintenance",
    gridClass: "md:col-span-2", // Prend 2 colonnes sur la grille
  },
  {
    id: "equipement",
    title: "services.data.equipment_title",
    description: "services.data.equipment_desc",
    image: "/equipement-image-cybersky.webp",
    link: "/services/equipement",
    gridClass: "md:col-span-1",
  },
  {
    id: "securite",
    title: "services.data.securite_title",
    description: "services.data.securite_desc",
    image: "/securite-image-cybersky.webp",
    link: "/services/cybersecurite",
    gridClass: "md:col-span-1",
  },
  {
    id: "software",
    title: "services.data.software_title",
    description: "services.data.software_desc", 
    image: "/software-image-cybersky.webp",
    link: "/services/software",
    gridClass: "md:col-span-1",
  },
  {
    id: "cloud",
    title: "services.data.cloud_title",
    description: "services.data.cloud_desc",
    image: "/cloud-image-cybersky.webp",
    link: "/services/cloud",
    gridClass: "md:col-span-1",
  },
];
