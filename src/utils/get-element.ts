const $ = (selector: string): HTMLElement | null => {
  return document.querySelector(selector)
}

const $$ = (selector: string): NodeListOf<HTMLElement> => {
  return document.querySelectorAll(selector)
}

export { $, $$ }
