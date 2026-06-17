import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
    const { t, i18n } = useTranslation();

    return (
        <div className="w-full min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{t('privacy.title')}</h1>

                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <p className="text-sm italic text-slate-500">
                        {t('privacy.updated')} {new Date().toLocaleDateString(i18n.language === 'fr' ? 'fr-FR' : 'en-US')}
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">{t('privacy.section1.title')}</h2>
                        <p>{t('privacy.section1.body')}</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>{t('privacy.section1.li1')}</li>
                            <li>{t('privacy.section1.li2')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">{t('privacy.section2.title')}</h2>
                        <p>{t('privacy.section2.body')}</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>{t('privacy.section2.li1')}</li>
                            <li>{t('privacy.section2.li2')}</li>
                            <li>{t('privacy.section2.li3')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">{t('privacy.section3.title')}</h2>
                        <p>{t('privacy.section3.body')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">{t('privacy.section4.title')}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t('privacy.section4.body') }} />
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">{t('privacy.section5.title')}</h2>
                        <p>{t('privacy.section5.body')}</p>
                    </section>
                </div>
            </div>
        </div>
    );
}