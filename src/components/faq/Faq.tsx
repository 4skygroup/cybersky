import { useState } from "react";
import type { FAQItem } from "@/components/faq/FaqData";
import FAQRow from "@/components/faq/FaqRow.tsx";
import { useTranslation } from "react-i18next";

interface FAQProps {
    data: FAQItem[];
    question?: string;
    answer?: string;
}

const FAQ = ({
    data,
    question = "faq.default_question", // 2. On met la clé i18n par défaut
    answer = "faq.default_answer"
}: FAQProps) => {

    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-white flex justify-center px-6 py-24">
            <div className="w-full max-w-4xl flex flex-col">
                <div className="flex flex-col items-start mb-16">
                    <h2 className="flex flex-col text-3xl md:text-5xl font-bold tracking-wide uppercase">
                        {/* 5. On traduit les titres */}
                        <span className="text-cybersky-dark">{t(question)}</span>
                        <span className="text-cybersky-red mt-2">{t(answer)}</span>
                    </h2>
                </div>

                <div className="w-full flex flex-col">
                    {data.map((item, index) => (
                        <FAQRow
                            key={item.id}
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;