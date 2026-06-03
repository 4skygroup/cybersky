import FAQ from "@/components/faq/Faq";
import { securiteFaqData } from "@/components/faq/FaqData";
import { securiteServiceDetails } from "@/components/services/detail/ServiceDetaildata";
import ServiceDetails from "@/components/services/detail/ServiceDetails";
import KeyFigures from "@/components/services/keyfigures/KeyFigures";
import { securiteFigures } from "@/components/services/keyfigures/KeyFiguresData";
import Methodology from "@/components/services/methodology/Methodology";
import { securiteMethodology } from "@/components/services/methodology/MethodologyData";
import RiskZones from "@/components/services/riskzones/RiskZones";
import { securiteRiskZones } from "@/components/services/riskzones/RiskZonesData";
import ServiceHero from "@/components/services/ServiceHero";
import { ShieldHalf } from "lucide-react";

export default function Securite() {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <ServiceHero
                tag="SÉCURITÉ"
                icon={<ShieldHalf size={20} strokeWidth={1.5} fill="currentColor" />}
                titlePart1="Sécurisez votre entreprise face aux"
                titleHighlight="cybermenaces"
                imageSrc="/securite-image-cybersky.png" // À remplacer par le chemin de ton image
            />

            <KeyFigures figures={securiteFigures} />

            <RiskZones
                surtitle="LES ZONES À RISQUES"
                titlePart1="Les cybermenaces touchent"
                titleHighlight="toute votre"
                titlePart2="entreprise"
                subtitle="Chaque poste, chaque utilisateur, chaque donnée peut être ciblé. Prenez mesure de l'étendue des risques potentiels."
                zones={securiteRiskZones}
            />

            <ServiceDetails
                surtitle="NOS SERVICES"
                titlePart1="Une protection"
                titleHighlight="complète,"
                titlePart2="sur-mesure"
                subtitle="Chaque poste, chaque utilisateur, chaque donnée peut être sécurisé. Notre équipe s'occupe de chaque aspect pour vous."
                services={securiteServiceDetails}
            />

            <Methodology
                surtitle="COMMENT ÇA MARCHE"
                titlePart1="Une méthode"
                titleHighlight="claire,"
                titlePart2="en quatre temps"
                subtitle="Un parcours structuré, transparent, sans surprise. De la première conversation au suivi long terme."
                steps={securiteMethodology}
            />
        
        <FAQ data={securiteFaqData}/>
    </div>
    );
}