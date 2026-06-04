import { Check } from 'lucide-react';
import type { MethodologyItem } from './MethodologyData';

interface MethodologyProps {
    surtitle: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2?: string;
    subtitle: string;
    steps: MethodologyItem[];
}

export default function Methodology({
    surtitle,
    titlePart1,
    titleHighlight,
    titlePart2 = "",
    subtitle,
    steps
}: MethodologyProps) {
    return (
        <section className="w-full bg-white py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* EN-TÊTE DE SECTION */}
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-px bg-cybersky-red"></div>
                        <span className="text-cybersky-red text-sm tracking-widest uppercase">
                            {surtitle}
                        </span>
                        <div className="w-8 h-px bg-cybersky-red"></div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6 max-w-3xl leading-tight">
                        {titlePart1} <span className="text-cybersky-red">{titleHighlight}</span> {titlePart2}
                    </h2>

                    <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                {/* GRILLE DES 4 ÉTAPES (Transformée en liste ordonnée) */}
                <ol className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {steps.map((step) => (
                        <li key={step.id} className="flex flex-col items-center text-center">

                            {/* LE BLOC ICÔNE AVEC LA PASTILLE ROUGE */}
                            <div className="relative mb-6">
                                {/* Cercle principal */}
                                <div className="w-20 h-20 rounded-full border border-cybersky-red bg-white flex items-center justify-center text-cybersky-red shadow-sm">
                                    {step.icon}
                                </div>

                                {/* Petite pastille rouge (Badge) */}
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-cybersky-red rounded-full border-2 border-white flex items-center justify-center text-white">
                                    <Check size={12} strokeWidth={4} />
                                </div>
                            </div>

                            {/* Textes de l'étape */}
                            <h3 className="text-black font-bold text-lg mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-55">
                                {step.description}
                            </p>

                        </li>
                    ))}
                </ol>

            </div>
        </section>
    );
}