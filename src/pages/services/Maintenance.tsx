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
import { useTranslation } from 'react-i18next';

export default function Maintenance() {

    const { t } = useTranslation();
    
    return (
        <div className="w-full flex flex-col">
            <SEO
                title={t('service_detail.seo.maintenance.title')}
                description={t('service_detail.seo.maintenance.description')}
                url='/services/maintenance'
            />

            <ServiceHero
                tag="service_detail.hero.maintenance.tag"
                icon={<Wrench size={20} strokeWidth={1.5} fill="black" />}
                titlePart1="service_detail.hero.maintenance.hero_part1"
                titleHighlight="service_detail.hero.maintenance.hero_highlight"
                imageSrc="/maintenance-image-cybersky.webp"
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