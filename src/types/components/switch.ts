import type { HTMLAttributes } from 'astro/types'

export interface SwitchProps extends HTMLAttributes<'input'> {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  checked?: boolean
}
