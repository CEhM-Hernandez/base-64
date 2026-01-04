type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'destructive'
  size?: 'sm' | 'md' | 'lg' | 'icon'
} & astroHTML.JSX.ButtonHTMLAttributes

export type { ButtonProps }
