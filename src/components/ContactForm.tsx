"use client";

import { useState } from "react";

export default function ContactForm() {
    const [subject, setSubject] = useState("");

    return (
        < form className = "flex flex-col gap-4 text-sm font-medium text-white" >

            {/* Ligne 1 : Nom & Prénom */ }
            < div className = "grid grid-cols-1 sm:grid-cols-2 gap-4" >
                <div className="flex flex-col gap-2">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" id="lastname" placeholder="Dupond" className="w-full bg-transparent border border-white/30 px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[#F23333] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" id="firstname" placeholder="Arnold" className="w-full bg-transparent border border-white/30 px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[#F23333] transition-colors" />
                </div>
            </div >

        {/* Ligne 2 : Email & Nom de l'entreprise */ }
        < div className = "grid grid-cols-1 sm:grid-cols-2 gap-4" >
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Adresse Email</label>
                    <input type="email" id="email" placeholder="Arnodupond@Gmail.Com" className="w-full bg-transparent border border-white/30 px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[#F23333] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="company">Nom De L'entreprise</label>
                    <input type="text" id="company" placeholder="SNCF Connect" className="w-full bg-transparent border border-white/30 px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[#F23333] transition-colors" />
                </div>
            </div >

        {/* Ligne 3 : Téléphone & Sujet */ }
        < div className = "grid grid-cols-1 sm:grid-cols-2 gap-4" >
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone">Numéro De Téléphone</label>
                    <input type="tel" id="phone" placeholder="06 12 34 56 78" className="w-full bg-transparent border border-white/30 px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[#F23333] transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="subject">Sujet</label>
                    <div className="relative">
                        <select
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full bg-transparent border border-white/30 px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-[#F23333] transition-colors cursor-pointer"
                        >
                            <option value="" disabled className="text-black">Sélectionnez un sujet</option>
                            <option value="maintenance" className="text-black">Maintenance</option>
                            <option value="equipement" className="text-black">Équipement</option>
                            <option value="securite" className="text-black">Cybersécurité</option>
                            <option value="cloud" className="text-black">Solutions Cloud</option>
                            <option value="software" className="text-black">Solutions logicielles</option>
                            <option value="other" className="text-black">Autre demande</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-white">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div >

        {/* Ligne 4 : Message */ }
        < div className = "flex flex-col gap-2" >
            <label htmlFor="message">Votre Message</label>
    {/* 2. LE PLUS IMPORTANT : rows passe de 5 à 3 ! */ }
    <textarea id="message" rows={3} placeholder="Message" className="w-full bg-transparent border border-white/30 px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[#F23333] transition-colors resize-none"></textarea>
            </div >

        {/* Bouton d'envoi */ }
    {/* 3. On enlève le mt-4 inutile puisque le form gère déjà l'espacement via flex */ }
    <div className="flex justify-end mt-1">
        <button type="submit" className="bg-white text-black font-semibold tracking-wide px-10 py-2.5 hover:bg-[#F23333] hover:text-white transition-all duration-300">
            Send
        </button>
    </div>

        </form >
    );
}