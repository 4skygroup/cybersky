import ServiceCard from '@/components/services/ServiceCard';
import { servicesData } from '@/components/services/ServiceData';

export default function Services() {
    return (
        <div className="w-full bg-white min-h-screen pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col">

                {/* EN-TÊTE ASYMÉTRIQUE */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10 md:gap-4">
                    <h2 className="text-2xl md:text-3xl text-black max-w-md font-medium leading-snug">
                        Des <span className="text-cybersky-red">solutions IT</span> conçues pour faire avancer votre entreprise.
                    </h2>
                    <h2 className="text-2xl md:text-3xl text-black max-w-sm md:text-right font-medium leading-snug md:ml-auto">
                        Notre <span className="text-cybersky-red">savoir-faire technologique</span> mis à votre disposition
                    </h2>
                </div>

                {/* GRILLE DYNAMIQUE */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {servicesData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            item={service}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}