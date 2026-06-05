import React from "react";
import {
  entites,
  politique,
  services,
  social,
} from "@/components/footer/FooterData";
import { Link } from "react-router-dom";

const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-t5 font-bold text-white">{title}</h4>
    <div className="flex flex-col gap-[0.55rem]">{children}</div>
  </div>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-t5 text-white hover:underline transition-colors duration-200">
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className="text-t5 text-white hover:underline transition-colors duration-200">
      {children}
    </Link>
  );
};



const Footer = () => {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #000000 45%, #E32323 100%)",
      }}
    >
      {/* Glow rouge */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-300 h-80 rounded-full blur-3xl opacity-60 pointer-events-none"
        style={{ backgroundColor: "#E32323" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-12 pb-6">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link to="/" aria-label="CyberSky – Accueil">
            <img className="h-12" src="/logo-cybersky.webp" alt="Logo CyberSky" loading="lazy" />
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <FooterColumn title="Politique">
            {politique.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Nos entités">
            {entites.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Nos réseaux">
            <div className="flex flex-wrap gap-3 mt-1">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9.5 h-9.5 rounded-full border border-white/50 text-white hover:border-white hover:bg-white/10 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </FooterColumn>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 flex justify-center items-center gap-3 text-t3 font-regular text-white/60 tracking-normal">
          <span>created by</span>
          <img src="/visuance.webp" alt="Visuance logo" className="h-4" />
          <span>&</span>
          <img src="/play-to-sky.webp" alt="Play To Sky logo" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
