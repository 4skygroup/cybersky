import { MessageSquare, Search, ShieldCheck, Headphones } from 'lucide-react';
import type { ReactNode } from 'react';

export interface MethodologyItem {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
}

// Les données spécifiques à la page Sécurité
export const securiteMethodology: MethodologyItem[] = [
    {
        id: 1,
        title: "service_detail.methodology.data.security.steps.0.title",
        description: "service_detail.methodology.data.security.steps.0.desc",
        icon: <MessageSquare size={24} strokeWidth={1.5} />
    },
    {
        id: 2,
        title: "service_detail.methodology.data.security.steps.1.title",
        description: "service_detail.methodology.data.security.steps.1.desc",
        icon: <Search size={24} strokeWidth={1.5} />
    },
    {
        id: 3,
        title: "service_detail.methodology.data.security.steps.2.title",
        description: "service_detail.methodology.data.security.steps.2.desc",
        icon: <ShieldCheck size={24} strokeWidth={1.5} />
    },
    {
        id: 4,
        title: "service_detail.methodology.data.security.steps.3.title",
        description: "service_detail.methodology.data.security.steps.3.desc",
        icon: <Headphones size={24} strokeWidth={1.5} />
    }
];

export const maintenanceMethodology: MethodologyItem[] = [
    {
        id: 1,
        title: "service_detail.methodology.data.maintenance.steps.0.title",
        description: "service_detail.methodology.data.maintenance.steps.0.desc",
        icon: <MessageSquare size={24} strokeWidth={1.5} />
    },
    {
        id: 2,
        title: "service_detail.methodology.data.maintenance.steps.1.title",
        description: "service_detail.methodology.data.maintenance.steps.1.desc",
        icon: <Search size={24} strokeWidth={1.5} />
    },
    {
        id: 3,
        title: "service_detail.methodology.data.maintenance.steps.2.title",
        description: "service_detail.methodology.data.maintenance.steps.2.desc",
        icon: <ShieldCheck size={24} strokeWidth={1.5} />
    },
    {
        id: 4,
        title: "service_detail.methodology.data.maintenance.steps.3.title",
        description: "service_detail.methodology.data.maintenance.steps.3.desc",
        icon: <Headphones size={24} strokeWidth={1.5} />
    }
];

export const cloudMethodology: MethodologyItem[] = [
    {
        id: 1,
        title: "service_detail.methodology.data.cloud.steps.0.title",
        description: "service_detail.methodology.data.cloud.steps.0.desc",
        icon: <MessageSquare size={24} strokeWidth={1.5} />
    },
    {
        id: 2,
        title: "service_detail.methodology.data.cloud.steps.1.title",
        description: "service_detail.methodology.data.cloud.steps.1.desc",
        icon: <Search size={24} strokeWidth={1.5} />
    },
    {
        id: 3,
        title: "service_detail.methodology.data.cloud.steps.2.title",
        description: "service_detail.methodology.data.cloud.steps.2.desc",
        icon: <ShieldCheck size={24} strokeWidth={1.5} />
    },
    {
        id: 4,
        title: "service_detail.methodology.data.cloud.steps.3.title",
        description: "service_detail.methodology.data.cloud.steps.3.desc",
        icon: <Headphones size={24} strokeWidth={1.5} />
    }
];

export const equipementMethodology: MethodologyItem[] = [
    {
        id: 1,
        title: "service_detail.methodology.data.equipment.steps.1.title",
        description: "service_detail.methodology.data.equipment.steps.1.desc",
        icon: <MessageSquare size={24} strokeWidth={1.5} />
    },
    {
        id: 2,
        title: "service_detail.methodology.data.equipment.steps.1.title",
        description: "service_detail.methodology.data.equipment.steps.1.desc",
        icon: <Search size={24} strokeWidth={1.5} />
    },
    {
        id: 3,
        title: "service_detail.methodology.data.equipment.steps.2.title",
        description: "service_detail.methodology.data.equipment.steps.2.desc",
        icon: <ShieldCheck size={24} strokeWidth={1.5} />
    },
    {
        id: 4,
        title: "service_detail.methodology.data.equipment.steps.3.title",
        description: "service_detail.methodology.data.equipment.steps.3.desc",
        icon: <Headphones size={24} strokeWidth={1.5} />
    }
];

export const softwareMethodology: MethodologyItem[] = [
    {
        id: 1,
        title: "service_detail.methodology.data.software.steps.0.title",
        description: "service_detail.methodology.data.security.steps.0.desc",
        icon: <MessageSquare size={24} strokeWidth={1.5} />
    },
    {
        id: 2,
        title: "service_detail.methodology.data.software.steps.1.title",
        description: "service_detail.methodology.data.security.steps.1.desc",
        icon: <Search size={24} strokeWidth={1.5} />
    },
    {
        id: 3,
        title: "service_detail.methodology.data.software.steps.2.title",
        description: "service_detail.methodology.data.security.steps.2.desc",
        icon: <ShieldCheck size={24} strokeWidth={1.5} />
    },
    {
        id: 4,
        title: "service_detail.methodology.data.software.steps.3.title",
        description: "service_detail.methodology.data.security.steps.3.desc",
        icon: <Headphones size={24} strokeWidth={1.5} />
    }
];