import { Monitor, Mail, Wifi, Cloud, Key } from 'lucide-react';
import type { ReactNode } from 'react';

export interface RiskZoneItem {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: ReactNode;
}

// Les données spécifiques à la page Sécurité
export const securiteRiskZones: RiskZoneItem[] = [
    {
        id: 1,
        title: "Postes de travail",
        description: "Ransomware, virus, malveillances...",
        image: "/riskzones/laptop-cybersky.webp", // À remplacer par tes images
        icon: <Monitor size={18} strokeWidth={2} />
    },
    {
        id: 2,
        title: "E-mails & phishing",
        description: "Phishing, pièces jointes piégées, usurpation...",
        image: "/riskzones/phising-cybersky.webp",
        icon: <Mail size={18} strokeWidth={2} />
    },
    {
        id: 3,
        title: "Réseau & WiFi",
        description: "Intrusions, segmentation, accès distants...",
        image: "/riskzones/network-cybersky.webp",
        icon: <Wifi size={18} strokeWidth={2} />
    },
    {
        id: 4,
        title: "Cloud & données",
        description: "Fuites, hébergements, partages...",
        image: "/riskzones/cloud-cybersky.webp",
        icon: <Cloud size={18} strokeWidth={2} />
    },
    {
        id: 5,
        title: "Accès & mots de passe",
        description: "Authentification, gestion des droits...",
        image: "/riskzones/access-cybersky.webp",
        icon: <Key size={18} strokeWidth={2} />
    }
];