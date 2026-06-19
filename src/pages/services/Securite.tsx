import FAQ from "@/components/faq/Faq";
import { securiteFaqData } from "@/components/faq/FaqData";
import SEO from "@/components/SEO";
import { securiteServiceDetails } from "@/components/services/detail/ServiceDetailData";
import ServiceDetails from "@/components/services/detail/ServiceDetails";
import KeyFigures from "@/components/services/keyfigures/KeyFigures";
import { securiteFigures } from "@/components/services/keyfigures/KeyFiguresData";
import Methodology from "@/components/services/methodology/Methodology";
import { securiteMethodology } from "@/components/services/methodology/MethodologyData";
import RiskZones from "@/components/services/riskzones/RiskZones";
import { securiteRiskZones } from "@/components/services/riskzones/RiskZonesData";
import ServiceHero from "@/components/services/ServiceHero";
import { ShieldCogCornerIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Securite() {

    const { t } = useTranslation();

    return (
        <div className="w-full flex flex-col">
            <SEO
                title={t('service_detail.seo.security.title')}
                description={t('service_detail.seo.security.description')}
                url="/services/cybersecurite"
            />
            <ServiceHero
                tag="service_detail.hero.security.tag"
                icon={<ShieldCogCornerIcon size={20} strokeWidth={1.5} fill="black" />}
                titlePart1="service_detail.hero.security.hero_part1"
                titleHighlight="service_detail.hero.security.hero_highlight"
                imageSrc="/securite-image-cybersky.webp" // À remplacer par le chemin de ton image
            />

            <KeyFigures figures={securiteFigures} />

            <RiskZones
                surtitle={t('service_detail.riskzones.data.security.surtitle')}
                titlePart1={t('service_detail.riskzones.data.security.titlePart1')}
                titleHighlight={t('service_detail.riskzones.data.security.titleHighlight')}
                titlePart2={t('service_detail.riskzones.data.security.titlePart2')}
                subtitle={t('service_detail.riskzones.data.security.subtitle')}
                zones={securiteRiskZones}
            />

            <ServiceDetails
                surtitle={t('service_detail.details.data.securite.surtitle')}
                titlePart1={t('service_detail.details.data.securite.titlePart1')}
                titleHighlight={t('service_detail.details.data.securite.titleHighlight')}
                titlePart2={t('service_detail.details.data.securite.titlePart2')}
                subtitle={t('service_detail.details.data.securite.subtitle')}
                services={securiteServiceDetails}
            />

            <Methodology
                surtitle={t('service_detail.methodology.data.security.surtitle')}
                titlePart1={t('service_detail.methodology.data.security.titlePart1')}
                titleHighlight={t('service_detail.methodology.data.security.titleHighlight')}
                titlePart2={t('service_detail.methodology.data.security.titlePart2')}
                subtitle={t('service_detail.methodology.data.security.subtitle')}
                steps={securiteMethodology}
            />

            <FAQ data={securiteFaqData} />
        </div>
    );
}