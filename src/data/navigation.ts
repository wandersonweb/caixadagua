export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const headerNav: NavItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Serviços",
    href: "/servicos/",
    children: [
      {
        label: "Reforma de Caixa",
        href: "/reforma-de-caixa-dagua/"
      },
      {
        label: "Limpeza de Caixa",
        href: "/limpeza-de-caixa-dagua/"
      },
      {
        label: "Manutenção",
        href: "/manutencao-de-caixa-d-agua/"
      },
      {
        label: "Impermeabilização",
        href: "/impermeabilizacao-de-caixa-dagua/"
      },
      {
        label: "Reforma de Concreto",
        href: "/reforma-de-caixa-dagua-de-concreto/"
      },
      {
        label: "Reparo em Fibra",
        href: "/consertar-caixa-d-agua-de-fibra/"
      }
    ]
  },
  {
    label: "Sobre Nós",
    href: "/sobre-nos/"
  },
  {
    label: "Contato",
    href: "/contato/"
  }
];

export const footerNav: NavItem[] = [
  {
    label: "Inicio",
    href: "/"
  },
  {
    label: "Serviços",
    href: "/servicos/"
  },
  {
    label: "Quem Somos",
    href: "/sobre-nos/"
  },
  {
    label: "Contato",
    href: "/contato/"
  },
  {
    label: "Política de Privacidade",
    href: "/politica-de-privacidade/"
  }
];
