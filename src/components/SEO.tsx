import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    // Optionnel : permet d'écraser l'image par défaut si un jour tu en as besoin
    image?: string;
}

export default function SEO({ title, description, image }: SEOProps) {
    const siteName = "CyberSky";
    const fullTitle = `${title} | ${siteName}`;
    const defaultImage = "/logo-cybersky.png";

    const ogImage = image || defaultImage;

    return (
        <Helmet>
            {/* Balises standards */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Balises Open Graph (Facebook, LinkedIn, Discord...) */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={ogImage} />

            {/* Balises Twitter Card (nécessaires pour Twitter) */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
}