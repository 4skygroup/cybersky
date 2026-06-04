import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">

      <div
        className="absolute inset-0 z-0 bg-cover bg-right lg:bg-top bg-no-repeat w-full brightness-50 transition-all duration-500"
        style={{ backgroundImage: "url('/hero-cybersky.png')" }}
      >
        {/* 2. OVERLAY EN DÉGRADÉ POUR LE TEXTE */}
        <div className="absolute inset-0 bg-linear-to-r from-cyber-black via-cyber-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-r from-cyber-black via-cyber-black/70 to-transparent"></div>
      </div>

      {/* 3. CONTENEUR FLEX (Texte à gauche, Bouton à droite) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* BLOC GAUCHE : Logo + Texte */}
        <div className="flex flex-col max-w-2xl">
          {/* Logo CyberSky en image */}
          <div className="mb-6">
            {/* On a retiré toutes les classes de texte inutiles */}

            <img
              src="/logo-cybersky.png"
              alt="Logo CyberSky"
              className="h-12 md:h-16 lg:h-20 w-100 object-contain object-left block"
            />

          </div>

          {/* Le texte exact de la maquette Figma */}
          <h1 className="text-2xl md:text-4xl font-glacial text-white leading-tight">
            Un accompagnement <br className="hidden md:block" />
            informatique sur-mesure en <br className="hidden md:block" />
            fonction de vos besoins réels
          </h1>
        </div>

        {/* BLOC DROITE : Bouton Outline */}
        <div className="shrink-0 mt-8 md:mt-0">
          <Link
            to="/services"
            className="inline-block px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm tracking-wide text-sm md:text-base"
          >
            Découvrir nos services
          </Link>
        </div>
      </div>
    </section>
  );
}
