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
        title: "Prise de contact",
        description: "On discute. On comprend votre activité, vos contraintes, vos priorités.",
        icon: <MessageSquare size={24} strokeWidth={1.5} />
    },
    {
        id: 2,
        title: "Audit & évaluation",
        description: "On analyse. On comprend votre sécurité, vos vulnérabilités, vos priorités.",
        icon: <Search size={24} strokeWidth={1.5} />
    },
    {
        id: 3,
        title: "Mise en place des protections",
        description: "On déploie. On s'adapte à votre activité, vos contraintes, vos priorités.",
        icon: <ShieldCheck size={24} strokeWidth={1.5} />
    },
    {
        id: 4,
        title: "Suivi & accompagnement",
        description: "On discute. On comprend vos alertes, vos contraintes, vos priorités.",
        icon: <Headphones size={24} strokeWidth={1.5} />
    }
];

export const maintenanceMethodology: MethodologyItem[] = [
    {
        id: 1,
        title: "Analyse des besoins",
        description: "On discute. On comprend votre activité, vos contraintes, vos priorités.",
        icon: <MessageSquare size={24} strokeWidth={1.5} />
    },
    {
        id: 2,
        title: "Audit & évaluation",
        description: "On discute. On comprend votre activité, vos contraintes, vos priorités.",
        icon: <Search size={24} strokeWidth={1.5} />
    },
    {
        id: 3,
        title: "Mise en place des procédures",
        description: "On déploie. On s'adapte à votre activité, vos contraintes, vos priorités.",
        icon: <ShieldCheck size={24} strokeWidth={1.5} />
    },
    {
        id: 4,
        title: "Suivi & accompagnement",
        description: "On discute. On comprend vos alertes, vos contraintes, vos priorités.",
        icon: <Headphones size={24} strokeWidth={1.5} />
    }
];