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
        title: "service_detail.details.data.securite.s1.title",
        description: "service_detail.details.data.securite.s1.desc",
        tags: ["service_detail.details.data.securite.s1.t1", "service_detail.details.data.securite.s1.t2", "service_detail.details.data.securite.s1.t3"],
        icon: <ShieldAlert size={20} strokeWidth={2} />
    },
    {
        id: 2,
        title: "service_detail.details.data.securite.s2.title",
        description: "service_detail.details.data.securite.s2.desc",
        tags: ["service_detail.details.data.securite.s2.t1", "service_detail.details.data.securite.s2.t2", "service_detail.details.data.securite.s2.t3"],
        icon: <MailWarning size={20} strokeWidth={2} />
    },
    {
        id: 3,
        title: "service_detail.details.data.securite.s3.title",
        description: "service_detail.details.data.securite.s3.desc",
        tags: ["service_detail.details.data.securite.s3.t1", "service_detail.details.data.securite.s3.t2", "service_detail.details.data.securite.s3.t3"],
        icon: <Eye size={20} strokeWidth={2} />
    },
    {
        id: 4,
        title: "service_detail.details.data.securite.s4.title",
        description: "service_detail.details.data.securite.s4.desc",
        tags: ["service_detail.details.data.securite.s4.t1", "service_detail.details.data.securite.s4.t2", "service_detail.details.data.securite.s4.t3"],
        icon: <BriefcaseBusiness size={20} strokeWidth={2} />
    }
];

export const maintenanceServiceDetails: ServiceDetailItem[] = [
    {
        id: 1,
        title: "service_detail.details.data.maintenance.s1.title",
        description: "service_detail.details.data.maintenance.s1.desc",
        tags: ["service_detail.details.data.maintenance.s1.t1", "service_detail.details.data.maintenance.s1.t2", "service_detail.details.data.maintenance.s1.t3"],
        icon: <MonitorCheck size={20} strokeWidth={2} />
    },
    {
        id: 2,
        title: "service_detail.details.data.maintenance.s2.title",
        description: "service_detail.details.data.maintenance.s2.desc",
        tags: ["service_detail.details.data.maintenance.s2.t1", "service_detail.details.data.maintenance.s2.t2", "service_detail.details.data.maintenance.s2.t3"],
        icon: <Settings size={20} strokeWidth={2} />
    },
    {
        id: 3,
        title: "service_detail.details.data.maintenance.s3.title",
        description: "service_detail.details.data.maintenance.s3.desc",
        tags: ["service_detail.details.data.maintenance.s3.t1", "service_detail.details.data.maintenance.s3.t2", "service_detail.details.data.maintenance.s3.t3"],
        icon: <Headset size={20} strokeWidth={2} />
    },
    {
        id: 4,
        title: "service_detail.details.data.maintenance.s4.title",
        description: "service_detail.details.data.maintenance.s4.desc",
        tags: ["service_detail.details.data.maintenance.s4.t1", "service_detail.details.data.maintenance.s4.t2", "service_detail.details.data.maintenance.s4.t3"],
        icon: <DatabaseBackup size={20} strokeWidth={2} />
    }
];

export const cloudServiceDetails: ServiceDetailItem[] = [
    {
        id: 1,
        title: "service_detail.details.data.cloud.s1.title",
        description: "service_detail.details.data.cloud.s1.desc",
        tags: ["service_detail.details.data.cloud.s1.t1", "service_detail.details.data.cloud.s1.t2", "service_detail.details.data.cloud.s1.t3"],
        icon: <CloudUpload size={20} strokeWidth={2} />
    },
    {
        id: 2,
        title: "service_detail.details.data.cloud.s2.title",
        description: "service_detail.details.data.cloud.s2.desc",
        tags: ["service_detail.details.data.cloud.s2.t1", "service_detail.details.data.cloud.s2.t2", "service_detail.details.data.cloud.s2.t3"],
        icon: <CloudDrizzle size={20} strokeWidth={2} />
    },
    {
        id: 3,
        title: "service_detail.details.data.cloud.s3.title",
        description: "service_detail.details.data.cloud.s3.desc",
        tags: ["service_detail.details.data.cloud.s3.t1", "service_detail.details.data.cloud.s3.t2", "service_detail.details.data.cloud.s3.t3"],
        icon: <Server size={20} strokeWidth={2} />
    },
    {
        id: 4,
        title: "service_detail.details.data.cloud.s4.title",
        description: "service_detail.details.data.cloud.s4.desc",
        tags: ["service_detail.details.data.cloud.s4.t1", "service_detail.details.data.cloud.s4.t2"],
        icon: <Users size={20} strokeWidth={2} />
    }
];

export const equipementServiceDetails: ServiceDetailItem[] = [
    {
        id: 1,
        title: "service_detail.details.data.equipment.s1.title",
        description: "service_detail.details.data.equipment.s1.desc",
        tags: ["service_detail.details.data.equipment.s1.t1", "service_detail.details.data.equipment.s1.t2"],
        icon: <Laptop size={20} strokeWidth={2} />
    },
    {
        id: 2,
        title: "service_detail.details.data.equipment.s2.title",
        description: "service_detail.details.data.equipment.s2.desc",
        tags: ["service_detail.details.data.equipment.s2.t1", "service_detail.details.data.equipment.s2.t2"],
        icon: <Download size={20} strokeWidth={2} />
    },
    {
        id: 3,
        title: "service_detail.details.data.equipment.s3.title",
        description: "service_detail.details.data.equipment.s3.desc",
        tags: ["service_detail.details.data.equipment.s3.t1", "service_detail.details.data.equipment.s3.t2"],
        icon: <ShieldCheck size={20} strokeWidth={2} />
    },
    {
        id: 4,
        title: "service_detail.details.data.equipment.s4.title",
        description: "service_detail.details.data.equipment.s4.desc",
        tags: ["service_detail.details.data.equipment.s4.t1", "service_detail.details.data.equipment.s4.t2"],
        icon: <RefreshCw size={20} strokeWidth={2} />
    }
];

export const softwareServiceDetails: ServiceDetailItem[] = [
    {
        id: 1,
        title: "service_detail.details.data.software.s4.title",
        description: "service_detail.details.data.software.s4.desc",
        tags: ["service_detail.details.data.software.s4.t1", "service_detail.details.data.software.s4.t2", "service_detail.details.data.software.s4.t3"],
        icon: <Blocks size={20} strokeWidth={2} />
    },
    {
        id: 2,
        title: "service_detail.details.data.software.s2.title",
        description: "service_detail.details.data.software.s2.desc",
        tags: ["service_detail.details.data.software.s2.t1", "service_detail.details.data.software.s2.t2", "service_detail.details.data.software.s2.t3"],
        icon: <Workflow size={20} strokeWidth={2} />
    },
    {
        id: 3,
        title: "service_detail.details.data.software.s3.title",
        description: "service_detail.details.data.software.s3.desc",
        tags: ["service_detail.details.data.software.s3.t1", "service_detail.details.data.software.s3.t2", "service_detail.details.data.software.s3.t3"],
        icon: <BarChart size={20} strokeWidth={2} />
    },
    {
        id: 4,
        title: "service_detail.details.data.software.s4.title",
        description: "service_detail.details.data.software.s4.desc",
        tags: ["service_detail.details.data.software.s4.t1", "service_detail.details.data.software.s4.t2", "service_detail.details.data.software.s4.t3"],
        icon: <AppWindow size={20} strokeWidth={2} />
    }
];