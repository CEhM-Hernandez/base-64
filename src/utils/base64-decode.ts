const decodeBase64 = (value: string, errStr: string): string => {
  try {
    const binary = atob(value)
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
    const decoder = new TextDecoder('utf-8')
    return decoder.decode(bytes)
  } catch (e) {
    return errStr
  }
}

export { decodeBase64 }
