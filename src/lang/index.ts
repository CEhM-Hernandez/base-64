import es from './es'
import en from './en'

export const languages = {
  es: { label: 'Español', flag: '🇪🇸' },
  en: { label: 'English', flag: '🇺🇸' }
}

export const translations = { es, en }

export type Language = keyof typeof languages
export type Translations = typeof es

export const defaultLang: Language = 'es'

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/')
  if (lang in languages) return lang as Language
  return defaultLang
}

export function useTranslations(lang: Language): Translations {
  return translations[lang]
}
