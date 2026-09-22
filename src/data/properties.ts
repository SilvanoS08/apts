import { NeighborhoodInfo, PropertyItem, Differential } from '../types';

export const FORMS_LINKS = {
  tatuape: 'https://forms.gle/xy8yyJvz6uureMsL7',
  mooca: 'https://forms.gle/bu3V9fgXPpzkaXX49',
  vilaEma: 'https://forms.gle/3AB1jse44jR2krAz5',
};

export const NEIGHBORHOODS: NeighborhoodInfo[] = [
  {
    id: 'tatuape',
    name: 'Tatuapé',
    subtitle: 'Sofisticação, alta gastronomia e infraestrutura de ponta na Zona Leste',
    description:
      'O Tatuapé é um dos bairros mais desejados e valorizados de São Paulo. Reúne shoppings renomados, o prestigiado polo gastronômico das ruas Itapura e Emílio Mallet, o Parque CERET e facilidade de locomoção pela Radial Leste e Linha Vermelha do Metrô.',
    tagline: 'O epicentro de requinte e modernidade',
    formUrl: FORMS_LINKS.tatuape,
    formLabel: 'Tenho Interesse no Tatuapé',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Polo gastronômico das Ruas Itapura, Emílio Mallet e Coelho Lisboa',
      'Parque CERET com mais de 286 mil m² de área verde e lazer',
      'Shopping Metrô Tatuapé, Boulevard Tatuapé e proximidade do Anália Franco',
      'Acesso imediato à Radial Leste, Salim Farah Maluf e Marginal Tietê',
    ],
    stats: [
      { label: 'Valorização média anual', value: '+14.2%' },
      { label: 'Índice de Segurança & Lazer', value: 'Excelente' },
      { label: 'Opções de Metrô', value: 'Linha 3 - Vermelha' },
    ],
    metroStations: ['Estação Tatuapé', 'Estação Carrão'],
  },
  {
    id: 'mooca',
    name: 'Mooca',
    subtitle: 'Tradição, alma paulistana e qualidade de vida incomparável',
    description:
      'A Mooca alia o charme acolhedor das tradicionais vilas e cantinas com empreendimentos modernos de alto padrão. Um bairro seguro, familiar e com identidade única, cercado por padarias artesanais, o Mooca Plaza Shopping e o Clube Atlético Juventus.',
    tagline: 'Tradição italiana com o conforto contemporâneo',
    formUrl: FORMS_LINKS.mooca,
    formLabel: 'Tenho Interesse na Mooca',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Mooca Plaza Shopping e ampla rede de comércios tradicionais',
      'Gastronomia icônica: cantinas, pizzarias e cervejarias artesanais',
      'Clube Atlético Juventus e praças arborizadas para caminhadas',
      'Fácil acesso à Av. Paes de Barros, Av. Radial Leste e Av. do Estado',
    ],
    stats: [
      { label: 'Qualidade de vida', value: 'Nota 9.4/10' },
      { label: 'Perfil familiar', value: '91% aprovação' },
      { label: 'Transporte', value: 'Metrô Bresser & CPTM Juventus-Mooca' },
    ],
    metroStations: ['Estação Bresser-Mooca', 'Estação Juventus-Mooca CPTM'],
  },
  {
    id: 'vila-ema',
    name: 'Vila Ema',
    subtitle: 'Crescimento acelerado, mobilidade e o melhor custo-benefício',
    description:
      'A Vila Ema tornou-se o grande polo de novos condomínios-clube da Zona Leste. Com o Monotrilho Linha 15-Prata e a revitalização da Av. Vila Ema, oferece apartamentos modernos com plantas inteligentes, lazer de resort completo e excelente potencial de valorização.',
    tagline: 'O novo vetor de modernidade e valorização',
    formUrl: FORMS_LINKS.vilaEma,
    formLabel: 'Tenho Interesse na Vila Ema',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Mobilidade ágil com estações do Monotrilho Linha 15-Prata',
      'Condomínios estilo resort com piscinas, quadras e coworking',
      'Proximidade estratégica da Vila Prudente, Anália Franco e Sapopemba',
      'Comércio aquecido: hipermercados, colégios e academias renomadas',
    ],
    stats: [
      { label: 'Potencial de valorização', value: 'Alto retorno' },
      { label: 'Estrutura de condomínio', value: 'Lazer Resort' },
      { label: 'Acesso rápido', value: 'Monotrilho Prata' },
    ],
    metroStations: ['Estação São Lucas', 'Estação Oratório', 'Estação Camilo Haddad'],
  },
];

