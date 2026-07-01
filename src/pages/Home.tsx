import FAQ from "@/components/faq/Faq";
import { homeFaqData } from "@/components/faq/FaqData";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import WhyChooseUs from "@/components/WhyChooseUs";
import Partners from "@/Partners/Partners";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("home.seo.title")}
        description={t("home.seo.description")}
        url="/"
      />
      <Hero />
      <Partners />
      <WhyChooseUs />
      <FAQ data={homeFaqData} />
    </>
  );
}
