import { toast } from '@/utils/toast'

const copyToClipboard = async (
  text: string,
  successMessage = '¡Texto copiado al portapapeles!'
) => {
  try {
    await navigator.clipboard.writeText(text)
    toast.success(successMessage)
  } catch (error) {
    console.error('Failed to copy text: ', error)
    toast.error('Error al copiar el texto')
  }
}

export { copyToClipboard }
