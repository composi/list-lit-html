import { run, union, batchEffects } from '@composi/runtime'
import {render} from 'lit-html'
import { Title } from './components/title'
import { TodoList} from './components/todo-list'
import {actions} from './effects/actions'
import {subs} from './effects/subscriptions'

// Render title component:
render(Title('World'), document.querySelector('header'))



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
    return actions(state, msg, send)
  },
  /**
   * @param {GetState} getState
   * @param {Send} send
   */
  subscriptions(getState, send) {
    return subs(getState, send)
  },
  /**
   * @param {State} state
   */
  done(state) {

  }
}

run(program)