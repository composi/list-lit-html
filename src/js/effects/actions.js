import { Msg, deleteItem } from './messages'

/**
 * @param {import('../types').State} state
 * @param {import('../types').Message} msg
 * @param {import('../types').Send} send
 */
export function actions(state, msg, send) {
  const prevState = {...state}

  return Msg.match(msg, {
    updateInputValue: (value) => {
      prevState.inputValue = value
      return prevState
    },
    addItem: () => {
      if (prevState.inputValue) {
        prevState.items.push({
          key: prevState.newKey++,
          value: prevState.inputValue,
          deletable: false
        })
        prevState.inputValue = ''
        document.querySelector('input').focus()
      } else {
        alert('Please provide a value before adding.')
      }
      return prevState
    },
    makeDeletable: (key) => {
      prevState.items = prevState.items.map(item => {
        if (item.key === key) {
          item.deletable = true
          setTimeout(() => {
            send(deleteItem(key))
          }, 1000)
        }
        return item
      })
      return prevState
    },
    deleteItem: (key) => {
      prevState.items = prevState.items.filter(item => item.key !== key)
      return prevState
    },
    useFetchedData: data => data
  })
}