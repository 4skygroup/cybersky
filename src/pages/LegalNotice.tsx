import { useTranslation } from "react-i18next";

export default function LegalNotice() {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          {t("legal.title")}
        </h1>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              {t("legal.section1.title")}
            </h2>
            <p>{t("legal.section1.body")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              {t("legal.section2.title")}
            </h2>
            <p>{t("legal.section2.body")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              {t("legal.section3.title")}
            </h2>

            <p>{t("legal.section3.body")}</p>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>{t("legal.section3.li1")}</li>
              <li>{t("legal.section3.li2")}</li>
              <li>{t("legal.section3.li3")}</li>
              <li>{t("legal.section3.li4")}</li>
              <li>{t("legal.section3.li5")}</li>
              <li>{t("legal.section3.li6")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              {t("legal.section4.title")}
            </h2>
            <p>{t("legal.section4.body")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              {t("legal.section5.title")}
            </h2>

            <p>{t("legal.section5.body")}</p>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>{t("legal.section5.li1")}</li>
              <li>{t("legal.section5.li2")}</li>
              <li>{t("legal.section5.li3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              {t("legal.section6.title")}
            </h2>
            <p>{t("legal.section6.body")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              {t("legal.section7.title")}
            </h2>
            <p>{t("legal.section7.body")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              {t("legal.section8.title")}
            </h2>
            <p>{t("legal.section8.body")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
