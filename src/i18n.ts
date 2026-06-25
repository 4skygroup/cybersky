import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      header: {
        group: "Le Groupe",
        services: "Services",
        experts: "Nos Experts",
        locations: "Nos localisations",
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
        security: {
          q1: "Une PME peut-elle vraiment être victime d’une cyberattaque ?",
          a1: "Oui. Les PME sont souvent ciblées car elles disposent parfois de protections limitées. Une attaque peut provoquer une perte de données, une interruption d’activité ou une fuite d’informations sensibles.",
          q2: "Combien de temps prend un audit de sécurité ?",
          a2: "La durée dépend de la taille de votre infrastructure et du niveau d’analyse demandé. L’objectif est d’identifier les failles, les risques prioritaires et les actions à mettre en place.",
          q3: "Proposez-vous une surveillance continue ?",
          a3: "Oui. CyberSky peut accompagner votre entreprise avec des solutions de surveillance, d’alertes et de suivi afin de détecter plus rapidement les comportements suspects ou incidents de sécurité.",
          q4: "Vos solutions sont-elles adaptées aux petites entreprises ?",
          a4: "Oui. Nos solutions sont pensées pour s’adapter aux besoins des TPE/PME, avec une approche claire, progressive et proportionnée à votre activité.",
          q5: "Que se passe-t-il en cas d’attaque ou de ransomware ?",
          a5: "Nous vous accompagnons pour limiter l’impact, identifier l’origine du problème, sécuriser les systèmes touchés et définir les actions nécessaires pour reprendre l’activité dans les meilleures conditions.",
          q6: "Faites-vous de la sensibilisation cybersécurité ?",
          a6: "Oui. Nous pouvons sensibiliser vos équipes aux risques courants comme le phishing, les mots de passe faibles, les pièces jointes dangereuses ou les mauvaises pratiques du quotidien.",
        },
        maintenance: {
          q1: "Que comprend un contrat de maintenance informatique ?",
          a1: "Un contrat de maintenance peut inclure le support utilisateurs, la supervision des systèmes, les mises à jour, les vérifications régulières, la résolution d’incidents et l’accompagnement technique de votre entreprise.",
          q2: "Intervenez-vous à distance ou sur site ?",
          a2: "Oui. Nous pouvons intervenir à distance pour les demandes simples et rapides, et nous déplacer sur site lorsque l’intervention nécessite une présence physique ou une manipulation matérielle.",
          q3: "Quels sont vos délais d’intervention ?",
          a3: "Les délais dépendent du niveau d’urgence et du type d’incident. Notre objectif est de prendre en charge rapidement les demandes afin de limiter l’impact sur votre activité.",
          q4: "Pouvez-vous gérer les sauvegardes de l’entreprise ?",
          a4: "Oui. CyberSky peut vous accompagner dans la mise en place, le suivi et la vérification de vos sauvegardes afin de protéger vos données importantes.",
          q5: "La maintenance est-elle adaptée aux petites entreprises ?",
          a5: "Oui. Nos prestations sont adaptées aux TPE/PME qui souhaitent bénéficier d’un suivi informatique fiable sans avoir forcément une équipe IT en interne.",
          q6: "Peut-on externaliser toute notre gestion informatique ?",
          a6: "Oui, selon vos besoins. CyberSky peut prendre en charge une partie ou l’ensemble de votre gestion informatique : support, maintenance, supervision, sécurité, sauvegardes et accompagnement technique.",
        },
        cloud: {
          q1: "Le cloud est-il adapté à une petite entreprise ?",
          a1: "Oui. Le cloud permet aux TPE/PME d’accéder à des solutions flexibles, évolutives et sécurisées sans devoir gérer toute une infrastructure informatique en interne.",
          q2: "Où sont stockées mes données ?",
          a2: "Cela dépend de la solution choisie. CyberSky vous accompagne dans le choix d’un hébergement adapté, avec une attention particulière portée à la sécurité, à la confidentialité et à la conformité des données.",
          q3: "Quelle est la différence entre le cloud et un serveur local ?",
          a3: "Un serveur local est hébergé dans vos locaux, tandis qu’une solution cloud repose sur une infrastructure externalisée. Le cloud permet souvent plus de flexibilité, de disponibilité et de simplicité de gestion.",
          q4: "Peut-on sauvegarder automatiquement nos fichiers ?",
          a4: "Oui. CyberSky peut mettre en place des sauvegardes automatiques, sécurisées et régulières afin de limiter les risques de perte de données.",
          q5: "Mes données sont-elles sécurisées dans le cloud ?",
          a5: "Oui, si la solution est bien configurée. Nous vous accompagnons sur les accès, les sauvegardes, les droits utilisateurs et les bonnes pratiques pour renforcer la sécurité de vos données.",
          q6: "Pouvez-vous migrer nos mails et fichiers existants ?",
          a6: "Oui. CyberSky peut vous accompagner dans la migration de vos mails, fichiers et outils collaboratifs vers une solution cloud adaptée à votre entreprise.",
        },
        equipment: {
          q1: "Quel type de matériel proposez-vous ?",
          a1: "CyberSky accompagne les entreprises dans le choix d’équipements informatiques professionnels : postes fixes, ordinateurs portables, serveurs, stockage, réseau, Wi-Fi, imprimantes et périphériques.",
          q2: "Pouvez-vous installer et configurer les équipements ?",
          a2: "Oui. Nous pouvons préparer, installer et configurer les équipements afin qu’ils soient prêts à l’usage : comptes utilisateurs, accès réseau, logiciels, sécurité de base et tests de fonctionnement.",
          q3: "Aidez-vous à choisir le bon matériel ?",
          a3: "Oui. Nous analysons vos besoins, vos usages et votre budget pour vous orienter vers du matériel adapté à votre activité, sans surdimensionner inutilement.",
          q4: "Proposez-vous du matériel pour les petites entreprises ?",
          a4: "Oui. Nos recommandations sont adaptées aux TPE/PME, que ce soit pour équiper quelques postes, renouveler un parc existant ou préparer une montée en charge.",
          q5: "Pouvez-vous gérer le renouvellement du parc informatique ?",
          a5: "Oui. CyberSky peut vous accompagner dans le suivi, le remplacement et l’évolution de votre parc informatique afin de maintenir des équipements fiables et performants.",
          q6: "Le matériel est-il livré prêt à l’emploi ?",
          a6: "Oui, selon la prestation choisie. Nous pouvons livrer les équipements déjà préparés, configurés et testés pour faciliter leur mise en service dans votre entreprise.",
        },
        software: {
          q1: "Pourquoi digitaliser mes processus internes ?",
          a1: "Digitaliser vos processus permet de réduire les tâches manuelles, limiter les erreurs, centraliser les informations et gagner du temps dans la gestion quotidienne de votre activité.",
          q2: "Pouvez-vous créer un outil sur mesure ?",
          a2: "Oui. CyberSky peut concevoir des outils adaptés à vos besoins spécifiques : portail client, outil interne, tableau de bord, automatisation ou interface métier.",
          q3: "Aidez-vous à choisir un CRM ou un logiciel métier ?",
          a3: "Oui. Nous pouvons vous accompagner dans le choix, la configuration et l’intégration d’un CRM, d’un ERP ou d’un logiciel métier adapté à votre activité.",
          q4: "Peut-on automatiser des tâches répétitives ?",
          a4: "Oui. Nous pouvons automatiser certaines actions comme les relances, notifications, exports, suivis clients, synchronisations entre outils ou tâches administratives répétitives.",
          q5: "Formez-vous les équipes à utiliser les nouveaux outils ?",
          a5: "Oui. Nous accompagnons vos équipes dans la prise en main des outils mis en place afin de garantir une utilisation simple, claire et efficace.",
          q6: "Est-ce adapté aux petites entreprises ?",
          a6: "Oui. Nos solutions sont adaptées aux TPE/PME qui souhaitent gagner du temps, mieux organiser leurs données et moderniser leurs méthodes de travail sans complexité inutile.",
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
          subtitle: "S’intéresser aux risques des services informatiques...",
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
      services: {
        seo: {
          title: "Nos Solutions IT & Cybersécurité",
          description:
            "Découvrez l'ensemble des services CyberSky : de la protection de vos données à la gestion de votre parc, des solutions sur-mesure pour votre entreprise.",
        },
        h1: "Des <span class='text-cybersky-red'>solutions IT</span> conçues pour faire avancer votre entreprise.",
        h2: "Notre <span class='text-cybersky-red'>savoir-faire technologique</span> mis à votre disposition",
        card_more: "En savoir plus",
        data: {
          maintenance_title: "Maintenance",
          maintenance_desc:
            "Prestations clés en main de maintenance pour TPE/PME pour une gestion optimisée de votre équipement informatique.",
          equipment_title: "Équipement",
          equipment_desc:
            "Vente, installation et configuration de matériels informatiques professionnels : ordinateurs, PC, switch, serveurs, bornes Wi-Fi...",
          securite_title: "Sécurité",
          securite_desc:
            "Solution de sécurité et protection du réseau informatique d'entreprise.",
          software_title: "Software",
          software_desc:
            "Solutions de digitalisation des tâches administratives des TPE/PME et de numérisation et gestion électronique de vos documents.",
          cloud_title: "Cloud",
          cloud_desc:
            "Solutions d'hébergement sécurisées et sur-mesure pour vos données.",
        },
      },
      service_detail: {
        seo: {
          cloud: {
            title: "Solutions Cloud & Hébergement sécurisé",
            description:
              "Externalisez votre informatique pour plus de sécurité et flexibilité. Migration, sauvegarde automatisée et serveurs cloud sur-mesure.",
          },
          maintenance: {
            title: "Maintenance Informatique Proactive",
            description:
              "Assurez la continuité de votre activité. Supervision 24/7, assistance utilisateur, mises à jour et gestion des sauvegardes pour votre TPE/PME.",
          },
          security: {
            title: "Cybersécurité & Protection des données",
            description:
              "Sécurisez votre entreprise face aux cybermenaces. Audit, protection, sensibilisation et réponse aux incidents avec les experts CyberSky.",
          },
          software: {
            title: "Solutions Logicielles & Digitalisation",
            description:
              "Digitalisez et automatisez vos processus internes. Intégration d'outils métiers, tableaux de bord et applications web développées sur-mesure.",
          },
          equipment: {
            title: "Matériel Informatique Professionnel",
            description:
              "Équipez votre entreprise avec du matériel fiable. Conseil, installation sur site, configuration sécurisée et suivi de votre parc informatique.",
          },
        },
        hero: {
          cloud: {
            tag: "Cloud",
            hero_part1: "Externalisez votre informatique pour plus de ",
            hero_highlight: "sécurité et de flexibilité",
          },
          maintenance: {
            tag: "Maintenance",
            hero_part1: "Maintenance informatique proactive pour ",
            hero_highlight: "votre entreprise",
          },
          security: {
            tag: "Cybersécurité",
            hero_part1: "Sécurisez votre entreprise face aux ",
            hero_highlight: "aux cybermenaces",
          },
          software: {
            tag: "Solutions logicielles",
            hero_part1: "Digitalisez vos processus internes avec des ",
            hero_highlight: "solutions logicielles sur-mesure",
          },
          equipment: {
            tag: "Équipement",
            hero_part1: "Équipez votre entreprise avec du matériel ",
            hero_highlight: "fiable et performant",
          },
        },
        default_button: "Demander un devis",
        keyfigures: {
          title: "Chiffres clés",
          source: "Source",
          data: {
            securite: {
              figures: {
                stat1: "43%",
                desc1:
                  "Des PME victimes d'une cyberattaque ferment ou font faillite dans les 6 mois.",
                src1: "ANSSI",
                stat2: "1 sur 2",
                desc2:
                  "Des entreprises de type TPE/PME ont déjà subi une cyberattaque.",
                src2: "ANSSI",
                stat3: "300%",
                desc3:
                  "Les menaces ciblent en permanence les systèmes de l'entreprise.",
                src3: "ANSSI",
              },
            },
            maintenance: {
              figures: {
                stat1: "80%",
                desc1:
                  "Des pannes informatiques sont liées à un manque d'entretien.",
                src1: "TechRadar / études sectorielles",
                stat2: "10K€",
                desc2:
                  "Coût estimé d'une journée d'arrêt informatique pour une PME.",
                src2: "Syntec Numérique, Cigref, IDC",
                stat3: "20%",
                desc3:
                  "Des incidents peuvent être évités grâce à une maintenance régulière.",
                src3: "IDC / Syntec Numérique",
              },
            },
            cloud: {
              figures: {
                stat1: "78%",
                desc1:
                  "Des PME déclarent que le cloud renforce leur sécurité informatique.",
                src1: "Sage",
                stat2: "1/2",
                desc2: "PME a déjà subi une perte de données liée à une panne.",
                src2: "Markess",
                stat3: "83%",
                desc3:
                  "Des entreprises utilisant le cloud constatent une amélioration de leur productivité.",
                src3: "Microsoft Europe",
              },
            },
            equipment: {
              figures: {
                stat1: "70%",
                desc1:
                  "Des pannes informatiques sont liées à du matériel obsolète.",
                src1: "Gartner",
                stat2: "22min",
                desc2:
                  "Perdues chaque jour à cause d'un équipement lent ou inadapté.",
                src2: "Etude Sharp / FSDS, 2023",
                stat3: "85%",
                desc3:
                  "Des collaborateurs estiment qu'un bon équipement améliore leur productivité.",
                src3: "Etude SYMANTEC",
              },
            },
            software: {
              figures: {
                stat1: "76%",
                desc1:
                  "Des TPE/PME constatent un impact positif du numérique sur leur activité.",
                src1: "Baromètre France Num 2022",
                stat2: "48%",
                desc2:
                  "Des entreprises affirment que la digitalisation permet de réduire leurs coûts.",
                src2: "Baromètre France Num 2022",
                stat3: "1/3",
                desc3:
                  "Des PME gèrent encore certaines tâches administratives sur Excel ou papier.",
                src3: "Baromètre France Num 2022",
              },
            },
          },
        },
        details: {
          data: {
            securite: {
              surtitle: "NOS SERVICES",
              titlePart1: "Une protection",
              titleHighlight: "complète,",
              titlePart2: "sur-mesure",
              subtitle:
                "Chaque poste, chaque utilisateur, chaque donnée peut être sécurisé. Notre équipe s'occupe de chaque aspect pour vous.",

              s1: {
                title: "Audit de sécurité",
                desc: "Analyse complète de votre infrastructure, serveurs, postes de travail et vulnérabilités. Un rapport clair, des recommandations et un plan d'actions concrètes.",
                t1: "Cartographie SI",
                t2: "Pentest",
                t3: "Conformité",
              },
              s2: {
                title: "Simulation de phishing",
                desc: "Testez et entraînez vos équipes face aux menaces de type ingénierie sociale. Phishing ciblé et sensibilisation en temps réel.",
                t1: "Campagnes ciblées",
                t2: "Statistiques",
                t3: "Formations",
              },
              s3: {
                title: "Surveillance & protection",
                desc: "Monitoring permanent, détection des incidents, protection des systèmes critiques. Une équipe dédiée qui veille pendant que vous travaillez.",
                t1: "SOC 24/7",
                t2: "EDR / XDR",
                t3: "Réseau Isolé",
              },
              s4: {
                title: "Conseil en cybersécurité",
                desc: "Définition de stratégies, accompagnement de vos équipes, normes pratiques. La meilleure technologie ne remplace pas une équipe formée.",
                t1: "Stratégie",
                t2: "Audits",
                t3: "Certifications",
              },
            },
            maintenance: {
              surtitle: "NOS SERVICES",
              titlePart1: "Du matériel",
              titleHighlight: "professionnel, ",
              titlePart2: "installé et configuré pour vos usages",
              subtitle:
                "Nous vous aidons à choisir, déployer et configurer les équipements adaptés à vos équipes et à votre activité.",
              s1: {
                title: "Supervision proactive",
                desc: "Surveillance continue de vos systèmes pour détecter les incidents avant qu'ils ne deviennent critiques.",
                t1: "Monitoring 24/7",
                t2: "Alertes",
                t3: "Rapports",
              },
              s2: {
                title: "Maintenance préventive",
                desc: "Mises à jour, corrections et optimisations pour garder vos systèmes stables et sécurisés.",
                t1: "Mises à jour système",
                t2: "Optimisation",
                t3: "Veille",
              },
              s3: {
                title: "Support & assistance",
                desc: "Accompagnement rapide pour résoudre les problèmes techniques de vos équipes.",
                t1: "Centre d'appel",
                t2: "Support utilisateur",
                t3: "Intervention",
              },
              s4: {
                title: "Sauvegarde & continuité",
                desc: "Mise en place et contrôle des sauvegardes pour protéger vos données critiques.",
                t1: "Sécurité",
                t2: "Restauration",
                t3: "Plans de reprise",
              },
            },
            cloud: {
              surtitle: "NOS SERVICES",
              titlePart1: "Des solutions cloud",
              titleHighlight: "flexibles,",
              titlePart2: "sécurisées et adaptées",
              subtitle:
                "Nous vous accompagnons dans la migration, la sauvegarde et l'hébergement de vos données pour travailler avec plus de sérénité.",
              s1: {
                title: "Migration cloud",
                desc: "Nous vous accompagnons dans le passage vers des solutions cloud adaptées à votre activité.",
                t1: "Analyse",
                t2: "Migration",
                t3: "Réduction des coûts",
              },
              s2: {
                title: "Sauvegarde cloud",
                desc: "Nous mettons en place des sauvegardes sécurisées pour protéger vos données critiques.",
                t1: "Automatisation",
                t2: "Chiffrement",
                t3: "Restauration",
              },
              s3: {
                title: "Hébergements & serveurs cloud",
                desc: "Nous vous aidons à héberger vos applications, fichiers et services dans un environnement fiable.",
                t1: "Adaptation",
                t2: "Haute disponibilité",
                t3: "Supervision",
              },
              s4: {
                title: "Microsoft 365 + Outils Collaboratifs",
                desc: "Nous configurons vos outils de travail collaboratif pour améliorer la productivité de vos équipes.",
                t1: "Comptes utilisateurs",
                t2: "Messagerie professionnelle",
              },
            },
            software: {
              surtitle: "NOS SERVICES",
              titlePart1: "Des outils digitaux pour",
              titleHighlight: "automatiser",
              titlePart2: "et mieux piloter votre activité",
              subtitle:
                "Nous concevons, configurons et développons des solutions logicielles pour simplifier vos processus et gagner du temps.",
              s1: {
                title: "Intégration d'outils métiers",
                desc: "Nous vous aidons à choisir et mettre en place les logiciels adaptés à votre activité.",
                t1: "CRM / ERP",
                t2: "Outils collaboratifs",
                t3: "Gestion",
              },
              s2: {
                title: "Automatisation des processus",
                desc: "Nous automatisons les tâches répétitives pour réduire les erreurs et gagner du temps.",
                t1: "Workflows",
                t2: "Notifications",
                t3: "Synchronisations",
              },
              s3: {
                title: "Tableaux de bord & reporting",
                desc: "Nous créons des vues claires pour suivre vos performances et prendre de meilleures décisions.",
                t1: "KPI",
                t2: "Suivi d'activité",
                t3: "Rapports automatisés",
              },
              s4: {
                title: "Applications web sur mesure",
                desc: "Nous développons des outils simples et adaptés à vos besoins spécifiques.",
                t1: "Portail client",
                t2: "Outils internes",
                t3: "Interfaces métier",
              },
            },
            equipment: {
              surtitle: "NOS SERVICES",
              titlePart1: "Des solutions matérielles",
              titleHighlight: "fiables,",
              titlePart2: "pour votre entreprise",
              subtitle:
                "Nous vous accompagnons dans le choix, l'installation et la configuration de vos équipements informatiques pour garantir leur performance et leur sécurité.",
              s1: {
                title: "Conseil & choix matériel",
                desc: "Nous vous aidons à choisir les équipements adaptés à votre budget et à vos usages.",
                t1: "Conseil",
                t2: "Audit",
              },
              s2: {
                title: "Installation sur site",
                desc: "Déploiement du matériel, branchements, configuration et tests sur votre site.",
                t1: "Branchements",
                t2: "Déploiement",
              },
              s3: {
                title: "Configuration sécurité",
                desc: "Paramétrage des accès, antivirus, comptes utilisateurs et protections de base.",
                t1: "Accès",
                t2: "Comptes",
              },
              s4: {
                title: "Suivi & renouvellement",
                desc: "Nous vous accompagnons dans le suivi, l'évolution et le remplacement de votre parc.",
                t1: "Suivi",
                t2: "Renouvellement",
              },
            },
          },
        },
        methodology: {
          data: {
            maintenance: {
              surtitle: "COMMENT ÇA SE PASSE",
              titlePart1: "Une maintenance pensée pour",
              titleHighlight: "garantir",
              titlePart2: "votre continuité",
              subtitle:
                "De l’analyse de votre parc informatique au suivi régulier, CyberSky vous accompagne avec une approche claire, réactive et structurée pour limiter les interruptions et garder vos équipements opérationnels.",
              steps: [
                {
                  title: "État des lieux complet",
                  desc: "Nous analysons votre environnement informatique : postes, serveurs, réseau, sauvegardes, logiciels et usages quotidiens.",
                },
                {
                  title: "Diagnostic des points sensibles",
                  desc: "Nous identifions les lenteurs, pannes récurrentes, risques techniques et éléments pouvant impacter la continuité de votre activité.",
                },
                {
                  title: "Intervention & optimisation",
                  desc: "Nous réalisons les corrections nécessaires : mises à jour, configurations, sécurisation, optimisation et interventions à distance ou sur site.",
                },
                {
                  title: "Suivi dans la durée",
                  desc: "Nous assurons un accompagnement régulier afin de maintenir un environnement informatique stable, fiable et évolutif.",
                },
              ],
            },
            equipment: {
              surtitle: "COMMENT ÇA SE PASSE",
              titlePart1: "Des équipements",
              titleHighlight: "adaptés",
              titlePart2: "à vos usages professionnels",
              subtitle:
                "CyberSky vous accompagne dans le choix, l’installation et la configuration de votre matériel informatique afin de garantir performance, fiabilité et confort d’utilisation au quotidien.",
              steps: [
                {
                  title: "Analyse de vos besoins",
                  desc: "Nous étudions vos usages, vos métiers, votre nombre d’utilisateurs et les contraintes techniques de votre environnement.",
                },
                {
                  title: "Recommandation du matériel",
                  desc: "Nous sélectionnons les équipements adaptés à votre activité : ordinateurs, écrans, serveurs, réseau, Wi-Fi, périphériques et accessoires professionnels.",
                },
                {
                  title: "Préparation & installation",
                  desc: "Nous préparons, installons et configurons le matériel avec les logiciels, accès, paramètres de sécurité et outils nécessaires.",
                },
                {
                  title: "Suivi & évolution du parc",
                  desc: "Nous vous accompagnons dans le renouvellement, l’optimisation et l’évolution de vos équipements selon vos besoins.",
                },
              ],
            },
            security: {
              surtitle: "COMMENT ÇA SE PASSE",
              titlePart1: "Une approche progressive pour",
              titleHighlight: "renforcer",
              titlePart2: "votre sécurité",
              subtitle:
                "CyberSky identifies vos risques, priorise les actions à mener et déploie les protections adaptées pour sécuriser vos systèmes, vos données et vos utilisateurs.",
              steps: [
                {
                  title: "Analyse des risques",
                  desc: "Nous évaluons vos accès, postes, emails, réseau, sauvegardes, mots de passe et pratiques internes afin d’identifier les vulnérabilités.",
                },
                {
                  title: "Priorisation des actions",
                  desc: "Nous classons les risques selon leur impact potentiel afin de traiter en priorité les points les plus critiques pour votre activité.",
                },
                {
                  title: "Mise en place des protections",
                  desc: "Nous déployons les mesures adaptées : sécurisation des accès, protection des postes, sauvegardes, antivirus, bonnes pratiques et sensibilisation.",
                },
                {
                  title: "Suivi & amélioration continue",
                  desc: "Nous assurons un suivi régulier pour adapter votre niveau de sécurité aux nouveaux risques et aux évolutions de votre entreprise.",
                },
              ],
            },
            software: {
              surtitle: "COMMENT ÇA SE PASSE",
              titlePart1: "Des outils pensés pour",
              titleHighlight: "simplifier",
              titlePart2: "votre organisation",
              subtitle:
                "CyberSky vous accompagne dans la digitalisation de vos processus afin de réduire les tâches manuelles, connecter vos outils et améliorer la productivité de vos équipes.",
              steps: [
                {
                  title: "Analyse de vos processus",
                  desc: "Nous identifions vos tâches répétitives, vos outils existants, vos fichiers dispersés et les points de friction dans votre organisation.",
                },
                {
                  title: "Définition de la solution",
                  desc: "Nous proposons l’approche la plus adaptée : logiciel métier, automatisation, tableau de bord, application interne ou outil sur mesure.",
                },
                {
                  title: "Intégration & automatisation",
                  desc: "Nous configurons, connectons ou développons les solutions nécessaires pour fluidifier votre fonctionnement quotidien.",
                },
                {
                  title: "Formation & amélioration",
                  desc: "Nous accompagnons vos équipes dans la prise en main des outils et faisons évoluer la solution selon les retours terrain.",
                },
              ],
            },
            cloud: {
              surtitle: "COMMENT ÇA SE PASSE",
              titlePart1: "Une transition cloud",
              titleHighlight: "sécurisée",
              titlePart2: "et maîtrisée",
              subtitle:
                "CyberSky vous accompagne dans l’hébergement, la sauvegarde et la migration de vos données afin d’améliorer l’accès, la sécurité et la continuité de votre activité.",
              steps: [
                {
                  title: "Analyse de l’existant",
                  desc: "Nous identifions vos données, applications, utilisateurs, contraintes de sécurité et besoins d’accès à distance.",
                },
                {
                  title: "Conception de l’architecture",
                  desc: "Nous définissons une solution cloud adaptée : stockage, sauvegarde, messagerie, hébergement, serveurs ou outils collaboratifs.",
                },
                {
                  title: "Migration & sécurisation",
                  desc: "Nous transférons vos données, configurons les accès, sécurisons l’environnement et limitons les interruptions pendant la transition.",
                },
                {
                  title: "Suivi & optimisation",
                  desc: "Nous assurons le suivi de votre environnement cloud, les sauvegardes, les accès et les évolutions nécessaires dans le temps.",
                },
              ],
            },
          },
        },
        riskzones: {
          data: {
            security: {
              surtitle: "LES ZONES À RISQUES",
              titlePart1: "Les cybermenaces touchent",
              titleHighlight: "toute votre",
              titlePart2: "entreprise",
              subtitle:
                "Chaque poste, chaque utilisateur, chaque donnée peut être ciblé. Prenez mesure de l'étendue des risques potentiels.",
              button: "Demander un devis",
              zones: {
                z1: {
                  title: "Postes de travail",
                  desc: "Ransomware, virus, malveillances...",
                },
                z2: {
                  title: "E-mails & phishing",
                  desc: "Phishing, pièces jointes piégées, usurpation...",
                },
                z3: {
                  title: "Réseau & WiFi",
                  desc: "Intrusions, segmentation, accès distants...",
                },
                z4: {
                  title: "Cloud & données",
                  desc: "Fuites, hébergements, partages...",
                },
                z5: {
                  title: "Accès & mots de passe",
                  desc: "Authentification, gestion des droits...",
                },
              },
            },
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
          callDayLabel: "Jour souhaité pour l'appel",
          callDayPlaceholder: "Sélectionnez une date (ex: Lundi, ou JJ/MM)",
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
          body: "Le site <strong>CyberSky</strong>, accessible à l’adresse https://cyberskyagency.com/, est édité par la société <strong>Visuance Agency (du Groupe Play To Sky)</strong>.<br />Siège social : Paris, France.<br />Directeur de la publication : <em>Robbin-James Agoh</em>.",
        },
        section2: {
          title: "2. Hébergement",
          body: "Le site est hébergé par : <strong>OVH</strong><br /> Site web : https://www.ovhcloud.com/",
        },
        section3: {
          title: "3. Activité",
          body: "CyberSky Agency est une agence spécialisée dans la création et la stratégie digitale, notamment :",
          li1: "Création de sites web",
          li2: "Branding & identité visuelle",
          li3: "UX/UI design",
          li4: "Marketing digital",
          li5: "SEO & acquisition",
          li6: "Production de contenus digitaux",
        },
        section4: {
          title: "4. Propriété intellectuelle",
          body: "L’ensemble des contenus présents sur le site (textes, images, vidéos, logos, graphismes, structure, code, etc.) est protégé par le droit de la propriété intellectuelle.<br />Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est strictement interdite.",
        },
        section5: {
          title: "5. Responsabilité",
          body: "CyberSky Agency s’efforce de fournir des informations fiables et à jour.<br />Toutefois, l’éditeur ne peut être tenu responsable",
          li1: "d’erreurs ou omissions",
          li2: "d’une indisponibilité temporaire du site",
          li3: "de l’utilisation faite des informations présentes"
        },
        section6: {
          title: "Liens externes",
          body: "Le site peut contenir des liens vers des sites tiers.<br />CyberSky Agency n’exerce aucun contrôle sur ces contenus et décline toute responsabilité.",
        },
        section7: {
          title: "Données personnelles",
          body: "Les données personnelles collectées via le site sont traitées conformément à la réglementation en vigueur et à la politique de confidentialité.",
        },
        section8: {
          title: "Droit applicable",
          body: "Le site est soumis au droit français.<br />Tout litige relève des tribunaux compétents du siège social de CyberSky Agency.",
        },
      },
      privacy: {
        title: "Politique de Confidentialité",
        updated: "Dernière mise à jour : ",
        section1: {
          title: "1. Collecte des données personnelles",
          body: "Dans le cadre de l'utilisation du site CyberSky, il est susceptible de collecter vos données lorsque vous:",
          li1: "Remplissez un formulaire de contact",
          li2: "Demandez un devis",
          li3: "Naviguez sur le site",
          body2: "Les données collectées peuvent inclure :<br />nom, prénom, email, téléphone, entreprise, message, adresse IP, données de navigation"
        },
        section2: {
          title: "2. Utilisation des données",
          body: "Les données collectées sont utilisées uniquement pour :",
          li1: "Répondre aux demandes",
          li2: "Fournir des devis et propositions commerciales",
          li3: "Améliorer l’expérience utilisateur",
          li4: "Analyser les performances du site",
          li5: "Gérer la relation client",
        },
        section3: {
          title: "3. Base légale",
          body: "Le traitement repose sur :",
          li1: "Le consentement de l’utilisateur",
          li2: "L’exécution d’une relation précontractuelle",
          li3: "L’intérêt légitime de l’entreprise"
        },
        section4: {
          title: "4. Durée de conservation",
          li1: "Prospects : jusqu’à 3 ans après le dernier contact",
          li2: "Clients : jusqu’à 10 ans (obligations comptables et légales)",
        },
        section5: {
          title: "5. Partage des donnée et conservation",
          body: "Les données peuvent être partagées uniquement avec :<br />Prestataires techniques (hébergement, CRM, analytics)<br />Services nécessaires au fonctionnement du site<br />Aucune donnée n’est vendue ni cédée à des tiers.",
        },
        section6: {
          title: "6. Cookies",
          body: "Le site utilise des cookies pour :",
          li1: "Mesurer l’audience",
          li2: "Améliorer la navigation",
          li3: "Optimiser les performances marketing",
          body2: "Un bandeau de consentement permet à l’utilisateur de gérer ses préférences."
        },
        section7: {
          title: "7. Vos droits (RGPD)",
          body: "Conformément au RGPD, vous disposez de :",
          li1: "Droit d’accès",
          li2: "Droit de rectification",
          li3: "Droit de suppression",
          li4: "Droit d’opposition",
          li5: "Droit à la portabilité",
          body2: "Pour exercer vos droits : contact@cyberskyagency.com"
        },
        section8: {
          title: "8. Sécurité",
          body: "CyberSky Agency met en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, perte ou divulgation.",
        },
        section9: {
          title: "9. Modification",
          body: "Cette politique peut être modifiée à tout moment afin de rester conforme à la législation.<br />Dernière mise à jour : 24/06/2026",
        },
        section10: {
          title: "10. Contact",
          body: "contact@cyberskyagency.com",
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
        locations: "Our locations",
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
        security: {
          q1: "Can a small business really be the victim of a cyberattack?",
          a1: "Yes. SMEs are often targeted because they sometimes have limited protections. An attack can cause data loss, business interruption, or sensitive information leaks.",
          q2: "How long does a security audit take?",
          a2: "The duration depends on the size of your infrastructure and the level of analysis required. The goal is to identify vulnerabilities, priority risks, and actions to implement.",
          q3: "Do you offer continuous monitoring?",
          a3: "Yes. CyberSky can support your company with monitoring, alert, and tracking solutions to detect suspicious behavior or security incidents more quickly.",
          q4: "Are your solutions tailored for small businesses?",
          a4: "Yes. Our solutions are designed to adapt to the needs of SMEs, with a clear, progressive, and proportionate approach to your activity.",
          q5: "What happens in the event of an attack or ransomware?",
          a5: "We assist you in limiting the impact, identifying the source of the problem, securing the affected systems, and defining the necessary actions to resume activity under the best conditions.",
          q6: "Do you provide cybersecurity awareness training?",
          a6: "Yes. We can train your teams on common risks such as phishing, weak passwords, dangerous attachments, or everyday bad practices.",
        },
        maintenance: {
          q1: "What does an IT maintenance contract include?",
          a1: "A maintenance contract can include user support, system monitoring, updates, regular checks, incident resolution, and technical support for your business.",
          q2: "Do you intervene remotely or on-site?",
          a2: "Both. We can intervene remotely for quick and simple requests, and travel on-site when the intervention requires physical presence or hardware handling.",
          q3: "What are your response times?",
          a3: "Response times depend on the level of urgency and the type of incident. Our goal is to handle requests quickly to minimize the impact on your business.",
          q4: "Can you manage the company's backups?",
          a4: "Yes. CyberSky can assist you in setting up, monitoring, and verifying your backups to protect your important data.",
          q5: "Is maintenance suitable for small businesses?",
          a5: "Yes. Our services are tailored for SMEs who want reliable IT support without necessarily having an internal IT team.",
          q6: "Can we outsource all our IT management?",
          a6: "Yes, depending on your needs. CyberSky can handle part or all of your IT management: support, maintenance, supervision, security, backups, and technical support.",
        },
        cloud: {
          q1: "Is the cloud suitable for a small business?",
          a1: "Yes. The cloud allows SMEs to access flexible, scalable, and secure solutions without having to manage an entire internal IT infrastructure.",
          q2: "Where is my data stored?",
          a2: "This depends on the chosen solution. CyberSky helps you choose suitable hosting, with particular attention paid to data security, confidentiality, and compliance.",
          q3: "What is the difference between the cloud and a local server?",
          a3: "A local server is hosted on your premises, while a cloud solution relies on outsourced infrastructure. The cloud often provides more flexibility, availability, and ease of management.",
          q4: "Can we back up our files automatically?",
          a4: "Yes. CyberSky can set up automatic, secure, and regular backups to limit the risk of data loss.",
          q5: "Is my data secure in the cloud?",
          a5: "Yes, if the solution is properly configured. We assist you with access, backups, user rights, and best practices to strengthen your data security.",
          q6: "Can you migrate our existing emails and files?",
          a6: "Yes. CyberSky can help you migrate your emails, files, and collaborative tools to a cloud solution tailored to your business.",
        },
        equipment: {
          q1: "What type of hardware do you offer?",
          a1: "CyberSky assists companies in choosing professional IT equipment: desktops, laptops, servers, storage, network, Wi-Fi, printers, and peripherals.",
          q2: "Can you install and configure the equipment?",
          a2: "Yes. We can prepare, install, and configure the equipment so that it is ready to use: user accounts, network access, software, basic security, and functional tests.",
          q3: "Do you help choose the right hardware?",
          a3: "Yes. We analyze your needs, usage, and budget to guide you towards hardware suited to your activity, without unnecessarily oversizing.",
          q4: "Do you offer hardware for small businesses?",
          a4: "Yes. Our recommendations are tailored for SMEs, whether it's equipping a few workstations, renewing an existing fleet, or preparing for scale-up.",
          q5: "Can you manage the renewal of the IT fleet?",
          a5: "Yes. CyberSky can support you in monitoring, replacing, and evolving your IT fleet to maintain reliable and high-performance equipment.",
          q6: "Is the hardware delivered ready to use?",
          a6: "Yes, depending on the chosen service. We can deliver equipment already prepared, configured, and tested to facilitate its deployment in your company.",
        },
        software: {
          q1: "Why digitize my internal processes?",
          a1: "Digitizing your processes reduces manual tasks, limits errors, centralizes information, and saves time in the daily management of your business.",
          q2: "Can you create a custom tool?",
          a2: "Yes. CyberSky can design tools tailored to your specific needs: client portals, internal tools, dashboards, automation, or business interfaces.",
          q3: "Do you help choose a CRM or business software?",
          a3: "Yes. We can assist you in choosing, configuring, and integrating a CRM, ERP, or business software suited to your activity.",
          q4: "Can repetitive tasks be automated?",
          a4: "Yes. We can automate actions such as reminders, notifications, exports, client tracking, synchronization between tools, or repetitive administrative tasks.",
          q5: "Do you train teams to use the new tools?",
          a5: "Yes. We support your teams in learning to use the implemented tools to ensure simple, clear, and effective usage.",
          q6: "Is this suitable for small businesses?",
          a6: "Yes. Our solutions are tailored for SMEs looking to save time, better organize their data, and modernize their working methods without unnecessary complexity.",
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
          subtitle: "Taking an interest in IT service risks...",
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
      services: {
        seo: {
          title: "Our IT & Cybersecurity Solutions",
          description:
            "Discover the full range of CyberSky services: from data protection to IT asset management, we offer customized solutions for your business.",
        },
        h1: "<span class='text-cybersky-red'>IT solutions</span> designed to help your business grow.",
        h2: "Our <span class='text-cybersky-red'>technological expertise</span> at your disposal",
        card_more: "Learn more",
        data: {
          maintenance_title: "Maintenance",
          maintenance_desc:
            "Turnkey maintenance services for small and medium-sized businesses to optimize the management of your IT equipment.",
          equipment_title: "Equipment",
          equipment_desc:
            "Sales, installation, and configuration of professional IT hardware: computers, PCs, switches, servers, Wi-Fi access points...",
          securite_title: "Security",
          securite_desc:
            "Security solutions and protection for corporate IT networks.",
          software_title: "Software",
          software_desc:
            "Solutions for digitizing administrative tasks for small businesses and SMEs, as well as for digitizing and electronically managing your documents.",
          cloud_title: "Cloud",
          cloud_desc: "Secure, custom hosting solutions for your data.",
        },
      },
      service_detail: {
        seo: {
          cloud: {
            title: "Cloud Solutions & Secure Hosting",
            description:
              "Outsource your IT for greater security and flexibility. Automated migration, backup, and custom cloud servers.",
          },
          maintenance: {
            title: "Proactive IT Maintenance",
            description:
              "Ensure your business continuity. 24/7 monitoring, user support, updates, and backup management for SMEs.",
          },
          security: {
            title: "Cybersecurity & Data Protection",
            description:
              "Secure your business against cyber threats. Audits, protection, awareness training, and incident response with CyberSky experts.",
          },
          software: {
            title: "Software Solutions & Digitalization",
            description:
              "Digitize and automate your internal processes. Integration of business tools, dashboards, and custom-developed web applications.",
          },
          equipment: {
            title: "Professional IT Hardware",
            description:
              "Equip your business with reliable hardware. Consulting, on-site installation, secure configuration, and IT asset monitoring.",
          },
        },
        hero: {
          cloud: {
            tag: "Cloud",
            hero_part1: "Outsource your IT for greater ",
            hero_highlight: "security and flexibility",
          },
          maintenance: {
            tag: "Maintenance",
            hero_part1: "Proactive IT maintenance for ",
            hero_highlight: "your business",
          },
          security: {
            tag: "Cybersecurity",
            hero_part1: "Secure your business against ",
            hero_highlight: "cyber threats",
          },
          software: {
            tag: "Software Solutions",
            hero_part1: "Digitize your internal processes with ",
            hero_highlight: "custom software solutions",
          },
          equipment: {
            tag: "Equipment",
            hero_part1: "Equip your business with ",
            hero_highlight: "reliable and high-performance hardware",
          },
        },
        default_button: "Request a Quote",
        keyfigures: {
          title: "Key figures",
          source: "Source",
          data: {
            securite: {
              figures: {
                stat1: "43%",
                desc1:
                  "SMEs victims of a cyberattack close or go bankrupt within 6 months.",
                src1: "ANSSI",
                stat2: "1 in 2",
                desc2: "SMEs have already suffered a cyberattack.",
                src2: "ANSSI",
                stat3: "300%",
                desc3: "Threats constantly target corporate systems.",
                src3: "ANSSI",
              },
            },
            maintenance: {
              figures: {
                stat1: "80%",
                desc1:
                  "IT failures are linked to poor maintenance or configuration.",
                src1: "TechRadar / études sectorielles",
                stat2: "€10K",
                desc2: "Estimated cost of one day of IT downtime for an SME.",
                src2: "Syntec Numérique, Cigref, IDC",
                stat3: "20%",
                desc3: "Incidents can be avoided through regular maintenance.",
                src3: "IDC / Syntec Numérique",
              },
            },
            cloud: {
              figures: {
                stat1: "78%",
                desc1:
                  "SMEs state that the cloud strengthens their IT security.",
                src1: "Sage",
                stat2: "1/2",
                desc2:
                  "SMEs have already suffered data loss due to a breakdown.",
                src2: "Markess",
                stat3: "83%",
                desc3:
                  "Companies using the cloud report improved productivity.",
                src3: "Microsoft Europe",
              },
            },
            equipment: {
              figures: {
                stat1: "70%",
                desc1:
                  "IT failures are linked to obsolete or ill-suited equipment.",
                src1: "Gartner",
                stat2: "22min",
                desc2: "Lost every day due to slow or inadequate equipment.",
                src2: "Etude Sharp / FSDS, 2023",
                stat3: "85%",
                desc3:
                  "Employees believe that good equipment improves their productivity.",
                src3: "Etude SYMANTEC",
              },
            },
            software: {
              figures: {
                stat1: "76%",
                desc1:
                  "SMEs note a positive impact of digital technology on their activity.",
                src1: "Baromètre France Num 2022",
                stat2: "48%",
                desc2:
                  "Companies state that digitalization helps reduce their costs.",
                src2: "Baromètre France Num 2022",
                stat3: "1/3",
                desc3:
                  "SMEs still manage some administrative tasks on Excel or paper.",
                src3: "Baromètre France Num 2022",
              },
            },
          },
        },
        details: {
          data: {
            securite: {
              surtitle: "OUR SERVICES",
              titlePart1: "A complete,",
              titleHighlight: "tailored",
              titlePart2: "protection",
              subtitle:
                "Every workstation, every user, every piece of data can be secured. Our team handles every aspect for you.",
              s1: {
                title: "Security Audit",
                desc: "Complete analysis of your infrastructure, servers, workstations, and vulnerabilities. A clear report, recommendations, and a concrete action plan.",
                t1: "IS Mapping",
                t2: "Pentest",
                t3: "Compliance",
              },
              s2: {
                title: "Phishing Simulation",
                desc: "Test and train your teams against social engineering threats. Targeted phishing and real-time awareness.",
                t1: "Targeted Campaigns",
                t2: "Statistics",
                t3: "Training",
              },
              s3: {
                title: "Surveillance & Protection",
                desc: "Permanent monitoring, incident detection, protection of critical systems. A dedicated team watching while you work.",
                t1: "SOC 24/7",
                t2: "EDR / XDR",
                t3: "Isolated Network",
              },
              s4: {
                title: "Cybersecurity Consulting",
                desc: "Strategy definition, team support, best practices. The best technology does not replace a trained team.",
                t1: "Strategy",
                t2: "Audits",
                t3: "Certifications",
              },
            },
            maintenance: {
              surtitle: "OUR SERVICES",
              titlePart1: "Proactive",
              titleHighlight: "maintenance",
              titlePart2: "for your business continuity",
              subtitle:
                "We monitor, maintain, and optimize your systems to avoid downtime and ensure the stability of your operations.",
              s1: {
                title: "Proactive Supervision",
                desc: "Continuous monitoring of your systems to detect incidents before they become critical.",
                t1: "Monitoring 24/7",
                t2: "Alerts",
                t3: "Reports",
              },
              s2: {
                title: "Preventive Maintenance",
                desc: "Updates, fixes, and optimizations to keep your systems stable and secure.",
                t1: "System Updates",
                t2: "Optimization",
                t3: "Monitoring",
              },
              s3: {
                title: "Support & Assistance",
                desc: "Rapid support to resolve your team's technical issues.",
                t1: "Call Center",
                t2: "User Support",
                t3: "Intervention",
              },
              s4: {
                title: "Backup & Continuity",
                desc: "Setup and control of backups to protect your critical data.",
                t1: "Security",
                t2: "Restoration",
                t3: "Disaster Recovery Plans",
              },
            },
            cloud: {
              surtitle: "OUR SERVICES",
              titlePart1: "Flexible, secure,",
              titleHighlight: "and adapted",
              titlePart2: "cloud solutions",
              subtitle:
                "We support you in migrating, backing up, and hosting your data for greater peace of mind.",
              s1: {
                title: "Cloud Migration",
                desc: "We support you in transitioning to cloud solutions adapted to your business.",
                t1: "Analysis",
                t2: "Migration",
                t3: "Cost Reduction",
              },
              s2: {
                title: "Cloud Backup",
                desc: "We implement secure backups to protect your critical data.",
                t1: "Automation",
                t2: "Encryption",
                t3: "Restoration",
              },
              s3: {
                title: "Hosting & Cloud Servers",
                desc: "We help you host your applications, files, and services in a reliable environment.",
                t1: "Adaptation",
                t2: "High Availability",
                t3: "Supervision",
              },
              s4: {
                title: "Microsoft 365 + Collaboration Tools",
                desc: "We configure your collaborative work tools to improve your team's productivity.",
                t1: "User Accounts",
                t2: "Professional Email",
              },
            },
            software: {
              surtitle: "OUR SERVICES",
              titlePart1: "Digital tools to",
              titleHighlight: "automate",
              titlePart2: "and better manage your activity",
              subtitle:
                "We design, configure, and develop software solutions to simplify your processes and save time.",
              s1: {
                title: "Business Tool Integration",
                desc: "We help you choose and implement software tailored to your activity.",
                t1: "CRM / ERP",
                t2: "Collaborative Tools",
                t3: "Management",
              },
              s2: {
                title: "Process Automation",
                desc: "We automate repetitive tasks to reduce errors and save time.",
                t1: "Workflows",
                t2: "Notifications",
                t3: "Synchronizations",
              },
              s3: {
                title: "Dashboards & Reporting",
                desc: "We create clear views to track your performance and make better decisions.",
                t1: "KPIs",
                t2: "Activity Tracking",
                t3: "Automated Reports",
              },
              s4: {
                title: "Custom Web Applications",
                desc: "We develop simple tools tailored to your specific needs.",
                t1: "Client Portal",
                t2: "Internal Tools",
                t3: "Business Interfaces",
              },
            },
            equipment: {
              surtitle: "OUR SERVICES",
              titlePart1: "Professional",
              titleHighlight: "hardware,",
              titlePart2: "installed and configured for your needs",
              subtitle:
                "We help you choose, deploy, and configure equipment tailored to your teams and activity.",
              s1: {
                title: "Consulting & Hardware Selection",
                desc: "We help you choose equipment tailored to your budget and usage.",
                t1: "Consulting",
                t2: "Audit",
              },
              s2: {
                title: "On-site Installation",
                desc: "Hardware deployment, wiring, configuration, and testing on your site.",
                t1: "Wiring",
                t2: "Deployment",
              },
              s3: {
                title: "Security Configuration",
                desc: "Setting up access, antivirus, user accounts, and basic protections.",
                t1: "Access",
                t2: "Accounts",
              },
              s4: {
                title: "Monitoring & Renewal",
                desc: "We support you in monitoring, evolving, and replacing your equipment.",
                t1: "Monitoring",
                t2: "Renewal",
              },
            },
          },
        },
        methodology: {
          data: {
            maintenance: {
              surtitle: "HOW IT WORKS",
              titlePart1: "Maintenance designed to",
              titleHighlight: "guarantee",
              titlePart2: "your continuity",
              subtitle:
                "From analyzing your IT infrastructure to regular monitoring, CyberSky supports you with a clear, responsive, and structured approach to limit downtime and keep your equipment operational.",
              steps: [
                {
                  title: "Comprehensive assessment",
                  desc: "We analyze your IT environment: workstations, servers, network, backups, software, and daily usage.",
                },
                {
                  title: "Vulnerability diagnosis",
                  desc: "We identify slowdowns, recurring failures, technical risks, and elements that could impact your business continuity.",
                },
                {
                  title: "Intervention & optimization",
                  desc: "We make the necessary corrections: updates, configurations, security enhancements, optimization, and remote or on-site interventions.",
                },
                {
                  title: "Long-term monitoring",
                  desc: "We provide regular support to maintain a stable, reliable, and scalable IT environment.",
                },
              ],
            },
            equipment: {
              surtitle: "HOW IT WORKS",
              titlePart1: "Equipment",
              titleHighlight: "adapted",
              titlePart2: "to your professional needs",
              subtitle:
                "CyberSky assists you in selecting, installing, and configuring your IT hardware to ensure performance, reliability, and daily comfort.",
              steps: [
                {
                  title: "Needs analysis",
                  desc: "We study your usage, professions, number of users, and the technical constraints of your environment.",
                },
                {
                  title: "Hardware recommendation",
                  desc: "We select the equipment suited to your activity: computers, screens, servers, network, Wi-Fi, peripherals, and professional accessories.",
                },
                {
                  title: "Preparation & installation",
                  desc: "We prepare, install, and configure the hardware with the necessary software, access rights, security settings, and tools.",
                },
                {
                  title: "Fleet monitoring & evolution",
                  desc: "We support you in renewing, optimizing, and upgrading your equipment according to your needs.",
                },
              ],
            },
            security: {
              surtitle: "HOW IT WORKS",
              titlePart1: "A progressive approach to",
              titleHighlight: "strengthening",
              titlePart2: "your security",
              subtitle:
                "CyberSky identifies your risks, prioritizes actions, and deploys the appropriate protections to secure your systems, data, and users.",
              steps: [
                {
                  title: "Risk analysis",
                  desc: "We evaluate your access rights, workstations, emails, network, backups, passwords, and internal practices to identify vulnerabilities.",
                },
                {
                  title: "Prioritization of actions",
                  desc: "We classify risks by their potential impact to prioritize the most critical points for your business.",
                },
                {
                  title: "Deployment of protections",
                  desc: "We deploy the appropriate measures: access security, workstation protection, backups, antivirus, best practices, and awareness training.",
                },
                {
                  title: "Monitoring & continuous improvement",
                  desc: "We provide regular monitoring to adapt your security level to new risks and your company's evolution.",
                },
              ],
            },
            software: {
              surtitle: "HOW IT WORKS",
              titlePart1: "Tools designed to",
              titleHighlight: "simplify",
              titlePart2: "your organization",
              subtitle:
                "CyberSky supports you in the digitalization of your processes to reduce manual tasks, connect your tools, and improve your teams' productivity.",
              steps: [
                {
                  title: "Process analysis",
                  desc: "We identify your repetitive tasks, existing tools, scattered files, and friction points in your organization.",
                },
                {
                  title: "Solution definition",
                  desc: "We propose the most suitable approach: business software, automation, dashboard, internal application, or custom tool.",
                },
                {
                  title: "Integration & automation",
                  desc: "We configure, connect, or develop the necessary solutions to streamline your daily operations.",
                },
                {
                  title: "Training & improvement",
                  desc: "We train your teams to use the tools and evolve the solution based on field feedback.",
                },
              ],
            },
            cloud: {
              surtitle: "HOW IT WORKS",
              titlePart1: "A",
              titleHighlight: "secure and controlled",
              titlePart2: "cloud transition",
              subtitle:
                "CyberSky assists you in hosting, backing up, and migrating your data to improve access, security, and business continuity.",
              steps: [
                {
                  title: "Current state analysis",
                  desc: "We identify your data, applications, users, security constraints, and remote access needs.",
                },
                {
                  title: "Architecture design",
                  desc: "We define a suitable cloud solution: storage, backup, email, hosting, servers, or collaborative tools.",
                },
                {
                  title: "Migration & security",
                  desc: "We transfer your data, configure access, secure the environment, and limit interruptions during the transition.",
                },
                {
                  title: "Monitoring & optimization",
                  desc: "We monitor your cloud environment, backups, access, and necessary evolutions over time.",
                },
              ],
            },
          },
        },
        riskzones: {
          data: {
            security: {
              surtitle: "RISK ZONES",
              titlePart1: "Cyber threats affect",
              titleHighlight: "your entire",
              titlePart2: "company",
              subtitle:
                "Every workstation, every user, every piece of data can be targeted. Measure the extent of potential risks.",
              button: "Request a Quote",
              zones: {
                z1: {
                  title: "Workstations",
                  desc: "Ransomware, viruses, malicious software...",
                },
                z2: {
                  title: "Emails & Phishing",
                  desc: "Phishing, malicious attachments, spoofing...",
                },
                z3: {
                  title: "Network & WiFi",
                  desc: "Intrusions, segmentation, remote access...",
                },
                z4: {
                  title: "Cloud & Data",
                  desc: "Data leaks, hosting, file sharing...",
                },
                z5: {
                  title: "Access & Passwords",
                  desc: "Authentication, access rights management...",
                },
              },
            },
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
          callDayLabel: "Preferred day for the call",
          callDayPlaceholder: "Select a date (e.g., Monday, or MM/DD)",
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
