import {
    Building2, Users, RefreshCw, Truck, Phone,
    ShieldCheck, Medal, RotateCcw, MailOpen
} from 'lucide-react';
import FeatureIcon from '@/components/FeatureIcon';

// Les 9 éléments exacts de la maquette Figma
const FEATURES = [
    { icon: <Building2 size={56} strokeWidth={1.5} />, text: "153+ agences en France et DOM-TOM" },
    { icon: <Users size={56} strokeWidth={1.5} />, text: "25 000+ clients accompagnés au quotidien" },
    { icon: <RefreshCw size={56} strokeWidth={1.5} />, text: "98% de nos clients nous renouvellent leur confiance chaque année" },
    { icon: <Truck size={56} strokeWidth={1.5} />, text: "Intervention sur site entre 4h et 36h en cas d'incident non résolu à distance" },
    { icon: <Phone size={56} strokeWidth={1.5} />, text: "Assistance téléphonique illimitée" },
    { icon: <ShieldCheck size={56} strokeWidth={1.5} />, text: "Sans coûts cachés pour une transparence totale envers nos clients" },
    { icon: <Medal size={56} strokeWidth={1.5} />, text: "Nos audits et interventions sont garantis conformes aux normes européennes de sécurité." },
    { icon: <RotateCcw size={56} strokeWidth={1.5} />, text: "Accompagnement complet pour une informatique sécurisée et performante." },
    { icon: <MailOpen size={56} strokeWidth={1.5} />, text: "Devis envoyé dans les 15 minutes" },
];

export default function WhyChooseUs() {
    return (
        // Utilisation d'un code couleur HEX dur pour s'assurer que le fond soit noir
        <section className="w-full bg-cybersky-dark py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col">

                {/* EN-TÊTE (Aligné à gauche selon le Figma) */}
                <div className="flex flex-col items-start mb-20">
                    <span className="bg-cybersky-red text-white px-5 py-1.5 rounded-full text-sm font-bold mb-6">
                        Nos services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        Pourquoi choisir CYBER<span className="text-cybersky-red">SKY</span> ?
                    </h2>
                </div>

                {/* GRILLE DES 9 ICÔNES (flex-wrap permet d'avoir naturellement 5 en haut et 4 centrés en bas) */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-16 mb-32 w-full lg:max-w-6xl mx-auto">
                    {FEATURES.map((feature, index) => (
                        <FeatureIcon key={index} icon={feature.icon} text={feature.text} />
                    ))}
                </div>

                {/* SOUS-SECTION : CARTES DE SERVICES */}
                <div className="flex flex-col items-center w-full mt-10">
                    <h3 className="text-2xl md:text-4xl text-white font-medium mb-16 text-center">
                        S’intéresser aux risques des services informatiques ...
                    </h3>

                    <div className="flex flex-col md:flex-row gap-8 justify-center w-full max-w-4xl">

                        {/* CARTE 1 */}
                        <div className="flex flex-col w-full md:w-1/2 rounded-xl overflow-hidden border border-white/5 transition-transform hover:-translate-y-2 duration-300">
                            {/* Moitié haute : Noire avec icône */}
                            <div className="bg-black h-56 flex items-center justify-center border-b border-white/10 relative">
                                {/* Remplace ceci par l'export SVG de Figma si besoin */}
                                <img src="/logo-prepare-cybersky.png" alt="Logo Préparation CyberSky"/>
                                <div className="absolute w-16 h-16 bg-cybersky-red/20 rounded-full blur-xl"></div>
                            </div>
                            {/* Moitié basse : Gris très foncé avec texte */}
                            <div className="bg-cybersky-dark p-8 flex flex-col items-center text-center h-full">
                                <p className="text-white text-base font-semibold mb-4 leading-relaxed min-h-12">
                                    Piratage, ransomwares,<br />fuites de données : êtes-vous préparé ?
                                </p>
                                <p className="text-white text-sm mb-8 leading-relaxed grow">
                                    Faites le point sur la sécurité de votre système informatique et protégez vos données
                                </p>
                                <a href="/services" className="text-white text-sm underline underline-offset-4 decoration-white/50 hover:text-cybersky-red hover:decoration-cybersky-red transition-colors mt-auto">
                                    En savoir plus
                                </a>
                            </div>
                        </div>

                        {/* CARTE 2 */}
                        <div className="flex flex-col w-full md:w-1/2 rounded-xl overflow-hidden border border-white/5 transition-transform hover:-translate-y-2 duration-300">
                            {/* Moitié haute : Noire avec icône */}
                            <div className="bg-black h-56 flex items-center justify-center border-b border-white/10 relative">
                                {/* Remplace ceci par l'export SVG de Figma si besoin */}
                                <img src="/logo-maintain-cybersky.png" alt="Logo Maintenance CyberSky" />
                                <div className="absolute w-16 h-16 bg-cybersky-red/20 rounded-full blur-xl"></div>
                            </div>
                            {/* Moitié basse : Gris très foncé avec texte */}
                            <div className="bg-cybersky-dark p-8 flex flex-col items-center text-center h-full">
                                <p className="text-white text-base font-semibold mb-4 leading-relaxed min-h-12">
                                    Offrez à votre parc informatique<br />une maintenance sans faille !
                                </p>
                                <p className="text-white text-sm mb-8 leading-relaxed grow">
                                    Notre contrat de maintenance vous garantit une continuité de service opérationnelle de votre activité
                                </p>
                                <a href="/services" className="text-white text-sm underline underline-offset-4 decoration-white/50 hover:text-cybersky-red hover:decoration-cybersky-red transition-colors mt-auto">
                                    En savoir plus
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}