import ExpertCard from '@/components/experts/ExpertCard';
import { expertsData } from '@/components/experts/ExpertData';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next'; // <-- Import

export default function Experts() {
    const { t } = useTranslation(); // <-- Initialisation

    return (
        <div className="w-full bg-white min-h-screen pt-32 pb-24 px-6 md:px-12">
            <SEO
                title={t('experts.seo.title')}
                description={t('experts.seo.description')}
                url='/experts'
            />
            <div className="max-w-5xl mx-auto flex flex-col">

                {/* TITRE DE LA PAGE TRADUIT ET DÉCOUPÉ */}
                <h1 className="text-3xl md:text-4xl text-center text-cybersky-dark mb-24 leading-snug">
                    {t('experts.title_p1')}<span className="text-cybersky-red">SKY</span> {t('experts.title_p2')}<br className="hidden md:block" /> {t('experts.title_p3')}
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