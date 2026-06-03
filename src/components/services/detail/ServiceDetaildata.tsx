import { ShieldAlert, MailWarning, Eye, BriefcaseBusiness, MonitorCheck, Settings, Headset, DatabaseBackup, Users, Server, CloudDrizzle, CloudUpload, RefreshCw, ShieldCheck, Download, Laptop, AppWindow, BarChart, Workflow, Blocks } from 'lucide-react';
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

export const maintenanceServiceDetails: ServiceDetailItem[] = [
    {
        id: 1,
        title: "Supervision proactive",
        description: "Surveillance continue de vos systèmes pour détecter les incidents avant qu'ils ne deviennent critiques.",
        tags: ["Monitoring 24/7", "Alertes", "Rapports"],
        icon: <MonitorCheck size={20} strokeWidth={2} />
    },
    {
        id: 2,
        title: "Maintenance préventive",
        description: "Mises à jour, corrections et optimisations pour garder vos systèmes stables et sécurisés.",
        tags: ["Mises à jour système", "Optimisation", "Veille"],
        icon: <Settings size={20} strokeWidth={2} />
    },
    {
        id: 3,
        title: "Support & assistance",
        description: "Accompagnement rapide pour résoudre les problèmes techniques de vos équipes.",
        tags: ["Centre d'appel", "Support utilisateur", "Intervention"],
        icon: <Headset size={20} strokeWidth={2} />
    },
    {
        id: 4,
        title: "Sauvegarde & continuité",
        description: "Mise en place et contrôle des sauvegardes pour protéger vos données critiques.",
        tags: ["Sécurité", "Restauration", "Plans de reprise"],
        icon: <DatabaseBackup size={20} strokeWidth={2} />
    }
];

export const cloudServiceDetails: ServiceDetailItem[] = [
    {
        id: 1,
        title: "Migration cloud",
        description: "Nous vous accompagnons dans le passage vers des solutions cloud adaptées à votre activité.",
        tags: ["Analyse", "Migration", "Réduction des coûts"],
        icon: <CloudUpload size={20} strokeWidth={2} />
    },
    {
        id: 2,
        title: "Sauvegarde cloud",
        description: "Nous mettons en place des sauvegardes sécurisées pour protéger vos données critiques.",
        tags: ["Automatisation", "Chiffrement", "Restauration"],
        icon: <CloudDrizzle size={20} strokeWidth={2} />
    },
    {
        id: 3,
        title: "Hébergements & serveurs cloud",
        description: "Nous vous aidons à héberger vos applications, fichiers et services dans un environnement fiable.",
        tags: ["Adaptation", "Haute disponibilité", "Supervision"],
        icon: <Server size={20} strokeWidth={2} />
    },
    {
        id: 4,
        title: "Microsoft 365 + Outils Collaboratifs",
        description: "Nous configurons vos outils de travail collaboratif pour améliorer la productivité de vos équipes.",
        tags: ["Comptes utilisateurs", "Messagerie professionnelle"],
        icon: <Users size={20} strokeWidth={2} />
    }
];

export const equipementServiceDetails: ServiceDetailItem[] = [
    {
        id: 1,
        title: "Conseil & choix matériel",
        description: "Nous vous aidons à choisir les équipements adaptés à votre budget et à vos usages.",
        tags: ["Conseil", "Audit"],
        icon: <Laptop size={20} strokeWidth={2} />
    },
    {
        id: 2,
        title: "Installation sur site",
        description: "Déploiement du matériel, branchements, configuration et tests sur votre site.",
        tags: ["Branchements", "Déploiement"],
        icon: <Download size={20} strokeWidth={2} />
    },
    {
        id: 3,
        title: "Configuration sécurité",
        description: "Paramétrage des accès, antivirus, comptes utilisateurs et protections de base.",
        tags: ["Accès", "Comptes"],
        icon: <ShieldCheck size={20} strokeWidth={2} />
    },
    {
        id: 4,
        title: "Suivi & renouvellement",
        description: "Nous vous accompagnons dans le suivi, l'évolution et le remplacement de votre parc.",
        tags: ["Suivi", "Renouvellement"],
        icon: <RefreshCw size={20} strokeWidth={2} />
    }
];

export const softwareServiceDetails: ServiceDetailItem[] = [
    {
        id: 1,
        title: "Intégration d'outils métiers",
        description: "Nous vous aidons à choisir et mettre en place les logiciels adaptés à votre activité.",
        tags: ["CRM / ERP", "Outils collaboratifs", "Gestion"],
        icon: <Blocks size={20} strokeWidth={2} />
    },
    {
        id: 2,
        title: "Automatisation des processus",
        description: "Nous automatisons les tâches répétitives pour réduire les erreurs et gagner du temps.",
        tags: ["Workflows", "Notifications", "Synchronisations"],
        icon: <Workflow size={20} strokeWidth={2} />
    },
    {
        id: 3,
        title: "Tableaux de bord & reporting",
        description: "Nous créons des vues claires pour suivre vos performances et prendre de meilleures décisions.",
        tags: ["KPI", "Suivi d'activité", "Rapports automatisés"],
        icon: <BarChart size={20} strokeWidth={2} />
    },
    {
        id: 4,
        title: "Applications web sur mesure",
        description: "Nous développons des outils simples et adaptés à vos besoins spécifiques.",
        tags: ["Portail client", "Outils internes", "Interfaces métier"],
        icon: <AppWindow size={20} strokeWidth={2} />
    }
];