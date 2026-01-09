import type { SocialIconName } from '@/types/components/social-icon'

interface Social {
  name: string
  url: string
  icon: SocialIconName
  textColor: string
  fillColor: string
  bgColor: string
}

const SOCIALS: Social[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/eduardo-hernandez-munevar/',
    icon: 'LinkedIn',
    textColor: '',
    fillColor: 'var(--color-linkedin)',
    bgColor: '#ffffff'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/CEhM-Hernandez/',
    icon: 'GitHub',
    textColor: '',
    fillColor: 'var(--color-github)',
    bgColor: '#ffffff'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/573194103338',
    icon: 'WhatsApp',
    textColor: '',
    fillColor: 'var(--color-whatsapp)',
    bgColor: '#ffffff'
  },
  {
    name: 'Portfolio',
    url: 'https://cehm.dev/',
    icon: 'Globe',
    textColor: 'var(--color-accent)',
    fillColor: '#e0f2fe',
    bgColor: '#e0f2fe'
  }
]

export { SOCIALS }
export type { Social }
