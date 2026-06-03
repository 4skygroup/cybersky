import type { FAQItem } from "./FaqData";
import { ArrowDown } from "lucide-react"; // Import de la flèche exacte

interface FAQRowProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQRow = ({
    item,
    isOpen,
    onToggle,
}: FAQRowProps) => {

    return (
        <div className = "border-b border-white/20">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-6 px-0 text-left group"
                aria-expanded={isOpen}
            >
                <span
                    className="font-glacial text-lg transition-colors duration-200 group-hover:text-cybersky-red pr-4"
                    style={{ color: isOpen ? "#F23333" : "#111111" }}
                >
                    {item.question}
                </span>

                {/* Utilisation de la flèche Lucide, en rouge, avec rotation */}
                <div 
                    className="text-cybersky-red shrink-0 transition-transform duration-300 ease-in-out"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                    <ArrowDown size={24} strokeWidth={2} />
                </div>
            </button>

            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <p className="font-glacial text-base text-cybersky-dark pb-6 pr-8 leading-relaxed">
                    {item.answer}
                </p>
            </div>

        </div >
    );
};

export default FAQRow;