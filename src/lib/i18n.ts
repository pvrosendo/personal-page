import { i18n } from '@lingui/core'

export { i18n }

export const locales = ['pt-BR', 'en'] as const
export type Locale = (typeof locales)[number]

export const copy = {
  'pt-BR': {
    navAbout: 'Sobre',
    navProjects: 'Projetos',
    developer: 'Software Developer',
    tagline:
      'Desenvolvedor apaixonado por construir soluções robustas e bem projetadas.',
    viewProjects: 'Projetos',
    readAbout: 'Sobre',
    aboutEyebrow: '// SOBRE',
    projectsEyebrow: '// PROJETOS',
    projectsTitle: 'Projetos',
    experience: 'Experiência',
    education: 'Educação',
    skills: 'Competências / Stack',
    languages: 'Idiomas',
    contact: 'Vamos conversar',
    native: 'Nativo',
    advanced: 'Avançado',
    blog: 'Blog',
    footer: 'Construído com cuidado por Paulo Vitor Rosendo.',
    theme: 'Alternar tema',
  },
  en: {
    navAbout: 'About',
    navProjects: 'Projects',
    developer: 'Software Developer',
    tagline:
      'A developer passionate about building robust, well-designed solutions.',
    viewProjects: 'Projects',
    readAbout: 'About',
    aboutEyebrow: '// ABOUT',
    projectsEyebrow: '// PROJECTS',
    projectsTitle: 'Projects',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills / Stack',
    languages: 'Languages',
    contact: "Let's talk",
    native: 'Native',
    advanced: 'Advanced',
    blog: 'Blog',
    footer: 'Built with care by Paulo Vitor Rosendo.',
    theme: 'Toggle theme',
  },
} as const

export function activateLocale(locale: Locale) {
  i18n.load(locale, copy[locale])
  i18n.activate(locale)
  document.documentElement.lang = locale === 'pt-BR' ? 'pt-BR' : 'en'
}

export function getLocale(value: string): Locale {
  return value.toLowerCase() === 'en' ? 'en' : 'pt-BR'
}

activateLocale('pt-BR')
