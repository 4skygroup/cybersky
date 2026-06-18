import { useTranslation } from 'react-i18next';
import type { FigureItem } from './KeyFiguresData';

interface KeyFiguresProps {
    figures: FigureItem[];
}

export default function KeyFigures({ figures }: KeyFiguresProps) {

    const { t } = useTranslation();

    return (
        <section className="w-full bg-cybersky-dark py-16 md:py-20 px-6 md:px-12 border-b border-white/10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                <h2 className="sr-only">{t('service_detail.common.keyfigures.title')}</h2>

                {figures.map((figure) => (
                    // La grille Tailwind étire automatiquement ces conteneurs à la même hauteur
                    <div key={figure.id} className="flex flex-col items-center text-center h-full">
                        <span className="text-cybersky-red text-4xl md:text-5xl font-bold mb-4">
                            {t(figure.stat)}
                        </span>

                        {/* On ajoute un mb-6 pour aérer un peu avant la source */}
                        <p className="text-white text-sm md:text-base leading-relaxed mb-6 max-w-62.5">
                            {t(figure.description)}
                        </p>

                        {/* LE FIX EST ICI : mt-auto pousse la source tout en bas du conteneur */}
                        <span className="text-gray-500 text-xs font-medium uppercase tracking-wider mt-auto">
                            {t('service_detail.keyfigures.source')} : {t(figure.source)}
                        </span>
                    </div>
                ))}

            </div>
        </section>
    );
}

// {
//     figures.map((figure) => (
//         <div key={figure.id} className="...">
//             <span className="text-cybersky-red ...">
//                 {t(figure.stat)}
//             </span>
//             <p className="...">
//                 {t(figure.description)}
//             </p>
//             <span className="...">
//                 {/* Le label "Source" est commun */}
//                 {t('service_detail.common.keyfigures.source')} : {t(figure.source)}
//             </span>
//         </div>
//     ))
// }