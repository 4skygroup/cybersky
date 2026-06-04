import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";

export default function Contact() {
    return (
        // 1. py-6 au lieu de py-12 : On réduit l'espace extérieur pour que le cadre puisse prendre presque tout l'écran
        // items-center justify-center pour qu'il soit parfaitement centré
        <div className="w-full min-h-[calc(100vh-80px)] bg-cybersky-dark px-4 md:px-8 pt-22 pb-8 flex items-center justify-center">
            <SEO
                title="Contactez-nous | Devis & Audit IT"
                description="Besoin d'un accompagnement IT ou d'un audit de sécurité ? Contactez l'équipe CyberSky pour discuter de votre stratégie informatique."
            />

            {/* 2. p-6 md:p-8 au lieu de p-12 : On réduit l'espace interne (le vide entre la bordure et le formulaire) */}
            <div className="max-w-6xl w-full mx-auto p-6 md:p-8 border border-white/20 relative">

                {/* 3. LE RETOUR DU H1 ! Avec une marge réduite (mb-4 au lieu de mb-8) */}
                <h1 className="text-3xl md:text-4xl text-center mb-4 md:mb-6 text-white tracking-wide">
                    Contactez-nous
                </h1>

                {/* 4. On réduit légèrement le gap (gap-8) pour compacter la grille */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* CÔTÉ GAUCHE : Logo */}
                    <div className="flex justify-center items-center h-full p-2">
                        <img
                            src="/logo-cybersky.png"
                            alt="Logo CyberSky"
                            className="w-full max-w-80 md:max-w-[320px] h-auto object-contain opacity-90"
                        />
                    </div>

                    {/* CÔTÉ DROIT : Formulaire */}
                    <div className="flex flex-col">
                        {/* 5. Marge réduite sous le sous-titre (mb-4) */}
                        <p className="text-xl md:text-2xl mb-4 md:mb-6 tracking-wide text-white text-center md:text-left">
                            Commençons votre stratégie !
                        </p>

                        <ContactForm />
                    </div>

                </div>
            </div>
        </div>
    );
}