import type { Locale } from './i18n'

type Localized = Record<Locale, string>

export const profile: Localized = {
  'pt-BR':
    'Minha trajetória combina engenharia de software, sistemas críticos e robótica. Hoje atuo no ecossistema de autenticação e identidade da Globo, desenvolvendo APIs e plataformas internas com Go e React. Antes, trabalhei com sistemas no Grupo Profarma e, na MinervaBots, desenvolvi soluções embarcadas, coordenei projetos e liderei uma equipe de 60 membros.',
  en: "My background combines software engineering, critical systems, and robotics. I currently work on Globo's authentication and identity ecosystem, developing APIs and internal platforms with Go and React. Previously, I worked on systems at Grupo Profarma and, at MinervaBots, developed embedded solutions, coordinated projects, and led a 60-member team.",
}

export const experiences: Array<{
  role?: Localized
  company: string
  period: Localized
  description: Localized
}> = [
  {
    company: 'Globo',
    period: { 'pt-BR': 'ago de 2025 — o momento', en: 'Aug 2025 — present' },
    description: {
      'pt-BR':
        'Atuação no ecossistema de autenticação e identidade da Globo, contribuindo para sistemas críticos e de alto volume com desenvolvimento de APIs e plataformas internas em Go e React, integração com OAuth2/OIDC, Pub/Sub e serviços de nuvem, além de soluções com MongoDB, Redis e Grafana.',
      en: "Working on Globo's authentication and identity ecosystem, contributing to high-volume and business-critical systems through APIs and internal platforms built with Go and React, OAuth2/OIDC integration, Pub/Sub and cloud services, as well as MongoDB, Redis, and Grafana solutions.",
    },
  },
  {
    company: 'Grupo Profarma',
    period: { 'pt-BR': 'fev de 2025 — ago de 2025', en: 'Feb 2025 — Aug 2025' },
    description: {
      'pt-BR':
        'Atuação no time N3 do Grupo Profarma, analisando e depurando sistemas críticos em Java, C# e Angular, além de desenvolver Web APIs, automatizar processos internos e monitorar a performance das rotinas de negócio com Datadog.',
      en: "Working on Grupo Profarma's N3 team, analyzing and debugging critical systems in Java, C#, and Angular while developing Web APIs, automating internal processes, and monitoring business routine performance with Datadog.",
    },
  },
  {
    role: {
      'pt-BR': 'Capitão | Gestor Geral',
      en: 'Captain | General Director',
    },
    company: 'MinervaBots - UFRJ',
    period: { 'pt-BR': 'dez de 2023 — dez de 2024', en: 'Dec 2023 — Dec 2024' },
    description: {
      'pt-BR':
        'Gestão executiva da equipe estudantil com 60 membros, conduzindo planejamento estratégico, definição de KPIs, gestão de riscos, alocação de recursos e relações institucionais. A liderança contribuiu para a conquista de 6 troféus nacionais e do inédito 1º lugar mundial no All Japan Robot Sumo Tournament.',
      en: "Executive management of a 60-member student organization, leading strategic planning, KPI definition, risk management, resource allocation, and institutional relations. This leadership contributed to winning 6 national trophies and the team's unprecedented 1st place worldwide in the All Japan Robot Sumo Tournament.",
    },
  },
  {
    role: {
      'pt-BR': 'Coordenador de programação',
      en: 'Software Project Coordinator',
    },
    company: 'MinervaBots - UFRJ',
    period: { 'pt-BR': 'mai de 2023 — dez de 2023', en: 'May 2023 — Dec 2023' },
    description: {
      'pt-BR':
        'Coordenação do desenvolvimento de software em mais de 10 projetos técnicos de sistemas robóticos, com planejamento, revisão de código e otimização de performance, além da padronização do ciclo de vida da equipe com Scrumban e GitFlow.',
      en: "Coordinated software development across more than 10 technical robotic systems projects, covering planning, code review, and performance optimization while standardizing the team's lifecycle with Scrumban and GitFlow.",
    },
  },
  {
    role: {
      'pt-BR': 'Eletrônico e Programador',
      en: 'Electronics and Programmer',
    },
    company: 'MinervaBots - UFRJ',
    period: { 'pt-BR': 'nov de 2022 — mai de 2023', en: 'Nov 2022 — May 2023' },
    description: {
      'pt-BR':
        'Desenvolvimento de projetos robóticos para competição, incluindo confecção de placas eletrônicas, integração de sensores e software de locomoção e sensoriamento com sistemas embarcados como ESP32 e Jetson Nano. Também atuei na evolução de uma aplicação Android em Flutter e WebSockets para telemetria em tempo real.',
      en: 'Developed robotic projects for competition, including electronic board fabrication, sensor integration, and locomotion and sensing software using embedded systems such as ESP32 and Jetson Nano. Also contributed to an Android application built with Flutter and WebSockets for real-time telemetry.',
    },
  },
  {
    role: {
      'pt-BR': 'Trainee Eletrônico e Programador',
      en: 'Electronics and Programmer Trainee',
    },
    company: 'MinervaBots - UFRJ',
    period: { 'pt-BR': 'set de 2022 — nov de 2022', en: 'Sep 2022 — Nov 2022' },
    description: {
      'pt-BR':
        'Formação inicial em eletrônica e programação aplicada ao desenvolvimento de robôs para competição.',
      en: 'Initial training in electronics and programming applied to the development of competition robots.',
    },
  },
]

