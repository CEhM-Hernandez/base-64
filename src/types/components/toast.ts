export type ToastVariant = 'success' | 'error' | 'warning' | 'info'

export interface ToastProps {
  variant?: ToastVariant
  duration?: number
  class?: string
}

export interface ToastOptions {
  duration?: number
}
