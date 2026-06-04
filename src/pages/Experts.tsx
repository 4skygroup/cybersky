import ExpertCard from '@/components/experts/ExpertCard';
import { expertsData } from '@/components/experts/ExpertData';
import SEO from '@/components/SEO';

export default function Experts() {
    return (
        <div className="w-full bg-white min-h-screen pt-32 pb-24 px-6 md:px-12">
            <SEO
                title="Nos Experts IT & Cybersécurité"
                description="Le savoir-faire CyberSky porté par une équipe d'experts. Découvrez les professionnels qui accompagnent votre transformation numérique au quotidien."
            />
            <div className="max-w-5xl mx-auto flex flex-col">

                {/* TITRE DE LA PAGE */}
                <h1 className="text-3xl md:text-4xl text-center text-cybersky-dark mb-24 leading-snug">
                    Le savoir-faire de CYBER<span className="text-cybersky-red">SKY</span> préservé par<br className="hidden md:block" /> une pointe d'experts
                </h1>

                {/* LISTE DES EXPERTS */}
                <div className="flex flex-col gap-24">
                    {expertsData.map((expert, index) => (
                        <ExpertCard
                            key={expert.id}
                            item={expert}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}