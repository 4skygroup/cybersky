import ContactSection from "@/components/Contact/Contact";
import SEO from "@/components/SEO";

export default function ContactPage() {
    return (
        <div className="w-full min-h-[calc(100vh-80px)] bg-cybersky-dark px-4 md:px-8 pt-22 pb-8 flex items-center justify-center">
            <SEO
                title="Contactez-nous | Devis & Audit IT"
                description="Besoin d'un accompagnement IT ou d'un audit de sécurité ? Contactez l'équipe CyberSky pour discuter de votre stratégie informatique."
                url="/contact"
            />

            <ContactSection/>
        </div>
    );
}