import { useTranslation } from 'react-i18next';
import ContactForm from "./ContactForm";
import ContactInfoCards from "./ContactInfoCard";

export default function Contact() {
    // On importe la fonction 't' pour traduire, et 'i18n' pour changer la langue
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <section className="min-h-screen w-full bg-[#0a0a0a] px-6 py-20 lg:px-16 mt-4 md:mt-8 relative">

            {/* ── Sélecteur de langue (Temporaire pour tester) ── */}
            <div className="absolute top-4 right-6 flex gap-2">
                <button
                    onClick={() => changeLanguage('fr')}
                    className={`px-3 py-1 rounded-md text-sm font-bold transition-colors ${i18n.language === 'fr' ? 'bg-white text-black' : 'bg-white/10 text-white/50 hover:bg-white/20'}`}
                >
                    FR
                </button>
                <button
                    onClick={() => changeLanguage('en')}
                    className={`px-3 py-1 rounded-md text-sm font-bold transition-colors ${i18n.language === 'en' ? 'bg-white text-black' : 'bg-white/10 text-white/50 hover:bg-white/20'}`}
                >
                    EN
                </button>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">

                {/* ── Left column ── */}
                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="text-t3 font-bold leading-tight tracking-tight text-white md:text-h6">
                            {/* Appel de la traduction ici */}
                            {t('contact.title')}
                        </h2>
                        <p className="mt-4 max-w-md text-base leading-relaxed text-white/50">
                            {/* Et ici */}
                            {t('contact.subtitle')}
                        </p>
                    </div>

                    <ContactInfoCards />
                </div>

                {/* ── Right column ── */}
                <div>
                    <ContactForm />
                </div>

            </div>
        </section>
    );
}