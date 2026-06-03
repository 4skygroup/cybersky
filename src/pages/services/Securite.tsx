import FAQ from "@/components/faq/Faq";
import { securiteFaqData } from "@/components/faq/FaqData";
import KeyFigures from "@/components/services/KeyFigures";
import { securiteFigures } from "@/components/services/KeyFiguresData";
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
        
        <FAQ data={securiteFaqData}/>
    </div>
    );
}