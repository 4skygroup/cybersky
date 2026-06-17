import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      header: {
        group: "Le Groupe",
        services: "Services",
        experts: "Nos Experts",
        contact: "Contact",
        entity_mention: "Une entité du Groupe Play To Sky",
        sub: {
          maintenance: "Maintenance",
          equipement: "Équipement",
          cybersecurite: "Cybersécurité",
          cloud: "Solutions Cloud",
          software: "Solutions logicielles",
        },
      },
      footer: {
        title_policy: "Politique",
        title_services: "Services",
        title_entities: "Nos entités",
        title_social: "Nos réseaux",
        created_by: "Créé par",
        links: {
          legal: "Mentions légales",
          privacy: "Confidentialité",
          maintenance: "Maintenance",
          equipment: "Équipement",
          cybersecurity: "Cybersécurité",
          cloud: "Solutions Cloud",
          software: "Solutions logicielles",
        },
      },
      home: {
        seo: {
          title: "Expert en Cybersécurité & Infogérance",
          description:
            "CyberSky protège et gère votre infrastructure informatique. Cybersécurité, maintenance, cloud, équipement et solutions logicielles pour TPE/PME.",
        },
        hero: {
          title_line1: "Un accompagnement",
          title_line2: "informatique sur-mesure en",
          title_line3: "fonction de vos besoins réels",
          btn_services: "Découvrir nos services",
        },
        why: {
          tag: "Nos services",
          title_start: "Pourquoi choisir CYBER",
          subtitle: "S’intéresser aux risques des services informatiques ...",
          features: {
            f1: "Agence en France",
            f2: "25 000+ clients accompagnés au quotidien",
            f3: "98% de nos clients nous renouvellent leur confiance chaque année",
            f4: "Intervention sur site entre 4h et 36h en cas d'incident non résolu à distance",
            f5: "Assistance téléphonique illimitée",
            f6: "Sans coûts cachés pour une transparence totale envers nos clients",
            f7: "Nos audits et interventions sont garantis conformes aux normes européennes de sécurité.",
            f8: "Accompagnement complet pour une informatique sécurisée et performante.",
            f9: "Devis envoyé dans les 15 minutes",
          },
          card1: {
            title_l1: "Piratage, ransomwares,",
            title_l2: "fuites de données : êtes-vous préparé ?",
            desc: "Faites le point sur la sécurité de votre système informatique et protégez vos données",
            link: "En savoir plus",
          },
          card2: {
            title_l1: "Offrez à votre parc informatique",
            title_l2: "une maintenance sans faille !",
            desc: "Notre contrat de maintenance vous garantit une continuité de service opérationnelle de votre activité",
            link: "En savoir plus",
          },
        },
      },
      contact: {
        title: "Propulsez vos performances web !",
        subtitle:
          "Nos experts IT vous accompagnent dans l'audit de vos Core Web Vitals, l'optimisation de vos architectures ou le développement de vos SPA. Contactez-nous pour un diagnostic technique.",
        tab_callback: "Être rappelé",
        tab_message: "Envoyer un message",

        info: {
          phone: "Téléphone",
          hours: "Horaires",
          hours_value: "Lun–Ven · 9h30–18h00",
          description:
            "L'excellence technique et l'optimisation des performances au service de vos infrastructures.",
        },

        form: {
          last_name: "Nom",
          first_name: "Prénom",
          phone: "Numéro de téléphone",
          email: "Email",
          subject_call: "Sujet de l'appel",
          subject_msg: "Sujet",
          time_slot: "Horaire souhaité",
          select: "Sélectionner...",
          message_label: "Message",
          message_placeholder:
            "Détaillez vos besoins techniques ou votre problématique...",
          success: "Demande envoyée avec succès !",
          error: "Une erreur est survenue. Réessayez.",
          sending: "Envoi...",
          btn_call: "Programmer l'appel",
          btn_message: "Envoyer le message",
        },

        subjects: {
          audit: "Audit Webperf (Lighthouse / CWV)",
          dev: "Développement Front-End (SPA)",
          consulting: "Consulting & Architecture",
          infra: "Infogérance IT",
          other: "Autre demande technique",
        },
      },
    },
  },
  en: {
    translation: {
      header: {
        group: "The Group",
        services: "Services",
        experts: "Our Experts",
        contact: "Contact",
        entity_mention: "A Play To Sky Group Entity",
        sub: {
          maintenance: "Maintenance",
          equipement: "Hardware",
          cybersecurite: "Cybersecurity",
          cloud: "Cloud Solutions",
          software: "Software Solutions",
        },
      },
      footer: {
        title_policy: "Policy",
        title_services: "Services",
        title_entities: "Our Entities",
        title_social: "Our Networks",
        created_by: "Created by",
        links: {
          legal: "Legal Notice",
          privacy: "Privacy Policy",
          maintenance: "Maintenance",
          equipment: "Hardware",
          cybersecurity: "Cybersecurity",
          cloud: "Cloud Solutions",
          software: "Software Solutions",
        },
      },
      home: {
        seo: {
          title: "Cybersecurity & IT Managed Services Expert",
          description:
            "CyberSky protects and manages your IT infrastructure. Cybersecurity, maintenance, cloud, hardware, and software solutions for small and medium businesses.",
        },
        hero: {
          title_line1: "Customized IT",
          title_line2: "support tailored to",
          title_line3: "your actual needs",
          btn_services: "Discover our services",
        },
        why: {
          tag: "Our services",
          title_start: "Why choose CYBER",
          subtitle: "Taking an interest in IT service risks ...",
          features: {
            f1: "Agency in France",
            f2: "25,000+ clients supported daily",
            f3: "98% of our clients renew their trust in us every year",
            f4: "On-site intervention between 4h and 36h for unresolved remote incidents",
            f5: "Unlimited telephone support",
            f6: "No hidden costs for total transparency with our clients",
            f7: "Our audits and interventions are guaranteed to comply with European security standards.",
            f8: "Complete support for secure and high-performance IT.",
            f9: "Quote sent within 15 minutes",
          },
          card1: {
            title_l1: "Hacking, ransomware,",
            title_l2: "data leaks: are you prepared?",
            desc: "Assess the security of your IT system and protect your data",
            link: "Learn more",
          },
          card2: {
            title_l1: "Provide your IT infrastructure",
            title_l2: "with flawless maintenance!",
            desc: "Our maintenance contract guarantees operational continuity for your business",
            link: "Learn more",
          },
        },
      },
      contact: {
        // TOUT est maintenant bien à l'intérieur de 'contact' !
        title: "Boost your web performance !",
        subtitle:
          "Our IT experts assist you with Core Web Vitals audits, architecture optimization, and SPA development. Contact us for a technical diagnostic.",
        tab_callback: "Get a Call",
        tab_message: "Send a Message",

        info: {
          phone: "Phone",
          hours: "Business Hours",
          hours_value: "Mon–Fri · 09:30 AM–06:00 PM",
          description:
            "Technical excellence and performance optimization for your infrastructures.",
        },

        form: {
          last_name: "Last Name",
          first_name: "First Name",
          phone: "Phone Number",
          email: "Email",
          subject_call: "Call Subject",
          subject_msg: "Subject",
          time_slot: "Preferred Time Slot",
          select: "Select...",
          message_label: "Message",
          message_placeholder: "Detail your technical needs or your issue...",
          success: "Request sent successfully !",
          error: "An error occurred. Please try again.",
          sending: "Sending...",
          btn_call: "Schedule Call",
          btn_message: "Send Message",
        },

        subjects: {
          audit: "Web Performance Audit (Lighthouse / CWV)",
          dev: "Front-End Development (SPA)",
          consulting: "Consulting & Architecture",
          infra: "IT Managed Services",
          other: "Other Technical Request",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
