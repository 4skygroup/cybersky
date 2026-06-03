import ContactForm from "@/components/ContactForm"; // Adapte le chemin selon ton dossier

export default function Contact() {
    return (
        // Remplacement du dégradé rose par le fond sombre CyberSky
        <div className="w-full min-h-screen bg-cybersky-dark py-24 px-6 md:px-12 flex items-center justify-center">

            {/* Cadre principal de la maquette (bordure blanche légère) */}
            <div className="max-w-6xl w-full mx-auto p-8 md:p-16 border border-white/20 relative">

                {/* Titre global centré */}
                <h1 className="text-3xl md:text-5xl text-center mb-20 text-white tracking-wide">
                    Contact us
                </h1>

                {/* Grille : Logo à gauche / Formulaire à droite */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* CÔTÉ GAUCHE : Logo centré */}
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="/logo-cybersky.png"
                            alt="Logo CyberSky"
                            className="w-full max-w-75 h-auto object-contain opacity-90"
                        />
                    </div>

                    {/* CÔTÉ DROIT : En-tête + Formulaire */}
                    <div className="flex flex-col">
                        {/* Aligné à gauche du formulaire, comme sur la maquette */}
                        <p className="text-xl md:text-2xl mb-8 tracking-wide text-white">
                            Let's start your strategy !
                        </p>

                        <ContactForm />
                    </div>

                </div>
            </div>

        </div>
    );
}