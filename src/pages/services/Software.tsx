import { CodeXml } from 'lucide-react';

import ServiceHero from '@/components/services/ServiceHero';
import KeyFigures from '@/components/services/keyfigures/KeyFigures';
import ServiceDetails from '@/components/services/detail/ServiceDetails';
import Methodology from '@/components/services/methodology/Methodology';
import FAQ from '@/components/faq/Faq';

import { softwareFigures } from '@/components/services/keyfigures/KeyFiguresData';
import { softwareServiceDetails } from '@/components/services/detail/ServiceDetailData';
import { softwareMethodology } from '@/components/services/methodology/MethodologyData';
import { softwareFaqData } from '@/components/faq/FaqData';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';

export default function Software() {

    const { t } = useTranslation();

    return (
        <div className="w-full flex flex-col">
            <SEO
                title={t('service_detail.seo.software.title')}
                description={t('service_detail.seo.software.description')}
                url='/services/software'
            />

            <ServiceHero
                tag="service_detail.hero.software.tag"
                icon={<CodeXml size={20} strokeWidth={1.5} fill="black" />}
                titlePart1="service_detail.hero.software.hero_part1"
                titleHighlight="service_detail.hero.software.hero_highlight"
                imageSrc="/software-image-cybersky.webp"
            />

            <KeyFigures figures={softwareFigures} />

            <ServiceDetails
                surtitle={t('service_detail.details.data.software.surtitle')}
                titlePart1={t('service_detail.details.data.software.titlePart1')}
                titleHighlight={t('service_detail.details.data.software.titleHighlight')}
                titlePart2={t('service_detail.details.data.software.titlePart2')}
                subtitle={t('service_detail.details.data.software.subtitle')}
                services={softwareServiceDetails}
            />

            <Methodology
                surtitle="COMMENT ÇA SE PASSE"
                titlePart1="Une méthode"
                titleHighlight="claire,"
                titlePart2="en quatre temps"
                subtitle="Un parcours structuré, transparent, sans surprise. De la première conversation au suivi à long terme."
                steps={softwareMethodology}
            />

            <FAQ data={softwareFaqData} />

        </div>
    );
}