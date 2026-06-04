import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceItem } from "@/components/services/ServiceData";

interface ServiceCardProps {
  item: ServiceItem;
}

export default function ServiceCard({ item }: ServiceCardProps) {
  return (
    <Link
      to={item.link}
      className={`flex flex-col bg-[#111111] group overflow-hidden ${item.gridClass} cursor-pointer focus:outline-none focus:ring-2 focus:ring-cybersky-red`}
    >
      {/* ZONE IMAGE */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* ZONE TEXTE */}
      <div className="p-8 flex flex-col grow">
        <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-8 grow">
          {item.description}
        </p>

        {/* L'effet group-hover:text-white continuera de fonctionner parfaitement grâce à la classe "group" sur le parent */}
        <div className="flex items-center gap-1 text-white text-sm font-medium transition-colors group-hover:text-cybersky-red w-fit">
          En savoir plus <ArrowUpRight size={16} strokeWidth={2.5} />
        </div>
      </div>
    </Link>
  );
}
