export default function LegalNotice() {
    return (
        <div className="w-full min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                    Mentions Légales
                </h1>

                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Éditeur du site</h2>
                        <p>
                            Le site <strong>CyberSky</strong> est édité par la société <strong>Play To Sky Group (4 Sky Group)</strong>.<br />
                            Siège social : Paris, France.<br />
                            Directeur de la publication : <em>Robbin-James Agoh</em>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Hébergement</h2>
                        <p>
                            Le site est hébergé par :<br />
                            <strong>OVH</strong><br />
                            Adresse : <em>56, rue de Monceau
                                Paris, France</em><br />
                            Téléphone : <em>+33 6 51 08 17 38</em>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Propriété intellectuelle</h2>
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Limitation de responsabilité</h2>
                        <p>
                            Play To Sky Group s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur le site CyberSky. Toutefois, la société décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}