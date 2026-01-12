import type { Translations } from '@/lang'

export default {
  title: 'Base64 Encoder & Decoder',
  description: 'A simple tool to encode and decode Base64 strings online.',
  content: {
    swap: 'Swap languages',
    naturalLanguage: 'Natural Language',
    base64: 'Base64',
    encodeError: 'Error encoding to Base64',
    decodeError: 'Error decoding from Base64',
    copyToClipboard: 'Copy to clipboard',
    successCopy: 'Text copied to clipboard!',
    clear: 'Clear',
    inputPlaceholder: 'Type or paste your text here...',
    outputPlaceholder: 'The result will appear here...'
  },
  footer: {
    tagline: 'Fast Base64 encoding/decoding for your daily toolkit.',
    crafted: 'Designed and maintained by CEhM',
    ctaPortfolio: 'Visit cehm.dev',
    ctaContact: 'Say hi on WhatsApp',
    copy: '© {year} CEhM.'
  }
} satisfies Translations
