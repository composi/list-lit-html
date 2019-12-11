import { union } from '@composi/runtime'

/** @type {import('../types').MessageUnion} */
const Msg = union(
  'updateInputValue',
  'addItem',
  'makeDeletable',
  'deleteItem',
  'useFetchedData'
)
export const {
  match,
  updateInputValue,
  addItem,
  makeDeletable,
  deleteItem,
  useFetchedData
} = Msg
