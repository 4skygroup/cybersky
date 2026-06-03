import { NavLink } from 'react-router-dom';
import type { RiskZoneItem } from './RiskZonesData';

interface RiskZonesProps {
    surtitle: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2?: string;
    subtitle: string;
    zones: RiskZoneItem[];
}

export default function RiskZones({
    surtitle,
    titlePart1,
    titleHighlight,
    titlePart2 = "",
    subtitle,
    zones
}: RiskZonesProps) {
    return (
        <section className="w-full bg-white py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* EN-TÊTE DE SECTION */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-px bg-cybersky-red"></div>
                        <span className="text-cybersky-red text-sm font-bold tracking-widest uppercase">
                            {surtitle}
                        </span>
                        <div className="w-8 h-px bg-cybersky-red"></div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-medium text-black mb-6 max-w-2xl leading-tight">
                        {titlePart1} <span className="text-cybersky-red">{titleHighlight}</span> {titlePart2}
                    </h2>

                    <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                {/* GRILLE DES 5 ZONES */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                    {zones.map((zone) => (
                        // L'EFFET CARTE EST ICI : bordure, radius, overflow caché et h-full pour la grille
                        <div key={zone.id} className="flex flex-col border border-gray-200 rounded-xl overflow-hidden h-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300">

                            {/* Bloc Image */}
                            <div className="relative">
                                <img
                                    src={zone.image}
                                    alt={zone.title}
                                    className="w-full h-32 object-cover"
                                />
                                {/* L'icône rouge à cheval */}
                                <div className="absolute -bottom-5 left-5 bg-cybersky-red text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md z-10">
                                    {zone.icon}
                                </div>
                            </div>

                            {/* Textes de la carte */}
                            {/* pt-8 permet de dégager l'espace pour l'icône rouge */}
                            <div className="flex flex-col px-5 pt-8 pb-6 grow">
                                <h3 className="text-black font-bold text-base mb-2">
                                    {zone.title}
                                </h3>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    {zone.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

                {/* BOUTON CALL-TO-ACTION */}
                <NavLink
                    to="/contact"
                    className="bg-cybersky-red text-white px-8 py-3.5 rounded-md text-sm font-semibold tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
                >
                    Demander un devis
                </NavLink>

            </div>
        </section>
    );
}