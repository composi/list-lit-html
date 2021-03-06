import { run } from '@composi/runtime'
import {clone} from '@composi/clone'
import { render } from 'lit-html'
import { Title } from './components/title'
import { TodoList } from './components/todo-list'
import { actions } from './effects/actions'
import { subs } from './effects/subscriptions'

// Render title component:
render(Title('Todo List'), document.querySelector('header'))



// Import global types:
/**
 * @typedef {import('./types').Message} Message
 * @typedef {import('./types').Send} Send
 * @typedef {import('./types').Program} Program
 * @typedef {import('./types').State} State
 * @typedef {import('./types').GetState} GetState
 */

/**
 * Default program for `run` function.
 * @type {Program}
 */
const program = {
  init() {

  },
  /**
   * @param {State} state
   * @param {Send} send
   */
  view(state, send) {
    return state && render(TodoList({state, send}), document.querySelector('section'))
  },
  /**
   * @param {State} state
   * @param {Message} msg
   * @param {Send} send
   */
  update(state, msg, send) {
    const prevState = clone(state)
    return actions(prevState, msg, send)
  },
  /**
   * @param {Send} send
   */
  subscriptions(send) {
    return subs(send)
  }
}

run(program)
