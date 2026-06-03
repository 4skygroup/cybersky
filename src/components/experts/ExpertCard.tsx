import type { ExpertItem } from './ExpertData';

interface ExpertCardProps {
    item: ExpertItem;
    index: number;
}

export default function ExpertCard({ item, index }: ExpertCardProps) {
    // Détermine si on est sur un élément pair ou impair (0, 1, 2...)
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col gap-10 md:gap-16 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            {/* ZONE TEXTE */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
                <h3 className="text-xl font-medium text-black mb-4">{item.name}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    {item.description}
                </p>

                <div className="flex flex-col gap-3">
                    <span className="text-black text-sm">Spécialités</span>
                    <div className="flex flex-wrap gap-3">
                        {item.specialties.map((spec, i) => (
                            <span
                                key={i}
                                // Reproduction du trait rouge en forme de pilule
                                className="border border-[#F23333] rounded-[40px] px-4 py-1 text-[#F23333] text-xs font-medium"
                            >
                                {spec}
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
                />
            </div>

        </div>
    );
}