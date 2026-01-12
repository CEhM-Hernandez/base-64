import type { ToastOptions, ToastVariant } from '@/types/components/toast'

const VARIANT_CLASSES: Record<ToastVariant, string> = {
  success: 'bg-success text-success-foreground border-success',
  error: 'bg-destructive text-destructive-foreground border-destructive',
  warning: 'bg-warning text-warning-foreground border-warning',
  info: 'bg-primary text-primary-foreground border-primary'
}

const BASE_CLASSES = [
  'fixed bottom-4 right-4 z-50',
  'flex items-center gap-3',
  'px-4 py-3 rounded-lg',
  'text-sm font-medium',
  'shadow-lg border',
  'transform transition-all duration-300 ease-out'
].join(' ')

let currentTimeout: ReturnType<typeof setTimeout> | null = null

function getContainer(): HTMLElement | null {
  return document.getElementById('toast-container')
}

function getIcon(variant: ToastVariant): Node | null {
  const template = document.getElementById('toast-icons') as HTMLTemplateElement | null
  if (!template) return null

  const iconSpan = template.content.querySelector(`[data-icon="${variant}"]`)
  return iconSpan ? iconSpan.cloneNode(true) : null
}

function showToast(message: string, variant: ToastVariant, options: ToastOptions = {}) {
  const { duration = 3000 } = options

  // Limpiar timeout anterior si existe
  if (currentTimeout) {
    clearTimeout(currentTimeout)
    currentTimeout = null
  }

  const container = getContainer()

  if (!container) {
    console.warn(
      'Toast container not found. Make sure to include the Toast component in your layout.'
    )
    return
  }

  const iconElement = container.querySelector('#toast-icon')
  const messageElement = container.querySelector('#toast-message')
  const closeButton = container.querySelector('#toast-close')

  // Actualizar clases del contenedor
  container.className = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} translate-y-full opacity-0`

  // Actualizar ícono clonando del template
  if (iconElement) {
    iconElement.innerHTML = ''
    const iconNode = getIcon(variant)
    if (iconNode) {
      iconElement.appendChild(iconNode)
    }
  }

  if (messageElement) {
    messageElement.textContent = message
  }

  // Mostrar toast con animación
  requestAnimationFrame(() => {
    container.classList.remove('translate-y-full', 'opacity-0')
    container.classList.add('translate-y-0', 'opacity-100')
  })

  // Configurar cierre automático
  if (duration > 0) {
    currentTimeout = setTimeout(() => {
      hideToast()
    }, duration)
  }

  // Configurar botón de cierre
  closeButton?.removeEventListener('click', hideToast)
  closeButton?.addEventListener('click', hideToast)
}

function hideToast() {
  const container = document.getElementById('toast-container')

  if (container) {
    container.classList.remove('translate-y-0', 'opacity-100')
    container.classList.add('translate-y-full', 'opacity-0')
  }

  if (currentTimeout) {
    clearTimeout(currentTimeout)
    currentTimeout = null
  }
}

export const toast = {
  success: (message: string, options?: ToastOptions) => showToast(message, 'success', options),
  error: (message: string, options?: ToastOptions) => showToast(message, 'error', options),
  warning: (message: string, options?: ToastOptions) => showToast(message, 'warning', options),
  info: (message: string, options?: ToastOptions) => showToast(message, 'info', options),
  hide: hideToast
}
