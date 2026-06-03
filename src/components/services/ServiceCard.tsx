import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ServiceItem } from '@/components/services/ServiceData';

interface ServiceCardProps {
    item: ServiceItem;
}

export default function ServiceCard({ item }: ServiceCardProps) {
    return (
        < div className = {`flex flex-col bg-[#111111] group overflow-hidden ${item.gridClass}`
}>

    {/* ZONE IMAGE */ }
    < div className = "h-64 w-full overflow-hidden" >
        <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div >

    {/* ZONE TEXTE */ }
    < div className = "p-8 flex flex-col grow" >
        <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-8 grow">
          {item.description}
        </p>

{/* LE BOUTON DYNAMIQUE */ }
<Link
    to={item.link}
    className="flex items-center gap-1 text-[#F23333] text-sm font-medium transition-colors group-hover:text-white w-fit"
>
    En savoir plus <ArrowUpRight size={16} strokeWidth={2.5} />
</Link>
      </div >

    </div >
  );
}