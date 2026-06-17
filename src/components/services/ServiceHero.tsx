import { useTranslation } from "react-i18next";
import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface ServiceHeroProps {
    tag: string;
    icon: ReactNode;
    titlePart1: string; // Maintenant : clé i18n
    titleHighlight: string; // Maintenant : clé i18n
    buttonText?: string; // Maintenant : clé i18n
    imageSrc: string;
}

export default function ServiceHero({
    tag,
    icon,
    titlePart1,
    titleHighlight,
    buttonText = "service_detail.default_button", // Clé par défaut
    imageSrc
}: ServiceHeroProps) {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-cybersky-dark pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

                <div className="w-full md:w-1/2 flex flex-col items-start">
                    <div className="flex items-center gap-2 text-cybersky-red font-medium text-sm tracking-widest mb-6 uppercase">
                        {icon}
                        <span>{t(tag)}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-medium text-white leading-[1.1] mb-10 max-w-115">
                        {t(titlePart1)} <span className="text-cybersky-red">{t(titleHighlight)}</span>
                    </h1>

                    <NavLink to="/contact" className="bg-cybersky-red text-white px-8 py-3.5 rounded text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition-colors duration-300">
                        {t(buttonText)}
                    </NavLink>
                </div>

                <div className="w-full md:w-7/12">
                    <div className="w-full h-87.5 md:h-100">
                        <img
                            src={imageSrc}
                            alt={`${t(tag)} CyberSky`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}