import { Laptop } from 'lucide-react';

import ServiceHero from '@/components/services/ServiceHero';
import KeyFigures from '@/components/services/keyfigures/KeyFigures';
import ServiceDetails from '@/components/services/detail/ServiceDetails';
import Methodology from '@/components/services/methodology/Methodology';
import FAQ from '@/components/faq/Faq';

import { equipementFigures } from '@/components/services/keyfigures/KeyFiguresData';
import { equipementServiceDetails } from '@/components/services/detail/ServiceDetailData';
import { equipementMethodology } from '@/components/services/methodology/MethodologyData';
import { equipementFaqData } from '@/components/faq/FaqData';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';

export default function Equipement() {

    const { t } = useTranslation();
    
    return (
        <div className="w-full flex flex-col">
            <SEO
                title={t('service_detail.seo.equipment.title')}
                description={t('service_detail.seo.equipment.description')}
                url='/services/equipement'
            />

            <ServiceHero
                tag="service_detail.hero.equipment.tag"
                icon={<Laptop size={20} strokeWidth={1.5} fill="black" />}
                titlePart1="service_detail.hero.equipment.hero_part1"
                titleHighlight="service_detail.hero.equipment.hero_highlight"
                imageSrc="/equipement-image-cybersky.webp"
            />

            <KeyFigures figures={equipementFigures} />

            <ServiceDetails
                surtitle="NOS SERVICES"
                titlePart1="Du matériel"
                titleHighlight="professionnel,"
                titlePart2="installé et configuré pour vos usages"
                subtitle="Nous vous aidons à choisir, déployer et configurer les équipements adaptés à vos équipes et à votre activité."
                services={equipementServiceDetails}
            />

            <Methodology
                surtitle="COMMENT ÇA SE PASSE"
                titlePart1="Une méthode"
                titleHighlight="claire,"
                titlePart2="en quatre temps"
                subtitle="Un parcours structuré, transparent, sans surprise. De la première conversation au suivi à long terme."
                steps={equipementMethodology}
            />

            <FAQ data={equipementFaqData} />

        </div>
    );
}