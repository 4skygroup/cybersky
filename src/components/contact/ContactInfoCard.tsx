import { Mail, Phone, Clock } from "lucide-react";

const cards = [
    {
        icon: <Mail className="w-5 h-5 text-white" />,
        label: "Email",
        value: "contact@cybersky.fr",
    },
    {
        icon: <Phone className="w-5 h-5 text-white" />,
        label: "Téléphone",
        value: "+33 5 00 00 00 00",
    },
    {
        icon: <Clock className="w-5 h-5 text-white" />,
        label: "Horaires",
        value: "Lun–Ven · 9h30–18h00",
    },
];

export default function ContactInfoCards() {
    return (
        <div className="flex flex-col gap-4">
            {cards.map((card) => (
                <div
                    key={card.label}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        {card.icon}
                    </div>
                    <div>
                        <p className="text-t6 font-medium uppercase tracking-widest text-white/40">
                            {card.label}
                        </p>
                        <p className="mt-0.5 text-t5 font-medium text-white">{card.value}</p>
                    </div>
                </div>
            ))}

            <div className="mt-2 flex items-center gap-3">
                <img
                    src="/logo-cybersky.webp" // À adapter avec le nom exact de ton image
                    alt="CyberSky Logo"
                    className="h-8 w-auto object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                />
                <p className="text-t6 md:text-t5 leading-relaxed text-white/40">
                    L'excellence technique et l'optimisation des performances au service de vos infrastructures.
                </p>
            </div>
        </div>
    );
}