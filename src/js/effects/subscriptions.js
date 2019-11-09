import {addItem, useFetchedData} from '../effects/messages'
import {batchEffects} from '@composi/runtime'

function handleEnterKey(getState, send) {
  document.addEventListener('keypress', e=> {
    if (e.keyCode === 13) send(addItem())
  })
}

function getData(getState, send) {
  (async () => {
    const response = await fetch('/src/js/data/state.json')
    const data = await response.json()
    send(useFetchedData(data))
  })()
}

export const subs = batchEffects(handleEnterKey, getData)