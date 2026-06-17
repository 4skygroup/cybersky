import {
    Building2, Users, RefreshCw, Truck, Phone,
    ShieldCheck, Medal, RotateCcw, MailOpen
} from 'lucide-react';
import FeatureIcon from '@/components/FeatureIcon';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <-- Import

// Remplacement du texte par les clés de traduction
const FEATURES = [
    { icon: <Building2 size={56} strokeWidth={1.5} />, text: "home.why.features.f1" },
    { icon: <Users size={56} strokeWidth={1.5} />, text: "home.why.features.f2" },
    { icon: <RefreshCw size={56} strokeWidth={1.5} />, text: "home.why.features.f3" },
    { icon: <Truck size={56} strokeWidth={1.5} />, text: "home.why.features.f4" },
    { icon: <Phone size={56} strokeWidth={1.5} />, text: "home.why.features.f5" },
    { icon: <ShieldCheck size={56} strokeWidth={1.5} />, text: "home.why.features.f6" },
    { icon: <Medal size={56} strokeWidth={1.5} />, text: "home.why.features.f7" },
    { icon: <RotateCcw size={56} strokeWidth={1.5} />, text: "home.why.features.f8" },
    { icon: <MailOpen size={56} strokeWidth={1.5} />, text: "home.why.features.f9" },
];

export default function WhyChooseUs() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-cybersky-dark py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col">

                {/* EN-TÊTE */}
                <div className="flex flex-col items-start mb-20">
                    <span className="bg-cybersky-red text-white px-5 py-1.5 rounded-full text-sm font-bold mb-6">
                        {t('home.why.tag')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        {t('home.why.title_start')}<span className="text-cybersky-red">SKY</span> ?
                    </h2>
                </div>

                {/* GRILLE DES 9 ICÔNES */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-16 mb-32 w-full lg:max-w-6xl mx-auto">
                    {FEATURES.map((feature, index) => (
                        <FeatureIcon key={index} icon={feature.icon} text={t(feature.text)} />
                    ))}
                </div>

                {/* SOUS-SECTION : CARTES DE SERVICES */}
                <div className="flex flex-col items-center w-full mt-10">
                    <h3 className="text-2xl md:text-4xl text-white font-medium mb-16 text-center">
                        {t('home.why.subtitle')}
                    </h3>

                    <div className="flex flex-col md:flex-row gap-8 justify-center w-full max-w-4xl">

                        {/* CARTE 1 */}
                        <div className="flex flex-col w-full md:w-1/2 rounded-xl overflow-hidden border border-white/5 transition-transform hover:-translate-y-2 duration-300">
                            <div className="bg-black h-56 flex items-center justify-center border-b border-white/10 relative">
                                <img src="/logo-prepare-cybersky.webp" alt="Logo Préparation CyberSky" loading='lazy' />
                                <div className="absolute w-16 h-16 bg-cybersky-red/20 rounded-full blur-xl"></div>
                            </div>
                            <div className="bg-cybersky-dark p-8 flex flex-col items-center text-center h-full">
                                <p className="text-white text-base font-semibold mb-4 leading-relaxed min-h-12">
                                    {t('home.why.card1.title_l1')}<br />{t('home.why.card1.title_l2')}
                                </p>
                                <p className="text-white text-sm mb-8 leading-relaxed grow">
                                    {t('home.why.card1.desc')}
                                </p>
                                <Link to="/services" className="text-white text-sm underline underline-offset-4 decoration-white/50 hover:text-cybersky-red hover:decoration-cybersky-red transition-colors mt-auto">
                                    {t('home.why.card1.link')}
                                </Link>
                            </div>
                        </div>

                        {/* CARTE 2 */}
                        <div className="flex flex-col w-full md:w-1/2 rounded-xl overflow-hidden border border-white/5 transition-transform hover:-translate-y-2 duration-300">
                            <div className="bg-black h-56 flex items-center justify-center border-b border-white/10 relative">
                                <img src="/logo-maintain-cybersky.webp" alt="Logo Maintenance CyberSky" loading='lazy' />
                                <div className="absolute w-16 h-16 bg-cybersky-red/20 rounded-full blur-xl"></div>
                            </div>
                            <div className="bg-cybersky-dark p-8 flex flex-col items-center text-center h-full">
                                <p className="text-white text-base font-semibold mb-4 leading-relaxed min-h-12">
                                    {t('home.why.card2.title_l1')}<br />{t('home.why.card2.title_l2')}
                                </p>
                                <p className="text-white text-sm mb-8 leading-relaxed grow">
                                    {t('home.why.card2.desc')}
                                </p>
                                <Link to="/services" className="text-white text-sm underline underline-offset-4 decoration-white/50 hover:text-cybersky-red hover:decoration-cybersky-red transition-colors mt-auto">
                                    {t('home.why.card2.link')}
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}