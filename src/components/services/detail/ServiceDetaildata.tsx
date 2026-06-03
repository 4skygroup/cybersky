import { ShieldAlert, MailWarning, Eye, BriefcaseBusiness } from 'lucide-react';
import type { ReactNode } from 'react';

export interface ServiceDetailItem {
    id: number;
    title: string;
    description: string;
    tags: string[];
    icon: ReactNode;
}

// Les données spécifiques à la page Sécurité
export const securiteServiceDetails: ServiceDetailItem[] = [
    {
        id: 1,
        title: "Audit de sécurité",
        description: "Analyse complète de votre infrastructure, serveurs, postes de travail et vulnérabilités. Un rapport clair, des recommandations et un plan d'actions concrètes.",
        tags: ["Cartographie SI", "Pentest", "Conformité"],
        icon: <ShieldAlert size={20} strokeWidth={2} />
    },
    {
        id: 2,
        title: "Simulation de phishing",
        description: "Testez et entraînez vos équipes face aux menaces de type ingénierie sociale. Phishing ciblé et sensibilisation en temps réel.",
        tags: ["Campagnes ciblées", "Statistiques", "Formations"],
        icon: <MailWarning size={20} strokeWidth={2} />
    },
    {
        id: 3,
        title: "Surveillance & protection",
        description: "Monitoring permanent, détection des incidents, protection des systèmes critiques. Une équipe dédiée qui veille pendant que vous travaillez.",
        tags: ["SOC 24/7", "EDR / XDR", "Réseau Isolé"],
        icon: <Eye size={20} strokeWidth={2} />
    },
    {
        id: 4,
        title: "Conseil en cybersécurité",
        description: "Définition de stratégies, accompagnement de vos équipes, normes pratiques. La meilleure technologie ne remplace pas une équipe formée.",
        tags: ["Stratégie", "Audits", "Certifications"],
        icon: <BriefcaseBusiness size={20} strokeWidth={2} />
    }
];