export const PROPERTIES: PropertyItem[] = [
  {
    id: 'prop-tatuape-01',
    name: 'Reserva Itapura Tatuapé',
    neighborhoodId: 'tatuape',
    neighborhoodName: 'Tatuapé',
    status: 'Lançamento',
    priceFrom: 'R$ 790.000',
    estimatedInstallment: 'R$ 3.890/mês no período de obras',
    sizeRange: '68m² a 112m²',
    bedrooms: '2 a 3 Dormitórios',
    suites: '1 a 2 Suítes',
    parkingSpots: '1 a 2 Vagas',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    ],
    formUrl: FORMS_LINKS.tatuape,
    addressSummary: 'Rua Itapura, próximo ao Parque CERET',
    features: [
      'Varanda Gourmet com churrasqueira a carvão',
      'Piscina no Rooftop com borda infinita',
      'Academia com design Life Fitness',
      'Ponto de recarga para carro elétrico',
    ],
    tag: 'Destaque Tatuapé',
  },
  {
    id: 'prop-tatuape-02',
    name: 'Alto do Tatuapé Living',
    neighborhoodId: 'tatuape',
    neighborhoodName: 'Tatuapé',
    status: 'Em Obras',
    priceFrom: 'R$ 540.000',
    estimatedInstallment: 'R$ 2.650/mês durante a construção',
    sizeRange: '48m² a 74m²',
    bedrooms: '2 Dormitórios',
    suites: '1 Suíte',
    parkingSpots: '1 Vaga coberta',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80',
    ],
    formUrl: FORMS_LINKS.tatuape,
    addressSummary: 'A 600m do Shopping Metrô Tatuapé',
    features: [
      'Planta aberta integrada',
      'Coworking climatizado e auditório',
      'Pet Place e Beach Tennis',
      'Condições de entrada facilitada',
    ],
    tag: 'Obras Aceleradas',
  },
  {
    id: 'prop-mooca-01',
    name: 'Piazza San Pietro Mooca',
    neighborhoodId: 'mooca',
    neighborhoodName: 'Mooca',
    status: 'Lançamento',
    priceFrom: 'R$ 685.000',
    estimatedInstallment: 'R$ 3.150/mês',
    sizeRange: '58m² a 95m²',
    bedrooms: '2 e 3 Dormitórios',
    suites: '1 Suíte ampla',
    parkingSpots: '1 a 2 Vagas',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80',
    ],
    formUrl: FORMS_LINKS.mooca,
    addressSummary: 'Próximo à Av. Paes de Barros e Mooca Plaza',
    features: [
      'Arquitetura neoclássica com toques modernos',
      'Espaço gourmet com forno de pizza a lenha',
      'Complexo aquático adulto e infantil',
      'Salão de festas privativo decorado',
    ],
    tag: 'Exclusividade Mooca',
  },
  {
    id: 'prop-mooca-02',
    name: 'Il Giardino Juventus Mooca',
    neighborhoodId: 'mooca',
    neighborhoodName: 'Mooca',
    status: 'Pronto para Morar',
    priceFrom: 'R$ 890.000',
    estimatedInstallment: 'Financiamento imediato com todos os bancos',
    sizeRange: '84m² a 128m²',
    bedrooms: '3 Dormitórios',
    suites: '2 Suítes',
    parkingSpots: '2 Vagas demarcadas',
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
    ],
    formUrl: FORMS_LINKS.mooca,
    addressSummary: 'A poucos passos do Clube Atlético Juventus',
    features: [
      'Pronto para morar com documentação 100% aprovada',
      'Terraço panorâmico envidraçado',
      'Depósito privativo no subsolo',
      'Gerador de energia para áreas comuns e elevadores',
    ],
    tag: 'Chaves na Mão',
  },
  {
    id: 'prop-vila-ema-01',
    name: 'Grand Resort Vila Ema',
    neighborhoodId: 'vila-ema',
    neighborhoodName: 'Vila Ema',
    status: 'Lançamento',
    priceFrom: 'R$ 380.000',
    estimatedInstallment: 'R$ 1.790/mês durante a construção',
    sizeRange: '42m² a 66m²',
    bedrooms: '1 e 2 Dormitórios',
    suites: 'Opção com 1 Suíte',
    parkingSpots: 'Opção com ou sem vaga',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    ],
    formUrl: FORMS_LINKS.vilaEma,
    addressSummary: 'Av. Vila Ema, a 300m da Estação São Lucas',
    features: [
      'Lazer estilo resort com mais de 25 itens',
      'Piscina com deck molhado e bar da piscina',
      'Quadra poliesportiva oficial e pista de cooper',
      'Possibilidade de enquadramento com subsídios',
    ],
    tag: 'Melhor Custo-Benefício',
  },
  {
    id: 'prop-vila-ema-02',
    name: 'Horizonte Vila Ema Club',
    neighborhoodId: 'vila-ema',
    neighborhoodName: 'Vila Ema',
    status: 'Em Obras',
    priceFrom: 'R$ 440.000',
    estimatedInstallment: 'R$ 2.100/mês na planta',
    sizeRange: '52m² a 70m²',
    bedrooms: '2 Dormitórios',
    suites: '1 Suíte',
    parkingSpots: '1 Vaga coberta',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
    ],
    formUrl: FORMS_LINKS.vilaEma,
    addressSummary: 'Próximo ao Monotrilho Oratório e Av. Anhaia Mello',
    features: [
      'Varanda com ponto grill',
      'Espaço Pet e Playground lúdico',
      'Mini Market autônomo 24h dentro do condomínio',
      'Bicicletário com tomadas elétricas',
    ],
    tag: 'Sucesso de Vendas',
  },
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: 'Localizações Estratégicas',
    description:
      'Imóveis selecionados próximos às principais linhas de metrô, monotrilho, parques e polos comerciais da Zona Leste de São Paulo.',
    iconName: 'MapPin',
  },
  {
    title: 'Condições Flexíveis de Pagamento',
    description:
      'Entrada parcelada direto com a construtora durante a fase de obras, uso facilitado do FGTS e assessoria de crédito imobiliário gratuita.',
    iconName: 'CreditCard',
  },
  {
    title: 'Lazer Completo de Condomínio-Clube',
    description:
      'Piscinas, espaço gourmet, academias profissionais, coworking, pet care e brinquedoteca sem precisar sair de casa.',
    iconName: 'Sparkles',
  },
  {
    title: 'Alta Valorização Patrimonial',
    description:
      'Tatuapé, Mooca e Vila Ema registram consistentemente índices de valorização do m² superiores à média da capital paulista.',
    iconName: 'TrendingUp',
  },
];

