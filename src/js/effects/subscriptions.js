import {addItem, useFetchedData} from '../effects/messages'
import {batch} from '@composi/runtime'

/**
 * @typedef {import('../types').GetState} GetState
 * @typedef {import('../types').Send} Send
 * @typedef {import('../types').State} State
 */
/**
 * @param {GetState} getState
 * @param {Send} send
 */
function handleEnterKey(getState, send) {
  document.addEventListener('keypress', e=> {
    if (e.keyCode === 13) send(addItem())
  })
}

/**
 * @param {GetState} getState
 * @param {Send} send
 */
function getData(getState, send) {
  (async () => {
    const response = await fetch('/src/js/data/state.json')
    /** @type {State} */
    const data = await response.json()
    send(useFetchedData(data))
  })()
}

export const subs = batch(handleEnterKey, getData)
