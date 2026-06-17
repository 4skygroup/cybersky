export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const homeFaqData: FAQItem[] = [
  { id: 1, question: "faq.home.q1", answer: "faq.home.a1" },
  { id: 2, question: "faq.home.q2", answer: "faq.home.a2" },
  { id: 3, question: "faq.home.q3", answer: "faq.home.a3" },
  { id: 4, question: "faq.home.q4", answer: "faq.home.a4" },
  { id: 5, question: "faq.home.q5", answer: "faq.home.a5" },
  { id: 6, question: "faq.home.q6", answer: "faq.home.a6" },
];

export const securiteFaqData: FAQItem[] = [
  {
    id: 1,
    question: "Une PME peut-elle vraiment être victime d’une cyberattaque ?",
    answer:
      "Oui. Les PME sont souvent ciblées car elles disposent parfois de protections limitées. Une attaque peut provoquer une perte de données, une interruption d’activité ou une fuite d’informations sensibles.",
  },
  {
    id: 2,
    question: "Combien de temps prend un audit de sécurité ?",
    answer:
      "La durée dépend de la taille de votre infrastructure et du niveau d’analyse demandé. L’objectif est d’identifier les failles, les risques prioritaires et les actions à mettre en place.",
  },
  {
    id: 3,
    question: "Proposez-vous une surveillance continue ?",
    answer:
      "Oui. CyberSky peut accompagner votre entreprise avec des solutions de surveillance, d’alertes et de suivi afin de détecter plus rapidement les comportements suspects ou incidents de sécurité.",
  },
  {
    id: 4,
    question: "Vos solutions sont-elles adaptées aux petites entreprises ?",
    answer:
      "Oui. Nos solutions sont pensées pour s’adapter aux besoins des TPE/PME, avec une approche claire, progressive et proportionnée à votre activité.",
  },
  {
    id: 5,
    question: "Que se passe-t-il en cas d’attaque ou de ransomware ?",
    answer:
      "Nous vous accompagnons pour limiter l’impact, identifier l’origine du problème, sécuriser les systèmes touchés et définir les actions nécessaires pour reprendre l’activité dans les meilleures conditions.",
  },
  {
    id: 6,
    question: "Faites-vous de la sensibilisation cybersécurité ?",
    answer:
      "Oui. Nous pouvons sensibiliser vos équipes aux risques courants comme le phishing, les mots de passe faibles, les pièces jointes dangereuses ou les mauvaises pratiques du quotidien.",
  },
];

export const maintenanceFaqData: FAQItem[] = [
  {
    id: 1,
    question: "Que comprend un contrat de maintenance informatique ?",
    answer:
      "Un contrat de maintenance peut inclure le support utilisateurs, la supervision des systèmes, les mises à jour, les vérifications régulières, la résolution d’incidents et l’accompagnement technique de votre entreprise.",
  },
  {
    id: 2,
    question: "Intervenez-vous à distance ou sur site ?",
    answer:
      "Oui. Nous pouvons intervenir à distance pour les demandes simples et rapides, et nous déplacer sur site lorsque l’intervention nécessite une présence physique ou une manipulation matérielle.",
  },
  {
    id: 3,
    question: "Quels sont vos délais d’intervention ?",
    answer:
      "Les délais dépendent du niveau d’urgence et du type d’incident. Notre objectif est de prendre en charge rapidement les demandes afin de limiter l’impact sur votre activité.",
  },
  {
    id: 4,
    question: "Pouvez-vous gérer les sauvegardes de l’entreprise ?",
    answer:
      "Oui. CyberSky peut vous accompagner dans la mise en place, le suivi et la vérification de vos sauvegardes afin de protéger vos données importantes.",
  },
  {
    id: 5,
    question: "La maintenance est-elle adaptée aux petites entreprises ?",
    answer:
      "Oui. Nos prestations sont adaptées aux TPE/PME qui souhaitent bénéficier d’un suivi informatique fiable sans avoir forcément une équipe IT en interne.",
  },
  {
    id: 6,
    question: "Peut-on externaliser toute notre gestion informatique ?",
    answer:
      "Oui, selon vos besoins. CyberSky peut prendre en charge une partie ou l’ensemble de votre gestion informatique : support, maintenance, supervision, sécurité, sauvegardes et accompagnement technique.",
  },
];

