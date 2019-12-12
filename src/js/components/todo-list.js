import {html} from 'lit-html'
import {repeat} from 'lit-html/directives/repeat'
import { UpdateInputValue, AddItem, MakeDeletable } from '../effects/messages'
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
      <input @input=${e => send(UpdateInputValue, e.target.value)} .value="${state.inputValue}" type="text"/>
      <button @click=${() => send(AddItem)} class='add-item'>Add</button>
    </p>
    <ul>
      ${repeat(state.items, item => item.key, item => {
        const classObj = {
          "new-item": true,
          "remove-item": item.deletable
        }
        return html`
          <li class=${classMap(classObj)}>
            <span>${item.value}</span>
            <button  @click=${() => send(MakeDeletable, item.key)} class='delete-item'>X</button>
          </li>
        `})
      }
    </ul>
  </div>
`
