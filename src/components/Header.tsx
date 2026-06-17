import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface SubItem {
    label: string;
    path: string;
}

interface NavItem {
    label: string;
    path: string;
    external?: boolean;
    subItems?: SubItem[];
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [servicesOpen, setServicesOpen] = useState<boolean>(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);

    // Nouvel état pour gérer l'ouverture du dropdown de langue
    const [langMenuOpen, setLangMenuOpen] = useState<boolean>(false);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const { t, i18n } = useTranslation();

    // Fonction sécurisée pour récupérer la langue actuelle (en majuscules)
    const currentLang = (i18n.language || 'fr').substring(0, 2).toUpperCase();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLangMenuOpen(false); // Ferme le dropdown après le clic
    };

    const navItems: NavItem[] = [
        { label: t('header.group'), path: "https://www.playtosky.com/", external: true },
        {
            label: t('header.services'),
            path: "/services",
            subItems: [
                { label: t('header.sub.maintenance'), path: "/services/maintenance" },
                { label: t('header.sub.equipement'), path: "/services/equipement" },
                { label: t('header.sub.cybersecurite'), path: "/services/cybersecurite" },
                { label: t('header.sub.cloud'), path: "/services/cloud" },
                { label: t('header.sub.software'), path: "/services/software" },
            ],
        },
        { label: t('header.experts'), path: "/experts" },
        { label: t('header.contact'), path: "/contact" },
    ];

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setServicesOpen(true);
    };
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black flex items-center justify-between px-6 md:px-8 py-4">

            {/* ── Zone Gauche : Logo + Language Switcher ── */}
            <div className="flex items-center gap-6 shrink-0">
                <NavLink to="/">
                    <img src="/logo-cybersky.webp" alt="Logo CyberSky" className="h-7 md:h-9" />
                </NavLink>

                {/* Dropdown des langues */}
                <div className="relative" onMouseLeave={() => setLangMenuOpen(false)}>
                    <button
                        onClick={() => setLangMenuOpen(!langMenuOpen)}
                        className="flex items-center gap-1.5 font-glacial text-t5 text-white/80 hover:text-white transition-colors duration-200 mt-1"
                    >
                        {currentLang}
                        <svg
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${langMenuOpen ? "rotate-180" : ""}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {langMenuOpen && (
                        <div className="absolute top-full left-0 pt-2 w-16">
                            <ul className="bg-black border border-white/10 rounded-md py-2 shadow-lg">
                                <li>
                                    <button
                                        onClick={() => changeLanguage('fr')}
                                        className={`w-full text-center px-2 py-1 font-glacial text-t6 transition-colors duration-200 ${currentLang === 'FR' ? "text-cybersky-red" : "text-white hover:text-cybersky-red hover:bg-white/5"}`}
                                    >
                                        FR
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => changeLanguage('en')}
                                        className={`w-full text-center px-2 py-1 font-glacial text-t6 transition-colors duration-200 ${currentLang === 'EN' ? "text-cybersky-red" : "text-white hover:text-cybersky-red hover:bg-white/5"}`}
                                    >
                                        EN
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* ── Desktop nav ── */}
            <div className="hidden md:flex items-center gap-10">
                <ul className="flex items-center gap-10">
                    {navItems.map(({ label, path, external, subItems }) => (
                        <li
                            key={path}
                            className="relative"
                            onMouseEnter={subItems ? handleMouseEnter : undefined}
                            onMouseLeave={subItems ? handleMouseLeave : undefined}
                        >
                            {external ? (
                                <a
                                    href={path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-glacial text-t5 text-white hover:text-cybersky-red transition-colors duration-200"
                                >
                                    {label}
                                </a>
                            ) : (
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `font-glacial text-t5 transition-colors duration-200 flex items-center gap-1 
                                        ${isActive ? "text-cybersky-red" : "text-white hover:text-cybersky-red"}`
                                    }
                                >
                                    {label}
                                    {subItems && (
                                        <svg
                                            className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </NavLink>
                            )}

                            {/* Dropdown desktop pour Services */}
                            {subItems && servicesOpen && (
                                <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black border border-white/10 rounded-md py-2 w-48 shadow-lg">
                                    {subItems.map((sub) => (
                                        <li key={sub.path}>
                                            <NavLink
                                                to={sub.path}
                                                onClick={() => setServicesOpen(false)}
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 font-glacial text-t6 transition-colors duration-200 ${isActive ? "text-cybersky-red" : "text-white hover:text-cybersky-red hover:bg-white/5"}`
                                                }
                                            >
                                                {sub.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Hamburger (Mobile) */}
            <button
                className={`md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50 relative ${menuOpen ? "invisible" : ""}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
            >
                <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>

            {/* ── Mobile menu ── */}
            <div
                className={`fixed inset-0 bg-cybersky-red md:hidden flex flex-col transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                style={{ zIndex: 40 }}
            >
                <button
                    className="absolute top-5 right-8 text-white text-3xl font-light leading-none"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Fermer le menu"
                >
                    ✕
                </button>

                <div className="flex justify-center mt-16 mb-12">
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>
                        <img src="/logo-cybersky.webp" alt="CyberSky Logo" className="h-10" style={{ filter: "brightness(0) invert(1)" }} />
                    </NavLink>
                </div>

                <ul className="flex flex-col items-center gap-8 flex-1">
                    {navItems.map(({ label, path, external, subItems }) => (
                        <li key={path} className="text-center">
                            {external ? (
                                <a
                                    href={path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    className="font-glacial text-t3 text-white"
                                >
                                    {label}
                                </a>
                            ) : subItems ? (
                                <div>
                                    <button
                                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                                        className="font-glacial text-t3 text-white flex items-center gap-2 mx-auto"
                                    >
                                        {label}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <ul className={`overflow-hidden transition-all duration-300 flex flex-col items-center gap-3 ${mobileServicesOpen ? "max-h-52 mt-4" : "max-h-0"}`}>
                                        {subItems.map((sub) => (
                                            <li key={sub.path}>
                                                <NavLink
                                                    to={sub.path}
                                                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                                                    className="font-glacial text-t4 text-white/80 hover:text-white transition-colors duration-200"
                                                >
                                                    {sub.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <NavLink
                                    to={path}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-glacial text-t3 text-white"
                                >
                                    {label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mention de bas de page (le sélecteur de langue a été retiré d'ici puisqu'il est dans le Header fixe !) */}
                <div className="flex flex-col items-center gap-6 pb-8">
                    <p className="text-white/50 text-t5 font-glacial">
                        {t('header.entity_mention')}
                    </p>
                </div>
            </div>
        </nav>
    );
}