export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  headline: string;
  metaDescription: string;
  shortDescription: string;
  iconName: string; // Used to determine which SVG icon to render
  benefits: string[];
  process: string[];
  faqs: FAQItem[];
  image: string;
  features?: string[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: "reforma-de-caixa-dagua",
    title: "Reforma de Caixas D’água em BH",
    headline: "Reforma de Caixas D’água",
    metaDescription: "Reforma de caixas d'água em BH para reservatórios de fibra, concreto e metal. Conserto de furos, trincas e vazamentos. Solicite orçamento!",
    shortDescription: "Serviço especializado em reforma de caixas d'água em BH, com reparo de furos, trincas, vazamentos e recuperação de reservatórios.",
    iconName: "tools",
    benefits: [
      "Eliminação completa de vazamentos e desperdício de água.",
      "Aumento significativo da vida útil do reservatório.",
      "Garantia de estanqueidade e segurança estrutural.",
      "Prevenção contra a contaminação da água armazenada."
    ],
    process: [],
    faqs: [],
    image: "/src/assets/images/services/reforma-caixa.jpg"
  },
  {
    slug: "impermeabilizacao-de-caixa-dagua",
    title: "Impermeabilização de Caixa D’água",
    headline: "Impermeabilização de Caixa D’água",
    metaDescription: "Impermeabilização de caixa d'água em BH para proteger reservatórios contra vazamentos, rachaduras e infiltrações. Solicite orçamento!",
    shortDescription: "Serviço especializado de impermeabilização de caixa d'água para proteger o reservatório contra infiltrações, vazamentos e contaminações.",
    iconName: "shield",
    benefits: [
      "Vedação total contra infiltrações em alvenaria e concreto.",
      "Proteção da estrutura de ferro contra corrosão precoce.",
      "Acabamento que impede a proliferação de fungos e bactérias.",
      "Resultados duradouros com materiais certificados pela ANVISA."
    ],
    process: [],
    faqs: [],
    image: "/src/assets/images/services/impermeabilizacao-caixa.jpg"
  },
  {
    slug: "limpeza-de-caixa-dagua",
    title: "Limpeza de Caixa D’água",
    headline: "Limpeza de Caixa D’água",
    metaDescription: "Limpeza de caixa d'água em Belo Horizonte para residências, condomínios e empresas. Higienização segura com profissionais NR33 e NR35.",
    shortDescription: "Serviço especializado de limpeza de caixa d'água em BH, com higienização, desinfecção e atendimento para reservatórios de qualquer tamanho.",
    iconName: "droplet",
    benefits: [
      "Eliminação de lodo, sujeiras, bactérias e microrganismos nocivos.",
      "Prevenção contra doenças de veiculação hídrica.",
      "Conformidade com os padrões de saúde e recomendações da ANVISA.",
      "Melhoria imediata do sabor, odor e qualidade visual da água."
    ],
    process: [],
    faqs: [],
    image: "/src/assets/images/services/limpeza-caixa.jpg"
  },
  {
    slug: "manutencao-de-caixa-d-agua",
    title: "Manutenção de Caixa d água",
    headline: "Manutenção de Caixa d água",
    metaDescription: "Manutenção de caixa d água em BH para residências, condomínios e empresas. Limpeza, reparos, impermeabilização e reforma. Solicite orçamento!",
    shortDescription: "Serviço especializado em manutenção de caixa d água, com limpeza, vistoria, reparos, impermeabilização e prevenção de vazamentos.",
    iconName: "cog",
    benefits: [
      "Prevenção de transbordamentos (ladrão quebrado ou boia com defeito).",
      "Troca rápida de flanges e conexões desgastadas que geram vazamentos silenciosos.",
      "Instalação de tampas adequadas para impedir entrada de insetos (como o mosquito da dengue).",
      "Tranquilidade com vistorias preventivas regulares."
    ],
    process: [],
    faqs: [],
    image: "/src/assets/images/services/manutencao-caixa.jpg"
  },
  {
    slug: "reforma-de-caixa-dagua-de-concreto",
    title: "Reforma de Caixa d’água de Concreto",
    headline: "Reforma de Caixa d’água de Concreto",
    metaDescription: "Reforma de caixa d'água de concreto com recuperação estrutural, impermeabilização e reparo de trincas. Solicite uma avaliação técnica.",
    shortDescription: "Serviço especializado em reforma de caixa d'água de concreto, com limpeza, inspeção, recuperação estrutural e impermeabilização.",
    iconName: "building",
    benefits: [
      "Recuperação da solidez estrutural do concreto armado.",
      "Tratamento químico contra corrosão de ferragens internas.",
      "Estanqueidade total que protege a estrutura da edificação.",
      "Profissionais qualificados com certificações NR33 e NR35."
    ],
    process: [],
    faqs: [],
    image: "/src/assets/images/services/reforma-concreto.jpg"
  },
  {
    slug: "reforma-de-caixa-dagua-de-concreto-em-belo-horizonte",
    title: "Reforma de Caixa de Concreto em BH",
    headline: "Reforma de Caixa d'Água de Concreto em Belo Horizonte e Região",
    metaDescription: "Reforma de caixas d'água de concreto em BH. Atendemos condomínios, indústrias e comércio. Equipe com NR33 e NR35. Solicite seu orçamento sem compromisso!",
    shortDescription: "Serviço altamente especializado de recuperação estrutural de reservatórios elevados e subterrâneos de concreto em BH e região metropolitana.",
    iconName: "map-pin",
    benefits: [
      "Atendimento ágil em toda a Grande Belo Horizonte.",
      "Experiência com grandes reservatórios de condomínios e indústrias.",
      "Equipe certificada em NR33 (Espaço Confinado) e NR35 (Trabalho em Altura).",
      "Emissão de laudos e nota fiscal de serviço completo."
    ],
    process: [
      "Realizamos visita técnica para vistoria preliminar da estrutura em BH.",
      "Instalamos sistemas de segurança (ancoragens e exaustores) conforme NR33/NR35.",
      "Executamos a recuperação estrutural e impermeabilização interna completa.",
      "Entregamos o reservatório higienizado e pronto para abastecer a comunidade com segurança."
    ],
    faqs: [
      {
        question: "Vocês atendem condomínios residenciais em Belo Horizonte?",
        answer: "Sim! Somos especialistas no atendimento a condomínios verticais e horizontais em BH, oferecendo contratos estruturados de reforma, impermeabilização e limpeza regular."
      },
      {
        question: "A equipe possui as certificações exigidas para trabalhar em grandes reservatórios?",
        answer: "Com certeza. Todos os nossos técnicos possuem treinamentos ativos de NR33 (Segurança em Espaços Confinados) e NR35 (Trabalho em Altura), garantindo total conformidade legal para o condomínio."
      }
    ],
    image: "/src/assets/images/services/reforma-concreto-bh.jpg"
  },
  {
    slug: "consertar-caixa-d-agua-de-fibra",
    title: "Como Consertar Caixa d água de Fibra Rachada",
    headline: "Como Consertar Caixa d água de Fibra Rachada",
    metaDescription: "Veja como consertar caixa d água de fibra rachada e quando chamar uma empresa especializada. Reparo com resina, fibra de vidro e manta.",
    shortDescription: "Entenda o passo a passo para consertar caixa d água de fibra rachada e conte com reparo profissional para furos, trincas e vazamentos.",
    iconName: "tools",
    benefits: [
      "Correção de rachaduras e furos sem troca completa do reservatório.",
      "Aplicação de fibra de vidro e resina de alta aderência.",
      "Redução de desperdício de água e risco de infiltrações.",
      "Acabamento resistente para prolongar a vida útil da caixa."
    ],
    process: [],
    faqs: [],
    image: "/src/assets/images/services/reparo-fibra.jpg"
  }
];
