const encodeBase64 = (value: string, errStr: string): string => {
  try {
    const encoder = new TextEncoder()
    const bytes = encoder.encode(value)
    const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join('')
    return btoa(binary)
  } catch (e) {
    return errStr
  }
}

export { encodeBase64 }
