import { Link } from 'react-router-dom';
import type { ServiceDetailItem } from '@/components/services/detail/ServiceDetailData';
import { useTranslation } from 'react-i18next';

interface ServiceDetailsProps {
    surtitle: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2?: string;
    subtitle: string;
    services: ServiceDetailItem[];
}

export default function ServiceDetails({
    surtitle,
    titlePart1,
    titleHighlight,
    titlePart2 = "",
    subtitle,
    services
}: ServiceDetailsProps) {

    const { t } = useTranslation();

    return (
        <section className="w-full bg-cybersky-dark py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* EN-TÊTE DE SECTION (En blanc sur fond noir) */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-px bg-cybersky-red"></div>
                        <span className="text-cybersky-red text-sm font-bold tracking-widest uppercase">
                            {surtitle}
                        </span>
                        <div className="w-8 h-px bg-cybersky-red"></div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 max-w-3xl leading-tight">
                        {titlePart1} <span className="text-cybersky-red">{titleHighlight}</span> {titlePart2}
                    </h2>

                    <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                {/* GRILLE DES SERVICES (2 colonnes) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            // La bordure rouge et le layout flex
                            className="flex flex-col border border-cybersky-red rounded-lg p-8 h-full bg-[#161618] transition-transform duration-300 hover:-translate-y-1"
                        >

                            {/* Titre + Icône */}
                            <div className="flex items-center gap-3 text-cybersky-red mb-4">
                                {service.icon}
                                <h3 className="text-white font-bold text-lg">
                                    {t(service.title)}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {t(service.description)}
                            </p>

                            {/* Tags (Pilules) */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="border border-gray-600 text-gray-300 text-xs px-3 py-1.5 rounded-full"
                                    >
                                        {t(tag)}
                                    </span>
                                ))}
                            </div>

                            {/* Bouton - mt-auto le force à rester en bas */}
                            <Link
                                to="/contact"
                                className="mt-auto w-fit bg-cybersky-red text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                {t('service_detail.default_button')}
                            </Link>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}