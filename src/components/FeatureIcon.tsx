import type { ReactNode } from 'react';

interface FeatureIconProps {
    icon: ReactNode;
    text: string;
}

export default function FeatureIcon({ icon, text }: FeatureIconProps) {
    return (
        // La largeur w-[140px] à w-[200px] est la clé pour forcer le retour à la ligne après 5 éléments
        <div className="flex flex-col items-center text-center w-35 md:w-45 lg:w-50 shrink-0">
            <div className="text-cybersky-red mb-5">
                {icon}
            </div>
            <p className="text-white text-xs text-left md:text-sm font-medium leading-relaxed max-w-30">
                {text}
            </p>
        </div>
    );
}