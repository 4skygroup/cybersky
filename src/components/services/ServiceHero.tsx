import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface ServiceHeroProps {
    tag: string;
    icon: ReactNode; 
    titlePart1: string;
    titleHighlight: string;
    buttonText?: string;
    imageSrc: string;
}

export default function ServiceHero({
    tag,
    icon,
    titlePart1,
    titleHighlight,
    buttonText = "Demander un devis",
    imageSrc
}: ServiceHeroProps) {
    return (
        <section className="w-full bg-cybersky-dark pt-32 pb-24 px-6 md:px-12">
            {/* On peut passer en max-w-7xl si on veut encore plus étirer l'image sur les grands écrans */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

                {/* CÔTÉ GAUCHE : On réduit à 5/12 pour laisser plus de place à l'image */}
                <div className="w-full md:w-1/2 flex flex-col items-start">

                    <div className="flex items-center gap-2 text-cybersky-red font-medium text-sm tracking-widest mb-6 uppercase">
                        {/* Utilisation de ShieldHalf */}
                        {icon}
                        <span>{tag}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-medium text-white leading-[1.1] mb-10 max-w-115">
                        {titlePart1} <span className="text-cybersky-red">{titleHighlight}</span>
                    </h1>

                    <NavLink to="/contact" className="bg-cybersky-red text-white px-8 py-3.5 rounded text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition-colors duration-300">
                        {buttonText}
                    </NavLink>
                </div>

                {/* CÔTÉ DROIT : On agrandit à 7/12 */}
                <div className="w-full md:w-7/12">
                    <div className="w-full h-87.5 md:h-100">
                        <img
                            src={imageSrc}
                            alt={`${tag} CyberSky`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}