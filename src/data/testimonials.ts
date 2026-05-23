export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  location: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "Carlos Alberto Menezes",
    role: "Síndico do Edifício Solar",
    text: "Contratamos a Caixas São Bento para a reforma da nossa caixa d'água de concreto de 50.000 litros. Trabalho impecável! Equipe extremamente profissional, respeitando todas as normas de segurança (NR33 e NR35) e sem causar transtorno aos moradores.",
    rating: 5,
    location: "Belo Horizonte, MG"
  },
  {
    id: 2,
    name: "Mariana Costa Ramos",
    role: "Proprietária de Residência",
    text: "Minha caixa d'água de fibra estava com uma rachadura no fundo e vazava muito. Eles vieram no mesmo dia, realizaram o conserto com resina e fibra de vidro, e ficou excelente. Serviço rápido, limpo e preço muito justo. Recomendo de olhos fechados!",
    rating: 5,
    location: "Nova Lima, MG"
  },
  {
    id: 3,
    name: "Roberto Fernandes",
    role: "Gerente de Operações Industriais",
    text: "Impermeabilização de alto nível. Estávamos com infiltrações severas na cisterna de concreto da nossa fábrica em Contagem. O tratamento de trincas e aplicação de produtos foi feito com agilidade, resolvendo de vez o problema que durava anos.",
    rating: 5,
    location: "Contagem, MG"
  },
  {
    id: 4,
    name: "Ana Cláudia Vieira",
    role: "Administradora de Condomínio",
    text: "Realizamos a limpeza semestral e manutenção das boias com eles. Nunca mais tivemos problemas com falta de água ou vazamentos pelo ladrão da caixa. O atendimento pelo WhatsApp é muito prático e rápido.",
    rating: 5,
    location: "Belo Horizonte, MG"
  }
];
