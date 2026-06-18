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
                surtitle={t('service_detail.details.data.equipment.surtitle')}
                titlePart1={t('service_detail.details.data.equipment.titlePart1')}
                titleHighlight={t('service_detail.details.data.equipment.titleHighlight')}
                titlePart2={t('service_detail.details.data.equipment.titlePart2')}
                subtitle={t('service_detail.details.data.equipment.subtitle')}
                services={equipementServiceDetails}
            />

            <Methodology
                surtitle={t('service_detail.methodology.data.equipment.surtitle')}
                titlePart1={t('service_detail.methodology.data.equipment.titlePart1')}
                titleHighlight={t('service_detail.methodology.data.equipment.titleHighlight')}
                titlePart2={t('service_detail.methodology.data.equipment.titlePart2')}
                subtitle={t('service_detail.methodology.data.equipment.subtitle')}                steps={equipementMethodology}
            />

            <FAQ data={equipementFaqData} />

        </div>
    );
}