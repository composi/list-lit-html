import { Msg, deleteItem } from './messages'

/**
 * @param {import('../types').State} state
 * @param {import('../types').Message} msg
 * @param {import('../types').Send} send
 */
export function actions(state, msg, send) {

  return Msg.match(msg, {
    updateInputValue: (value) => {
      state.inputValue = value
      return state
    },
    addItem: () => {
      if (state.inputValue) {
        state.items.push({
          key: state.newKey++,
          value: state.inputValue,
          deletable: false
        })
        state.inputValue = ''
        document.querySelector('input').focus()
      } else {
        alert('Please provide a value before adding.')
      }
      return state
    },
    makeDeletable: (key) => {
      state.items = state.items.map(item => {
        if (item.key === key) {
          item.deletable = true
          setTimeout(() => {
            send(deleteItem(key))
          }, 1000)
        }
        return item
      })
      return state
    },
    deleteItem: (key) => {
      state.items = state.items.filter(item => item.key !== key)
      return state
    },
    useFetchedData: data => data
  })
}
