import FAQ from "@/components/faq/Faq";
import { homeFaqData } from "@/components/faq/FaqData";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
    return (
        <>
            <SEO
                title="Expert en Cybersécurité & Infogérance"
                description="CyberSky protège et gère votre infrastructure informatique. Cybersécurité, maintenance, cloud, équipement et solutions logicielles pour TPE/PME."
            />
        <Hero/>
        <WhyChooseUs/>
        <FAQ data={homeFaqData}/>
        </>
    );
}