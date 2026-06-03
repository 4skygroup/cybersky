export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const homeFaqData: FAQItem[] = [
  {
    id: 1,
    question: "Quels services propose CyberSky ?",
    answer:
      "CyberSky accompagne les entreprises sur leurs besoins informatiques essentiels : maintenance, équipement, cybersécurité, cloud et solutions logicielles. Notre objectif est de proposer un accompagnement clair, adapté et évolutif selon votre activité.",
  },
  {
    id: 2,
    question: "CyberSky accompagne-t-il les petites entreprises ?",
    answer:
      "Oui. Nos services sont pensés pour les TPE, PME et structures en croissance qui souhaitent bénéficier d’un accompagnement informatique fiable, sans forcément disposer d’une équipe IT interne.",
  },
  {
    id: 3,
    question: "Pouvez-vous gérer toute notre informatique ?",
    answer:
      "Oui, selon vos besoins. CyberSky peut intervenir sur la maintenance, la sécurité, le matériel, le cloud, les outils logiciels et l’accompagnement technique de vos équipes.",
  },
  {
    id: 4,
    question: "Comment se déroule un premier échange avec CyberSky ?",
    answer:
      "Nous commençons par comprendre votre activité, vos outils actuels, vos difficultés et vos priorités. Ensuite, nous vous proposons une solution adaptée avec un plan d’action clair.",
  },
  {
    id: 5,
    question: "Proposez-vous des services sur devis ?",
    answer:
      "Oui. Chaque entreprise a des besoins différents, donc nos prestations sont adaptées au contexte, à la taille de votre structure et aux services souhaités.",
  },
  {
    id: 6,
    question: "Intervenez-vous à distance ou sur site ?",
    answer:
      "Nous pouvons intervenir à distance pour les demandes simples et rapides, et sur site lorsque la situation nécessite une présence physique, notamment pour l’installation, l’équipement ou certains incidents techniques.",
  },
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
