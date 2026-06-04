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

export default function Software() {
    return (
        <div className="w-full flex flex-col">
            <SEO
                title="Solutions Logicielles & Digitalisation"
                description="Digitalisez et automatisez vos processus internes. Intégration d'outils métiers, tableaux de bord et applications web développées sur-mesure."
                url='/services/software'
            />

            <ServiceHero
                tag="SOFTWARE"
                icon={<CodeXml size={20} strokeWidth={1.5} fill="black" />}
                titlePart1="Digitalisez vos processus internes avec des"
                titleHighlight="solutions logicielles sur-mesure"
                imageSrc="/software-image-cybersky.png"
            />

            <KeyFigures figures={softwareFigures} />

            <ServiceDetails
                surtitle="NOS SERVICES"
                titlePart1="Des outils digitaux pour"
                titleHighlight="automatiser"
                titlePart2="et mieux piloter votre activité"
                subtitle="Nous concevons, configurons et développons des solutions logicielles pour simplifier vos processus et gagner du temps."
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