import { useTranslation } from "react-i18next";

export default function LegalNotice() {
    const { t } = useTranslation();

    return (
        <div className="w-full min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                    {t('legal.title')}
                </h1>

                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">{t('legal.section1.title')}</h2>
                        {/* Utilisation de dangerouslySetInnerHTML pour parser les <br /> et <strong> */}
                        <p dangerouslySetInnerHTML={{ __html: t('legal.section1.body') }} />
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">{t('legal.section2.title')}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t('legal.section2.body') }} />
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">{t('legal.section3.title')}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t('legal.section3.body') }} />
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">{t('legal.section4.title')}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t('legal.section4.body') }} />
                    </section>
                </div>
            </div>
        </div>
    );
}