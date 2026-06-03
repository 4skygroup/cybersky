import FAQ from "@/components/faq/Faq";
import { homeFaqData } from "@/components/faq/FaqData";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
    return (
        <>
        <Hero/>
        <WhyChooseUs/>
        <FAQ data={homeFaqData}/>
        </>
    );
}