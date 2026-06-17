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
      faq: {
        default_question: "VOS QUESTIONS",
        default_answer: "NOS RÉPONSES",
        home: {
          q1: "Quels services propose CyberSky ?",
          a1: "CyberSky accompagne les entreprises sur leurs besoins informatiques essentiels : maintenance, équipement, cybersécurité, cloud et solutions logicielles. Notre objectif est de proposer un accompagnement clair, adapté et évolutif selon votre activité.",
          q2: "CyberSky accompagne-t-il les petites entreprises ?",
          a2: "Oui. Nos services sont pensés pour les TPE, PME et structures en croissance qui souhaitent bénéficier d’un accompagnement informatique fiable, sans forcément disposer d’une équipe IT interne.",
          q3: "Pouvez-vous gérer toute notre informatique ?",
          a3: "Oui, selon vos besoins. CyberSky peut intervenir sur la maintenance, la sécurité, le matériel, le cloud, les outils logiciels et l’accompagnement technique de vos équipes.",
          q4: "Comment se déroule un premier échange avec CyberSky ?",
          a4: "Nous commençons par comprendre votre activité, vos outils actuels, vos difficultés et vos priorités. Ensuite, nous vous proposons une solution adaptée avec un plan d’action clair.",
          q5: "Proposez-vous des services sur devis ?",
          a5: "Oui. Chaque entreprise a des besoins différents, donc nos prestations sont adaptées au contexte, à la taille de votre structure et aux services souhaités.",
          q6: "Intervenez-vous à distance ou sur site ?",
          a6: "Nous pouvons intervenir à distance pour les demandes simples et rapides, et sur site lorsque la situation nécessite une présence physique, notamment pour l’installation, l’équipement ou certains incidents techniques.",
        },
        // Tu pourras ajouter securite: {}, maintenance: {} plus tard !
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
      experts: {
        seo: {
          title: "Nos Experts IT & Cybersécurité",
          description:
            "Le savoir-faire CyberSky porté par une équipe d'experts. Découvrez les professionnels qui accompagnent votre transformation numérique au quotidien.",
        },
        title_p1: "Le savoir-faire de CYBER",
        title_p2: "préservé par",
        title_p3: "une pointe d'experts",
        label_specialties: "Spécialités",
        data: {
          desc_lorem:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, doloribus nemo! Praesentium, deserunt corporis modi obcaecati aut quod aspernatur magnam rem molestiae nisi et consequatur facilis quam magni facere dolores iusto quisquam!",
          spec_maintenance: "Maintenance",
          spec_security: "Sécurité",
          spec_network: "Réseau",
        },
      },
      legal: {
        title: "Mentions Légales",
        section1: {
          title: "1. Éditeur du site",
          body: "Le site <strong>CyberSky</strong> est édité par la société <strong>Play To Sky Group (4 Sky Group)</strong>.<br />Siège social : Paris, France.<br />Directeur de la publication : <em>Robbin-James Agoh</em>.",
        },
        section2: {
          title: "2. Hébergement",
          body: "Le site est hébergé par : <strong>OVH</strong><br />Adresse : <em>56, rue de Monceau<br />Paris, France</em><br />Téléphone : <em>+33 6 51 08 17 38</em>",
        },
        section3: {
          title: "3. Propriété intellectuelle",
          body: "L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.",
        },
        section4: {
          title: "4. Limitation de responsabilité",
          body: "Play To Sky Group s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur le site CyberSky. Toutefois, la société décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.",
        },
      },
      privacy: {
        title: "Politique de Confidentialité",
        updated: "Dernière mise à jour : ",
        section1: {
          title: "1. Collecte des données personnelles",
          body: "Dans le cadre de l'utilisation du site CyberSky, Play To Sky Group est susceptible de collecter les données suivantes :",
          li1: "Données d'identification (Nom, Prénom, Adresse e-mail) via nos formulaires de contact.",
          li2: "Données de navigation (Adresses IP, logs de connexion) à des fins de sécurité et d'analyse technique.",
        },
        section2: {
          title: "2. Utilisation des données",
          body: "Les données collectées sont utilisées uniquement pour :",
          li1: "Répondre à vos demandes de contact ou de devis.",
          li2: "Assurer le bon fonctionnement et la sécurité de notre plateforme d'infogérance.",
          li3: "Améliorer l'expérience utilisateur de nos services.",
        },
        section3: {
          title: "3. Partage et conservation",
          body: "Vos données personnelles ne sont jamais vendues à des tiers. Elles sont conservées pour une durée n'excédant pas celle nécessaire aux finalités pour lesquelles elles sont collectées, conformément à la législation en vigueur.",
        },
        section4: {
          title: "4. Vos droits (RGPD)",
          body: "Conformément à la réglementation européenne (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Vous pouvez également vous opposer à leur traitement.<br /><br />Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : <strong>contact@playtosky.com</strong>.",
        },
        section5: {
          title: "5. Cookies",
          body: "Le site CyberSky utilise des cookies techniques strictement nécessaires à son fonctionnement. Si des cookies de suivi ou d'analyse sont mis en place, votre consentement explicite sera recueilli via un bandeau dédié lors de votre première visite.",
        },
      },
      notfound: {
        title: "Page introuvable (404)",
        description:
          "La page que vous recherchez a été déplacée ou n'existe pas sur le site CyberSky.",
        heading: "404",
        subtitle: "Page introuvable",
        text: "La page que vous recherchez a été déplacée, supprimée ou n'a jamais existé dans notre système.",
        btn: "Retour à l'accueil",
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
      faq: {
        default_question: "YOUR QUESTIONS",
        default_answer: "OUR ANSWERS",
        home: {
          q1: "What services does CyberSky offer?",
          a1: "CyberSky supports companies with their essential IT needs: maintenance, hardware, cybersecurity, cloud, and software solutions. Our goal is to provide clear, adapted, and scalable support according to your business.",
          q2: "Does CyberSky support small businesses?",
          a2: "Yes. Our services are designed for small and medium businesses and growing structures that want reliable IT support without necessarily having an internal IT team.",
          q3: "Can you manage all our IT?",
          a3: "Yes, depending on your needs. CyberSky can handle maintenance, security, hardware, cloud, software tools, and technical support for your teams.",
          q4: "How does a first consultation with CyberSky work?",
          a4: "We start by understanding your business, your current tools, your challenges, and your priorities. Then, we propose a tailored solution with a clear action plan.",
          q5: "Do you offer custom quotes?",
          a5: "Yes. Every company has different needs, so our services are adapted to the context, the size of your structure, and the desired services.",
          q6: "Do you provide remote or on-site support?",
          a6: "We can intervene remotely for simple and quick requests, and on-site when the situation requires a physical presence, especially for installation, hardware, or specific technical incidents.",
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
      experts: {
        seo: {
          title: "Our IT & Cybersecurity Experts",
          description:
            "CyberSky's expertise driven by a team of professionals. Discover the experts guiding your daily digital transformation.",
        },
        title_p1: "CYBER",
        title_p2: "'s expertise driven by",
        title_p3: "a team of top professionals",
        label_specialties: "Specialties",
        data: {
          desc_lorem:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, doloribus nemo! Praesentium, deserunt corporis modi obcaecati aut quod aspernatur magnam rem molestiae nisi et consequatur facilis quam magni facere dolores iusto quisquam!",
          spec_maintenance: "Maintenance",
          spec_security: "Security",
          spec_network: "Network",
        },
      },
      legal: {
        title: "Legal Notice",
        section1: {
          title: "1. Website Publisher",
          body: "The website <strong>CyberSky</strong> is published by <strong>Play To Sky Group (4 Sky Group)</strong>.<br />Headquarters: Paris, France. <br />Publication Director : <em>Robbin-James Agoh</em>.",
        },
        section2: {
          title: "2. Hosting",
          body: "The website is hosted by: <strong>OVH</strong><br />Address: <em>56, rue de Monceau<br />Paris, France</em><br />Phone : <em>+33 6 51 08 17 38</em>",
        },
        section3: {
          title: "3. Intellectual Property",
          body: "This entire site is covered by French and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations. The reproduction of all or part of this site on any electronic medium whatsoever is strictly prohibited without the express authorization of the publication director.",
        },
        section4: {
          title: "4. Limitation of Liability",
          body: "Play To Sky Group strives to ensure as best as possible the accuracy and updating of the information disseminated on the CyberSky site. However, the company declines all responsibility for any inaccuracy, inexactitude, or omission relating to information available on the site.",
        },
      },
      privacy: {
        title: "Privacy Policy",
        updated: "Last updated: ",
        section1: {
          title: "1. Collection of Personal Data",
          body: "When using the CyberSky website, Play To Sky Group may collect the following data:",
          li1: "Identification data (Last Name, First Name, Email Address) via our contact forms.",
          li2: "Browsing data (IP addresses, connection logs) for security and technical analysis purposes.",
        },
        section2: {
          title: "2. Use of Data",
          body: "The data collected is used solely to:",
          li1: "Respond to your contact requests or requests for quotes.",
          li2: "Ensure the proper functioning and security of our managed services platform.",
          li3: "Improve the user experience of our services.",
        },
        section3: {
          title: "3. Sharing and Retention",
          body: "Your personal data is never sold to third parties. It is retained for no longer than is necessary for the purposes for which it was collected, in accordance with applicable law.",
        },
        section4: {
          title: "4. Your Rights (GDPR)",
          body: "In accordance with European regulations (GDPR), you have the right to access, correct, delete, and transfer your data. You may also object to the processing of your data. <br /><br />To exercise these rights, please contact us at the following address: <strong>contact@playtosky.com</strong>.",
        },
        section5: {
          title: "5. Cookies",
          body: "The CyberSky website uses technical cookies that are strictly necessary for its operation. If tracking or analytics cookies are used, your explicit consent will be obtained via a dedicated banner during your first visit.",
        },
      },
      notfound: {
        title: "Page not found (404)",
        description:
          "The page you are looking for has been moved or does not exist on the CyberSky website.",
        heading: "404",
        subtitle: "Page not found",
        text: "The page you are looking for has been moved, deleted, or never existed in our system.",
        btn: "Back to home",
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
