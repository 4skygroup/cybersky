export default function PrivacyPolicy() {
    return (
        <div className="w-full min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                    Politique de Confidentialité
                </h1>

                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <p className="text-sm italic text-slate-500">
                        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Collecte des données personnelles</h2>
                        <p>
                            Dans le cadre de l'utilisation du site CyberSky, Play To Sky Group est susceptible de collecter les données suivantes :
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Données d'identification (Nom, Prénom, Adresse e-mail) via nos formulaires de contact.</li>
                            <li>Données de navigation (Adresses IP, logs de connexion) à des fins de sécurité et d'analyse technique.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Utilisation des données</h2>
                        <p>
                            Les données collectées sont utilisées uniquement pour :
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Répondre à vos demandes de contact ou de devis.</li>
                            <li>Assurer le bon fonctionnement et la sécurité de notre plateforme d'infogérance.</li>
                            <li>Améliorer l'expérience utilisateur de nos services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Partage et conservation</h2>
                        <p>
                            Vos données personnelles ne sont jamais vendues à des tiers. Elles sont conservées pour une durée n'excédant pas celle nécessaire aux finalités pour lesquelles elles sont collectées, conformément à la législation en vigueur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Vos droits (RGPD)</h2>
                        <p>
                            Conformément à la réglementation européenne (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Vous pouvez également vous opposer à leur traitement.
                            <br /><br />
                            Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : <strong>contact@playtosky.com</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Cookies</h2>
                        <p>
                            Le site CyberSky utilise des cookies techniques strictement nécessaires à son fonctionnement. Si des cookies de suivi ou d'analyse sont mis en place, votre consentement explicite sera recueilli via un bandeau dédié lors de votre première visite.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}