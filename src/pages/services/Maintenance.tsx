import ServiceHero from '@/components/services/ServiceHero';
import KeyFigures from '@/components/services/keyfigures/KeyFigures';
import ServiceDetails from '@/components/services/detail/ServiceDetails';
import Methodology from '@/components/services/methodology/Methodology';
import FAQ from '@/components/faq/Faq';

// Importation des données spécifiques à la Maintenance
import { maintenanceFigures } from '@/components/services/keyfigures/KeyFiguresData';
import { maintenanceServiceDetails } from '@/components/services/detail/ServiceDetailData';
import { maintenanceMethodology } from '@/components/services/methodology/MethodologyData';
import { maintenanceFaqData } from '@/components/faq/FaqData';
import { Wrench } from 'lucide-react';
import SEO from '@/components/SEO';

export default function Maintenance() {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <SEO
                title="Maintenance Informatique Proactive"
                description="Assurez la continuité de votre activité. Supervision 24/7, assistance utilisateur, mises à jour et gestion des sauvegardes pour votre TPE/PME."
            />

            <ServiceHero
                tag="MAINTENANCE"
                icon={<Wrench size={20} strokeWidth={1.5} fill="black" />}
                titlePart1="Maintenance informatique proactive pour"
                titleHighlight="votre entreprise"
                imageSrc="/maintenance-image-cybersky.png"
            />

            <KeyFigures figures={maintenanceFigures} />

            <ServiceDetails
                surtitle="NOS SERVICES"
                titlePart1="Une maintenance"
                titleHighlight="proactive,"
                titlePart2="pensée pour votre continuité"
                subtitle="Nous surveillons, maintenons et optimisons vos systèmes pour éviter les interruptions et garantir la stabilité de votre activité."
                services={maintenanceServiceDetails}
            />

            <Methodology
                surtitle="COMMENT ÇA SE PASSE"
                titlePart1="Une méthode"
                titleHighlight="claire,"
                titlePart2="en quatre temps"
                subtitle="Un seul interlocuteur, transparent, sans surprise. De la première conversation au suivi long terme."
                steps={maintenanceMethodology}
            />

            <FAQ data={maintenanceFaqData} />

        </div>
    );
}