import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      contact: {
        title: "Propulsez vos performances web !",
        subtitle:
          "Nos experts IT vous accompagnent dans l'audit de vos Core Web Vitals, l'optimisation de vos architectures ou le développement de vos SPA. Contactez-nous pour un diagnostic technique.",
        tab_callback: "Être rappelé",
        tab_message: "Envoyer un message",
        // Tu pourras ajouter les labels du formulaire ici plus tard
      },
    },
  },
  en: {
    translation: {
      contact: {
        title: "Boost your web performance!",
        subtitle:
          "Our IT experts assist you with Core Web Vitals audits, architecture optimization, and SPA development. Contact us for a technical diagnostic.",
        tab_callback: "Get a Call",
        tab_message: "Send a Message",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr", // Langue par défaut au chargement
  fallbackLng: "en", // Langue de secours
  interpolation: {
    escapeValue: false, // React s'occupe déjà de la sécurité XSS
  },
});

export default i18n;