export const education = [
  {
    role: {
      'pt-BR': 'Tecnólogo · Análise e Desenvolvimento de Sistemas',
      en: 'Technology Degree · Systems Analysis and Development',
    },
    company: 'Descomplica Faculdade Digital',
    period: { 'pt-BR': 'ago de 2024 — dez de 2026', en: 'Aug 2024 — Dec 2026' },
  },
  {
    role: {
      'pt-BR': 'Bacharelado · Engenharia Eletrônica e de Computação',
      en: "Bachelor's Degree · Electronic and Computer Engineering",
    },
    company: 'UFRJ - Universidade Federal do Rio de Janeiro',
    period: { 'pt-BR': 'mar de 2020 — dez de 2024', en: 'Mar 2020 — Dec 2024' },
    status: {
      'pt-BR': 'Nível de formação: Pausado',
      en: 'Education status: Paused',
    },
  },
]

export const skills: Array<{ category: Localized; values: string }> = [
  {
    category: { 'pt-BR': 'Linguagens', en: 'Languages' },
    values: 'Go · Java · TypeScript · C++',
  },
  {
    category: { 'pt-BR': 'Front-end', en: 'Front-end' },
    values: 'React · Next.js · Tanstack · Tailwind',
  },
  {
    category: { 'pt-BR': 'Back-end', en: 'Back-end' },
    values: 'Echo · Spring · SQL · NoSQL',
  },
  {
    category: { 'pt-BR': 'Ferramentas', en: 'Tools' },
    values: 'Git · Linux · Docker · Grafana · GCP',
  },
  {
    category: { 'pt-BR': 'Embarcados', en: 'Embedded' },
    values: 'ESP32 · Arduino · Jetson Nano',
  },
]

export const projects = [
  {
    title: 'O Códex',
    description: {
      'pt-BR': 'Blog técnico independente sobre engenharia de software.',
      en: 'Independent technical blog about software engineering.',
    },
    stack: ['React', 'TypeScript', 'Obsidian'],
    badge: true,
    links: [{ label: 'site', href: 'https://example.com' }],
  },
  {
    title: 'Project Alpha',
    description: {
      'pt-BR':
        'Lorem ipsum dolor sit amet, uma plataforma feita para simplificar fluxos.',
      en: 'Lorem ipsum dolor sit amet, a platform built to simplify workflows.',
    },
    stack: ['React', 'Go', 'PostgreSQL'],
    links: [{ label: 'GitHub', href: 'https://github.com/' }],
  },
  {
    title: 'Project Beta',
    description: {
      'pt-BR': 'Ferramenta experimental para visualizar dados em tempo real.',
      en: 'Experimental tool for visualizing real-time data.',
    },
    stack: ['TypeScript', 'WebSocket'],
    links: [{ label: 'site', href: 'https://example.com' }],
  },
  {
    title: 'Project Gamma',
    description: {
      'pt-BR': 'Aplicação open source para organizar conhecimento pessoal.',
      en: 'Open source application for organizing personal knowledge.',
    },
    stack: ['React', 'Node.js', 'SQLite'],
    links: [{ label: 'GitHub', href: 'https://github.com/' }],
  },
]
