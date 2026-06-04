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

export default function Cloud() {
    return (
        <div className="w-full flex flex-col">

            <SEO
                title="Solutions Cloud & Hébergement sécurisé"
                description="Externalisez votre informatique pour plus de sécurité et flexibilité. Migration, sauvegarde automatisée et serveurs cloud sur-mesure."
                url='/services/cloud'
            />

            <ServiceHero
                tag="CLOUD"
                icon={<CloudIcon size={20} strokeWidth={1.5} fill="black" />}
                titlePart1="Externalisez votre informatique pour plus de"
                titleHighlight="sécurité et de flexibilité"
                imageSrc="/cloud-image-cybersky.png"
            />

            <KeyFigures figures={cloudFigures} />

            <ServiceDetails
                surtitle="NOS SERVICES"
                titlePart1="Des solutions cloud"
                titleHighlight="flexibles,"
                titlePart2="sécurisées et adaptées"
                subtitle="Nous vous accompagnons dans la migration, la sauvegarde et l'hébergement de vos données pour travailler avec plus de sérénité."
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