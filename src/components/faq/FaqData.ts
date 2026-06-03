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
