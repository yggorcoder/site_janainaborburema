/**
 * ═══════════════════════════════════════════════════════════════
 *  CONFIGURAÇÃO DO CLIENTE — Espaço Janaína Borburema
 * ═══════════════════════════════════════════════════════════════
 */

export const config = {
  // ── Identidade ──────────────────────────────────────────────
  name: "Espaço Janaína Borburema",
  nameParts: { first: "Espaço", highlight: "Janaína Borburema" },

  siteUrl: "https://www.espacojanainaborburema.com.br",
  domainApex: "espacojanainaborburema.com.br",

  // ── Contato ─────────────────────────────────────────────────
  phone: {
    whatsapp: "5584991135533",
    display: "(84) 99113-5533",
  },
  whatsapp: {
    defaultMessage:
      "Olá! Vi o site do Espaço Janaína Borburema e gostaria de agendar uma aula ou consulta.",
    quoteMessage: (service) =>
      `Olá! Tenho interesse em ${service} no Espaço Janaína Borburema. Gostaria de agendar.`,
  },

  // ── Redes sociais ───────────────────────────────────────────
  social: {
    instagram: {
      url: "https://instagram.com/espacojb_oficial",
      handle: "@espacojb_oficial",
    },
  },

  // ── Localização ─────────────────────────────────────────────
  location: {
    street: "R. Praia de Areia Branca, 8900",
    neighborhood: "Ponta Negra",
    city: "Natal",
    state: "RN",
    badge: "Ponta Negra, Natal — RN",
    mapsQuery:
      "R. Praia de Areia Branca, 8900 - Ponta Negra, Natal - RN, 59094-450",
  },

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title:
      "Espaço Janaina Borburema - Pilates e Fisioterapia Integrativa | Natal — RN",
    description:
      "Equipe de fisioterapia em Ponta Negra, Natal — RN, especializada em Pilates Clínico e Fisioterapia Integrativa. Até 4 alunos por hora, aulas de 50 minutos com fisioterapeutas. Agende pelo WhatsApp.",
    ogTitle:
      "Espaço Janaina Borburema - Pilates e Fisioterapia Integrativa",
    ogDescription:
      "Ciência, precisão e cuidado humanizado para devolver autonomia, segurança e qualidade de vida através do movimento.",
    twitterDescription:
      "Pilates Clínico e Fisioterapia Integrativa em Ponta Negra, Natal. Aulas com fisioterapeutas, até 4 alunos por hora.",
  },

  // ── Hero ────────────────────────────────────────────────────
  hero: {
    title: "Espaço Janaina Borburema - Pilates e Fisioterapia Integrativa",
    titleGradient: "",
    titleRest: "",
    subtitle:
      "Somos uma equipe de fisioterapia especializada em Pilates Clínico e Fisioterapia Integrativa. Unimos ciência, precisão e cuidado humanizado para devolver autonomia, segurança e qualidade de vida através do movimento.",
    image: "/images/hero.jpg",
    imageAlt: "Aula de pilates em studio moderno e acolhedor",
    ctaPrimary: "Agendar pelo WhatsApp",
    ctaSecondary: "Conhecer Serviços",
  },

  // ── Sobre ───────────────────────────────────────────────────
  about: {
    text: "Somos uma equipe de fisioterapia especializada em Pilates Clínico e Fisioterapia Integrativa. Unimos ciência, precisão e cuidado humanizado para devolver autonomia, segurança e qualidade de vida através do movimento. O Pilates trabalha força, flexibilidade, controle, mobilidade e equilíbrio, promovendo consciência corporal e uma vida funcional, com menos dores. Nossa metodologia prioriza a excelência: atendimento limitado a até 4 alunos por hora, aulas de 50 minutos no solo e aparelhos, sempre conduzidas por fisioterapeutas, garantindo atenção individual e movimentos precisos. O espaço é liderado por Janaína Borburema, fisioterapeuta e osteopata, com mais de 15 anos de experiência e mais de 1.000 vidas transformadas por meio do movimento.",
    highlights: [
      {
        icon: "Stethoscope",
        title: "Pilates Clínico e Fisioterapia Integrativa",
        description:
          "Equipe de fisioterapia especializada, unindo ciência, precisão e cuidado humanizado em cada atendimento.",
      },
      {
        icon: "Users",
        title: "Metodologia de Excelência",
        description:
          "Até 4 alunos por hora, aulas de 50 minutos no solo e aparelhos, sempre conduzidas por fisioterapeutas.",
      },
      {
        icon: "Heart",
        title: "Atenção Individual",
        description:
          "Movimentos precisos e acompanhamento próximo para devolver autonomia, segurança e qualidade de vida.",
      },
      {
        icon: "Activity",
        title: "Pilates Funcional",
        description:
          "Trabalha força, flexibilidade, controle, mobilidade e equilíbrio para uma vida com menos dores.",
      },
      {
        icon: "HelpCircle",
        title: "Pilates é só alongamento?",
        description:
          "Não. O método desenvolve força, flexibilidade, controle, mobilidade e equilíbrio, promovendo consciência corporal e funcionalidade.",
      },
    ],
  },

  // ── Serviços ────────────────────────────────────────────────
  services: {
    introText:
      "O Pilates trabalha força, flexibilidade, controle, mobilidade e equilíbrio, promovendo consciência corporal e uma vida funcional, com menos dores — sempre com a condução de fisioterapeutas.",
    sectionTitle: "Serviços e",
    sectionTitleAccent: "Tratamentos",
    mainSectionTitle: "Principais",
    mainSectionTitleAccent: "Serviços",
    serviceCta: "Agendar pelo WhatsApp",
    main: [
      {
        title: "Pilates Clínico",
        description:
          "Abordagem terapêutica conduzida por fisioterapeutas para reabilitação, funcionalidade e alívio de dores com segurança e precisão.",
        category: "Clínico",
        image: "/images/pilates-2.jpg",
        alt: "Pilates clínico com acompanhamento de fisioterapeuta",
      },
      {
        title: "Fisioterapia Integrativa",
        description:
          "Cuidado que une ciência e humanização para devolver autonomia, segurança e qualidade de vida através do movimento.",
        category: "Integrativa",
        image: "/images/pilates-3.jpg",
        alt: "Fisioterapia integrativa no espaço",
      },
      {
        title: "Pilates no Solo e Aparelhos",
        description:
          "Aulas de 50 minutos, com até 4 alunos por hora, garantindo atenção individual e movimentos precisos em cada sessão.",
        category: "Pilates",
        image: "/images/pilates-1.jpg",
        alt: "Aula de pilates no solo e aparelhos",
      },
    ],
    detailing: {
      title: "Benefícios do",
      titleAccent: "Pilates",
      subtitle:
        "Força, flexibilidade, controle, mobilidade e equilíbrio para uma vida funcional com menos dores.",
      items: [
        {
          title: "Força",
          description: "Fortalecimento muscular com segurança e controle em cada movimento.",
          icon: "Dumbbell",
        },
        {
          title: "Flexibilidade",
          description: "Mais amplitude de movimento e liberdade no corpo no dia a dia.",
          icon: "Move",
        },
        {
          title: "Controle e Equilíbrio",
          description: "Movimentos precisos que desenvolvem estabilidade e consciência corporal.",
          icon: "PersonStanding",
        },
        {
          title: "Mobilidade",
          description: "Recuperação de movimentos essenciais para uma vida mais autônoma.",
          icon: "Activity",
        },
        {
          title: "Menos Dores",
          description: "Vida funcional com redução de dores através do movimento correto.",
          icon: "Heart",
        },
        {
          title: "Qualidade de Vida",
          description: "Autonomia, segurança e bem-estar promovidos pela prática regular.",
          icon: "Sparkles",
        },
      ],
    },
    footerList: [
      "Pilates Clínico",
      "Fisioterapia Integrativa",
      "Pilates no Solo e Aparelhos",
    ],
  },

  // ── Depoimentos ─────────────────────────────────────────────
  testimonials: {
    title: "Depoimentos de",
    titleAccent: "Clientes",
    subtitle:
      "Avaliações reais de quem já passou pelo Espaço Janaína Borburema no Google.",
    google: {
      url: "https://www.google.com/maps/place/Espa%C3%A7o+Janaina+Borburema+-+Pilates+e+Fisioterapia+Integrativa/@-5.8706783,-35.1871769,897m/data=!3m2!1e3!4b1!4m6!3m5!1s0x7b2ff2e2bcccbab:0x3fb8978d38f84a31!8m2!3d-5.8706783!4d-35.1845966!16s%2Fg%2F11g8878j_h",
      searchQuery:
        "Espaço Janaina Borburema Pilates e Fisioterapia Integrativa Ponta Negra Natal RN",
      latitude: -5.8706783,
      longitude: -35.1845966,
      rating: 5,
      reviewCount: 16,
      cta: "Ver todas as avaliações no Google",
    },
    items: [],
  },

  // ── Galeria ─────────────────────────────────────────────────
  gallery: {
    title: "Nosso",
    titleAccent: "Espaço",
    subtitle:
      "Um espaço em Ponta Negra com aulas de até 50 minutos, no solo e aparelhos, para até 4 alunos por hora — sempre com fisioterapeutas.",
    images: [
      {
        src: "/images/gallery/galeria-1.jpeg",
        alt: "Sala de pilates com espelhos arqueados e equipamentos MetaLife",
      },
      {
        src: "/images/gallery/galeria-2.jpeg",
        alt: "Vista ampla do studio com aparelhos de pilates",
      },
      {
        src: "/images/gallery/galeria-3.jpeg",
        alt: "Aparelhos Cadillac e prateleira decorativa no espaço",
      },
      {
        src: "/images/gallery/galeria-4.jpeg",
        alt: "Equipamentos de pilates e ambiente acolhedor",
      },
      {
        src: "/images/gallery/galeria-5.jpeg",
        alt: "Studio com reformers, barreis e iluminação premium",
      },
    ],
  },

  // ── Contato ─────────────────────────────────────────────────
  contact: {
    badge: "Atendimento Humanizado",
    title: "Pronto(a) para dar o primeiro passo?",
    text: "Devolva autonomia, segurança e qualidade de vida através do movimento. Entre em contato pelo WhatsApp e agende sua aula com nossa equipe de fisioterapeutas.",
    cta: "Chamar no WhatsApp",
    image: "/images/pilates-3.jpg",
    imageAlt: "Ambiente acolhedor do studio de pilates",
  },

  // ── Rodapé ──────────────────────────────────────────────────
  footer: {
    tagline:
      "Pilates Clínico e Fisioterapia Integrativa com ciência, precisão e cuidado humanizado em Ponta Negra.",
    legalLine: "Natal, RN — Pilates Clínico e Fisioterapia Integrativa",
  },

  // ── Navegação ───────────────────────────────────────────────
  nav: [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#galeria", label: "Galeria" },
    { href: "#contato", label: "Contato" },
  ],

  // ── Tema (cores) — também edite src/index.css se necessário ─
  theme: {
    accent: "#D97A43",
    accentHover: "#BF5630",
    accentShine: "#D9B596",
  },
};
