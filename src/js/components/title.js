import { html } from 'lit-html'

/**
 * @param {string} greeting
 * @returns {import('../types').VNode} VNode
 */
export function Title(greeting) {
  return html`
    <nav>
      <h1 class="header--main">Hello, ${greeting}!</h1>
    </nav>
  `
}
