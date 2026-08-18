import type { Locale } from './i18n'

type Localized = Record<Locale, string>

export const profile: Localized = {
  'pt-BR':
    'Minha trajetória combina engenharia de software, curiosidade técnica e atenção aos detalhes que tornam produtos melhores.',
  en: 'My path combines software engineering, technical curiosity, and attention to the details that make products better.',
}

export const experiences = [
  {
    role: { 'pt-BR': 'Software Developer', en: 'Software Developer' },
    company: 'Empresa Placeholder',
    period: '2023 — atual',
    description: {
      'pt-BR':
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Construção de produtos digitais com foco em qualidade.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Building digital products with a focus on quality.',
    },
  },
  {
    role: { 'pt-BR': 'Desenvolvedor Full-stack', en: 'Full-stack Developer' },
    company: 'Studio Placeholder',
    period: '2021 — 2023',
    description: {
      'pt-BR':
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      en: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
]

export const education = [
  {
    role: { 'pt-BR': 'Ciência da Computação', en: 'Computer Science' },
    company: 'Instituição Placeholder',
    period: '2018 — 2022',
  },
]

export const skills = [
  ['Linguagens', 'Go · Java · TypeScript · C++'],
  ['Front-end', 'React · Angular · Tailwind'],
  ['Back-end', 'Echo · Spring · SQL · NoSQL · Docker'],
  ['Embarcados', 'ESP32 · Arduino · Jetson Nano'],
  ['Ferramentas', 'Git · Linux · CI/CD · AWS'],
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
