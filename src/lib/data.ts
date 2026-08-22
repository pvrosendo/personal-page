import type { Locale } from './i18n'

type Localized = Record<Locale, string>
type LocalizedList = Record<Locale, string[]>

export const profile: Localized = {
  'pt-BR':
    'Minha trajetória combina engenharia de software, curiosidade técnica e atenção aos detalhes que tornam produtos melhores.',
  en: 'My path combines software engineering, technical curiosity, and attention to the details that make products better.',
}

export const experiences: Array<{
  role?: Localized
  company: string
  period: string
  description: LocalizedList
}> = [
  {
    company: 'Globo',
    period: 'ago de 2025 — o momento',
    description: {
      'pt-BR': [
        'Atuando no ecossistema de autenticação e identidade da Globo, contribuindo para sistemas de alto volume e críticos para o negócio durante todo o seu ciclo de vida.',
        'Desenvolvimento e integração de APIs e plataformas internas utilizando Go, React, OAuth2/OIDC, Docker e Google Cloud Pub/Sub.',
        'Trabalho com bancos NoSQL, soluções de cache e comunicação assíncrona utilizando MongoDB e Redis.',
        'Suporte à manutenção e investigação de problemas por meio de ferramentas de observabilidade como Grafana, além de atuação em refatorações, testes, migrações e documentação técnica.',
      ],
      en: [
        "Working on Globo's authentication and identity ecosystem, contributing to high-volume and business-critical services throughout their lifecycle.",
        'Developing and integrating APIs and internal platforms using Go, React, OAuth2/OIDC, Docker, and Google Cloud Pub/Sub.',
        'Working with NoSQL databases, caching solutions, and asynchronous communication using MongoDB and Redis.',
        'Supporting system maintenance and troubleshooting through observability tools such as Grafana, while contributing to refactoring, testing, migrations, and technical documentation.',
      ],
    },
  },
  {
    company: 'Grupo Profarma',
    period: 'fev de 2025 — ago de 2025',
    description: {
      'pt-BR': [
        'Atuação no time N3, realizando análise e debugging de sistemas críticos em Java (Spring Boot), C# (.NET) e Angular.',
        'Desenvolvimento de Web APIs e automações de processos internos, reduzindo o esforço manual.',
        'Monitoramento e análise de performance utilizando Datadog.',
      ],
      en: [
        'Working in the N3 team, performing analysis and debugging of critical systems in Java (Spring Boot), C# (.NET), and Angular.',
        "Development of Web APIs and automation of internal processes, reducing the team's manual effort.",
        'Monitoring and performance analysis using Datadog, ensuring the health of retail business routines.',
      ],
    },
  },
  {
    role: {
      'pt-BR': 'Capitão | Gestor Geral',
      en: 'Captain | General Director',
    },
    company: 'MinervaBots - UFRJ',
    period: 'dez de 2023 — dez de 2024',
    description: {
      'pt-BR': [
        'Gestão executiva da equipe com 60 membros, liderando o planejamento estratégico, definição de KPIs, gestão de riscos e alocação de recursos.',
        'Condução de relações institucionais e captação de parcerias estratégicas no ecossistema corporativo e acadêmico.',
        'Liderança na conquista de 6 troféus nacionais e no inédito 1º lugar mundial no All Japan Robot Sumo Tournament na história da equipe.',
      ],
      en: [
        'Executive management of a student organization with 60 members, leading strategic planning, KPI definition, risk management, and resource allocation.',
        'Management of institutional relations and acquisition of strategic partnerships in the corporate and academic ecosystem.',
        "High-performance leadership, culminating in winning 6 national trophies and the unprecedented 1st place worldwide in the All Japan Robot Sumo Tournament in the team's history.",
      ],
    },
  },
  {
    role: {
      'pt-BR': 'Coordenador de programação',
      en: 'Software Project Coordinator',
    },
    company: 'MinervaBots - UFRJ',
    period: 'mai de 2023 — dez de 2023',
    description: {
      'pt-BR': [
        'Padronização do ciclo de vida de desenvolvimento de software de toda a equipe com a adoção oficial das metodologias Scrumban e GitFlow.',
        'Planejamento, revisão de código e otimização de performance em mais de 10 projetos técnicos de sistemas robóticos.',
      ],
      en: [
        "Standardization of the entire team's software development lifecycle through the official adoption of Scrumban and GitFlow methodologies.",
        'Planning, code review, and performance optimization in over 10 technical robotic systems projects.',
      ],
    },
  },
  {
    role: {
      'pt-BR': 'Eletrônico e Programador',
      en: 'Electronics and Programmer',
    },
    company: 'MinervaBots - UFRJ',
    period: 'nov de 2022 — mai de 2023',
    description: {
      'pt-BR': [
        'Desenvolvimento de sistemas para análise de dados integrado a embarcados (Jetson Nano e ESP32) com comunicação via Wi-Fi e Bluetooth.',
        'Refatoração de aplicação mobile Android utilizando Flutter e WebSockets para coleta de dados e telemetria de robôs em tempo real.',
      ],
      en: [
        'Development of systems for data analysis integrated with embedded systems (Jetson Nano and ESP32) with communication via Wi-Fi and Bluetooth.',
        'Refactoring of an Android mobile application using Flutter and WebSockets for data collection and real-time robot telemetry.',
      ],
    },
  },
  {
    role: {
      'pt-BR': 'Trainee Eletrônico e Programador',
      en: 'Electronics and Programmer Trainee',
    },
    company: 'MinervaBots - UFRJ',
    period: 'set de 2022 — nov de 2022',
    description: { 'pt-BR': [], en: [] },
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
      'pt-BR':
        'Bacharelado · Engenharia Eletrônica e de Computação',
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

export const skills = [
  ['Linguagens', 'Go · Java · TypeScript · C++'],
  ['Front-end', 'React · Next.js · Tanstack · Tailwind'],
  ['Back-end', 'Echo · Spring · SQL · NoSQL'],
  ['Tools', 'Git · Linux · Docker · Grafana · GCP'],
  ['Embarcados', 'ESP32 · Arduino · Jetson Nano'],
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
