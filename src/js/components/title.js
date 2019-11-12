import { html } from 'lit-html'

/**
 * @param {string} greeting
 * @return {import('lit-html').TemplateResult} TemplateResult
 */
export function Title(greeting) {
  return html`
    <nav>
      <h1 class="header--main">Composi ${greeting}</h1>
    </nav>
  `
}
