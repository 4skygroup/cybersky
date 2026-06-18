import { Cloud as CloudIcon } from 'lucide-react'; // On le renomme pour éviter le conflit avec le nom de la fonction

import ServiceHero from '@/components/services/ServiceHero';
import KeyFigures from '@/components/services/keyfigures/KeyFigures';
import ServiceDetails from '@/components/services/detail/ServiceDetails';
import Methodology from '@/components/services/methodology/Methodology';
import FAQ from '@/components/faq/Faq';

import { cloudFigures } from '@/components/services/keyfigures/KeyFiguresData';
import { cloudServiceDetails } from '@/components/services/detail/ServiceDetailData';
import { cloudMethodology } from '@/components/services/methodology/MethodologyData';
import { cloudFaqData } from '@/components/faq/FaqData';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';

export default function Cloud() {

    const { t } = useTranslation();

    return (
        <div className="w-full flex flex-col">

            <SEO
                title={t('service_detail.seo.cloud.title')}
                description={t('service_detail.seo.cloud.description')}
                url='/services/cloud'
            />

            <ServiceHero
                tag="service_detail.hero.cloud.tag"
                icon={<CloudIcon size={20} strokeWidth={1.5} fill="black" />}
                titlePart1="service_detail.hero.cloud.hero_part1"
                titleHighlight="service_detail.hero.cloud.hero_highlight"
                imageSrc="/cloud-image-cybersky.webp"
            />

            <KeyFigures figures={cloudFigures} />

            <ServiceDetails
                surtitle={t('service_detail.details.data.cloud.surtitle')}
                titlePart1={t('service_detail.details.data.cloud.titlePart1')}
                titleHighlight={t('service_detail.details.data.cloud.titleHighlight')}
                titlePart2={t('service_detail.details.data.cloud.titlePart2')}
                subtitle={t('service_detail.details.data.cloud.subtitle')} 
                services={cloudServiceDetails}
            />

            <Methodology
                surtitle="COMMENT ÇA SE PASSE"
                titlePart1="Une méthode"
                titleHighlight="claire,"
                titlePart2="en quatre temps"
                subtitle="Un parcours structuré, transparent, sans surprise. De la première conversation au suivi à long terme."
                steps={cloudMethodology}
            />

            <FAQ data={cloudFaqData} />

        </div>
    );
}