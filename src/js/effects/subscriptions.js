import {AddItem, UseFetchedData} from '../effects/messages'
import { batch } from '@composi/runtime'

/**
 * @typedef {import('../types').GetState} GetState
 * @typedef {import('../types').Send} Send
 * @typedef {import('../types').State} State
 */
/**
 * @param {Send} send
 */
function handleEnterKey(send) {
  document.addEventListener('keypress', e=> {
    if (e.keyCode === 13) send(AddItem)
  })
}

/**
 * @param {Send} send
 */
function getData(send) {
  (async () => {
    const response = await fetch('/src/js/data/state.json')
    /** @type {State} */
    const data = await response.json()
    send(UseFetchedData, data)
  })()
}

export const subs = batch(handleEnterKey, getData)
