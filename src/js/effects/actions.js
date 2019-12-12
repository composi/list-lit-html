import { match, DeleteItem } from './messages'

/**
 * @param {import('../types').State} state
 * @param {import('../types').Message} msg
 * @param {import('../types').Send} send
 */
export const actions = (state, msg, send) => match(msg, {
  AddItem: () => {
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
  DeleteItem: (key) => {
    state.items = state.items.filter(item => item.key !== key)
    return state
  },
  MakeDeletable: (key) => {
    state.items = state.items.map(item => {
      if (item.key === key) {
        item.deletable = true
        setTimeout(() => {
          send(DeleteItem(key))
        }, 1000)
      }
      return item
    })
    return state
  },
  UpdateInputValue: (value) => {
    state.inputValue = value
    return state
  },
    UseFetchedData: data => data
  }
)
