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
        title: "service_detail.riskzones.data.security.zones.z1.title",
        description: "service_detail.riskzones.data.security.zones.z1.desc",
        image: "/riskzones/laptop-cybersky.webp",
        icon: <Monitor size={18} strokeWidth={2} />
    },
    {
        id: 2,
        title: "service_detail.riskzones.data.security.zones.z2.title",
        description: "service_detail.riskzones.data.security.zones.z2.desc",
        image: "/riskzones/phising-cybersky.webp",
        icon: <Mail size={18} strokeWidth={2} />
    },
    {
        id: 3,
        title: "service_detail.riskzones.data.security.zones.z3.title",
        description: "service_detail.riskzones.data.security.zones.z3.desc",
        image: "/riskzones/network-cybersky.webp",
        icon: <Wifi size={18} strokeWidth={2} />
    },
    {
        id: 4,
        title: "service_detail.riskzones.data.security.zones.z4.title",
        description: "service_detail.riskzones.data.security.zones.z4.desc",
        image: "/riskzones/cloud-cybersky.webp",
        icon: <Cloud size={18} strokeWidth={2} />
    },
    {
        id: 5,
        title: "service_detail.riskzones.data.security.zones.z5.title",
        description: "service_detail.riskzones.data.security.zones.z5.desc",
        image: "/riskzones/access-cybersky.webp",
        icon: <Key size={18} strokeWidth={2} />
    }
];