export const SOCIAL_ICONS = ['LinkedIn', 'GitHub', 'WhatsApp', 'Globe'] as const

export type SocialIconName = (typeof SOCIAL_ICONS)[number]
