import SEO from '@/components/SEO';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="w-full flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
            <SEO
                title="Page introuvable (404)"
                description="La page que vous recherchez a été déplacée ou n'existe pas sur le site CyberSky."
            />
            <h1 className="text-7xl md:text-9xl font-bold text-cybersky-red mb-6">404</h1>
            <h2 className="text-2xl md:text-4xl font-medium text-white mb-6">Page introuvable</h2>
            <p className="text-gray-400 mb-10 max-w-md">
                La page que vous recherchez a été déplacée, supprimée ou n'a jamais existé dans notre système.
            </p>
            <NavLink to="/" className="bg-cybersky-red text-white px-8 py-3.5 rounded-md text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition-colors duration-300">
                Retour à l'accueil
            </NavLink>
        </div>
    );
}