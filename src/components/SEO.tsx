import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
}

export default function SEO({ title, description, image, url }: SEOProps) {
    const siteName = "CyberSky";
    const fullTitle = `${title} | ${siteName}`;
    const defaultImage = "/logo-cybersky.png";
    const ogImage = image || defaultImage;

    // L'URL canonique complète (à adapter avec ton vrai nom de domaine)
    const canonicalUrl = url ? `https://www.cybersky.fr${url}` : "https://www.cybersky.fr";

    return (
        <Helmet>
            {/* Balises standards */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {/* 2. AJOUT DE LA BALISE CANONICAL */}
            <link rel="canonical" href={canonicalUrl} />

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