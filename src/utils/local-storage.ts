const setLocalStorageItem = (name: string, value: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(name.toString(), value.toString())
  }
}

const getLocalStorageItem = (name: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(name.toString())
  }
  return null
}

export { setLocalStorageItem, getLocalStorageItem }