export const cloudFaqData: FAQItem[] = [
  {
    id: 1,
    question: "Le cloud est-il adapté à une petite entreprise ?",
    answer:
      "Oui. Le cloud permet aux TPE/PME d’accéder à des solutions flexibles, évolutives et sécurisées sans devoir gérer toute une infrastructure informatique en interne.",
  },
  {
    id: 2,
    question: "Où sont stockées mes données ?",
    answer:
      "Cela dépend de la solution choisie. CyberSky vous accompagne dans le choix d’un hébergement adapté, avec une attention particulière portée à la sécurité, à la confidentialité et à la conformité des données.",
  },
  {
    id: 3,
    question: "Quelle est la différence entre le cloud et un serveur local ?",
    answer:
      "Un serveur local est hébergé dans vos locaux, tandis qu’une solution cloud repose sur une infrastructure externalisée. Le cloud permet souvent plus de flexibilité, de disponibilité et de simplicité de gestion.",
  },
  {
    id: 4,
    question: "Peut-on sauvegarder automatiquement nos fichiers ?",
    answer:
      "Oui. CyberSky peut mettre en place des sauvegardes automatiques, sécurisées et régulières afin de limiter les risques de perte de données.",
  },
  {
    id: 5,
    question: "Mes données sont-elles sécurisées dans le cloud ?",
    answer:
      "Oui, si la solution est bien configurée. Nous vous accompagnons sur les accès, les sauvegardes, les droits utilisateurs et les bonnes pratiques pour renforcer la sécurité de vos données.",
  },
  {
    id: 6,
    question: "Pouvez-vous migrer nos mails et fichiers existants ?",
    answer:
      "Oui. CyberSky peut vous accompagner dans la migration de vos mails, fichiers et outils collaboratifs vers une solution cloud adaptée à votre entreprise.",
  },
];

export const equipementFaqData: FAQItem[] = [
  {
    id: 1,
    question: "Quel type de matériel proposez-vous ?",
    answer:
      "CyberSky accompagne les entreprises dans le choix d’équipements informatiques professionnels : postes fixes, ordinateurs portables, serveurs, stockage, réseau, Wi-Fi, imprimantes et périphériques.",
  },
  {
    id: 2,
    question: "Pouvez-vous installer et configurer les équipements ?",
    answer:
      "Oui. Nous pouvons préparer, installer et configurer les équipements afin qu’ils soient prêts à l’usage : comptes utilisateurs, accès réseau, logiciels, sécurité de base et tests de fonctionnement.",
  },
  {
    id: 3,
    question: "Aidez-vous à choisir le bon matériel ?",
    answer:
      "Oui. Nous analysons vos besoins, vos usages et votre budget pour vous orienter vers du matériel adapté à votre activité, sans surdimensionner inutilement.",
  },
  {
    id: 4,
    question: "Proposez-vous du matériel pour les petites entreprises ?",
    answer:
      "Oui. Nos recommandations sont adaptées aux TPE/PME, que ce soit pour équiper quelques postes, renouveler un parc existant ou préparer une montée en charge.",
  },
  {
    id: 5,
    question: "Pouvez-vous gérer le renouvellement du parc informatique ?",
    answer:
      "Oui. CyberSky peut vous accompagner dans le suivi, le remplacement et l’évolution de votre parc informatique afin de maintenir des équipements fiables et performants.",
  },
  {
    id: 6,
    question: "Le matériel est-il livré prêt à l’emploi ?",
    answer:
      "Oui, selon la prestation choisie. Nous pouvons livrer les équipements déjà préparés, configurés et testés pour faciliter leur mise en service dans votre entreprise.",
  },
];

export const softwareFaqData: FAQItem[] = [
  {
    id: 1,
    question: "Pourquoi digitaliser mes processus internes ?",
    answer:
      "Digitaliser vos processus permet de réduire les tâches manuelles, limiter les erreurs, centraliser les informations et gagner du temps dans la gestion quotidienne de votre activité.",
  },
  {
    id: 2,
    question: "Pouvez-vous créer un outil sur mesure ?",
    answer:
      "Oui. CyberSky peut concevoir des outils adaptés à vos besoins spécifiques : portail client, outil interne, tableau de bord, automatisation ou interface métier.",
  },
  {
    id: 3,
    question: "Aidez-vous à choisir un CRM ou un logiciel métier ?",
    answer:
      "Oui. Nous pouvons vous accompagner dans le choix, la configuration et l’intégration d’un CRM, d’un ERP ou d’un logiciel métier adapté à votre activité.",
  },
  {
    id: 4,
    question: "Peut-on automatiser des tâches répétitives ?",
    answer:
      "Oui. Nous pouvons automatiser certaines actions comme les relances, notifications, exports, suivis clients, synchronisations entre outils ou tâches administratives répétitives.",
  },
  {
    id: 5,
    question: "Formez-vous les équipes à utiliser les nouveaux outils ?",
    answer:
      "Oui. Nous accompagnons vos équipes dans la prise en main des outils mis en place afin de garantir une utilisation simple, claire et efficace.",
  },
  {
    id: 6,
    question: "Est-ce adapté aux petites entreprises ?",
    answer:
      "Oui. Nos solutions sont adaptées aux TPE/PME qui souhaitent gagner du temps, mieux organiser leurs données et moderniser leurs méthodes de travail sans complexité inutile.",
  },
];