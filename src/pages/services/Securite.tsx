import FAQ from "@/components/faq/Faq";
import { securiteFaqData } from "@/components/faq/FaqData";
import KeyFigures from "@/components/services/keyfigures/KeyFigures";
import { securiteFigures } from "@/components/services/keyfigures/KeyFiguresData";
import RiskZones from "@/components/services/riskzones/RiskZones";
import { securiteRiskZones } from "@/components/services/riskzones/RiskZonesData";
import ServiceHero from "@/components/services/ServiceHero";

export default function Securite() {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <ServiceHero
                tag="SÉCURITÉ"
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
        
        <FAQ data={securiteFaqData}/>
    </div>
    );
}