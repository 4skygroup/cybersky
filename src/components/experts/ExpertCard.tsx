import type { ExpertItem } from './ExpertData';
import { useTranslation } from 'react-i18next';

interface ExpertCardProps {
    item: ExpertItem;
    index: number;
}

export default function ExpertCard({ item, index }: ExpertCardProps) {
    const { t } = useTranslation();
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col gap-10 md:gap-16 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* ZONE TEXTE */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
                <h3 className="text-xl font-medium text-black mb-4">{item.name}</h3>

                {/* On traduit la description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    {t(item.description)}
                </p>

                <div className="flex flex-col gap-3">
                    {/* On traduit le label */}
                    <span className="text-black text-sm">{t('experts.label_specialties')}</span>
                    <div className="flex flex-wrap gap-3">
                        {item.specialties.map((spec, i) => (
                            <span
                                key={i}
                                className="border border-[#F23333] rounded-[40px] px-4 py-1 text-[#F23333] text-xs font-medium"
                            >
                                {/* On traduit la pilule */}
                                {t(spec)}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ZONE IMAGE */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={item.image}
                    alt={`Portrait de ${item.name}`}
                    className="w-full max-w-87.5 object-cover"
                    loading="lazy"
                />
            </div>
        </div>
    );
}