export const FAQS = [
  {
    question: 'Como funciona o botão "Tenho Interesse"?',
    answer:
      'Ao clicar em "Tenho Interesse", você é direcionado para um formulário seguro e rápido do Google Forms. Lá, você preenche suas preferências de metragem, número de dormitórios e faixa de investimento. Um consultor especialista na região selecionada (Tatuapé, Mooca ou Vila Ema) entrará em contato com plantas, tabela de preços e condições exclusivas.',
  },
  {
    question: 'Posso utilizar meu FGTS na compra?',
    answer:
      'Sim! O FGTS pode ser utilizado como parte do valor da entrada em unidades residenciais dentro das regras do SFH (Sistema Financeiro de Habitação) ou na amortização do saldo devedor.',
  },
  {
    question: 'Qual a diferença entre comprar no Tatuapé, Mooca ou Vila Ema?',
    answer:
      'O Tatuapé é ideal para quem busca alto padrão, gastronomia refinada e serviços premium. A Mooca combina a clássica tradição familiar, tranquilidade e conveniência tradicional. A Vila Ema destaca-se pelo forte ritmo de crescimento, modernidade com condomínios-resort e excelente relação custo-benefício com conexão ágil ao metrô.',
  },
  {
    question: 'Existe assessoria para aprovação de crédito bancário?',
    answer:
      'Sim, oferecemos assessoria completa e gratuita para simulação e aprovação de crédito imobiliário junto aos principais bancos (Caixa Econômica, Itaú, Bradesco, Santander e Banco do Brasil), garantindo as melhores taxas de juros do mercado.',
  },
];
