import { html } from 'lit-html'
import { updateInputValue, addItem, makeDeletable } from '../effects/messages'
import { classMap } from 'lit-html/directives/class-map.js'
/**
 * @typedef {import('../types').State} State
 * @typedef {import('../types').Send} Send
 */
/**
 * @param {{state: State, send: Send}} props
 * @return {import('lit-html').TemplateResult} TemplateResult
 */
export const TodoList = ({state, send}) =>  html`
  <div>
    <p class="form">
      <input @input=${e => send(updateInputValue, e.target.value)} .value="${state.inputValue}" type="text"/>
      <button @click=${() => send(addItem)} class='add-item'>Add</button>
    </p>
    <ul>
      ${
        state.items.map(item => {
          const classObj = {
            "new-item": true,
            "remove-item": item.deletable
          }
          return html`
          <li key=${item.key} class=${classMap(classObj)}>
            <span>${item.value}</span>
            <button @click=${() => send(makeDeletable, item.key)} class='delete-item'>X</button>
          </li>
        `
        })
      }
    </ul>
  </div>
`
