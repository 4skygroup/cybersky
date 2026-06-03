import { useState } from "react";
import type { FAQItem } from "@/components/faq/FaqData";
import FAQRow from "@/components/faq/FaqRow.tsx";

interface FAQProps {
    data: FAQItem[];
    question?: string;
    answer?: string;
}

const FAQ = ({
    data,
    question = "VOS QUESTIONS",
    answer = "NOS RÉPONSES"
}: FAQProps) => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-white flex justify-center px-6 py-24">

            {/* Conteneur global limité en largeur pour que tout soit bien aligné */}
            <div className="w-full max-w-4xl flex flex-col">

                {/* EN-TÊTE ALIGNÉ À GAUCHE */}
                <div className="flex flex-col items-start mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-cybersky-dark tracking-wide uppercase">
                        {question}
                    </h2>
                    <h2 className="text-3xl md:text-5xl font-bold text-cybersky-red tracking-wide uppercase mt-2">
                        {answer}
                    </h2>
                </div>

                {/* LISTE DES QUESTIONS */}
                <div className="w-full flex flex-col">
                    {data.map((item, index) => (
                        <FAQRow
                            key={item.id}
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() =>
                                setOpenIndex(
                                    openIndex === index ? null : index
                                )
                            }
                        />
                    ))}
                </div>

            </div>

        </section>
    );
};

export default FAQ;