import { union } from '@composi/runtime'

/** @type {import('../types').MessageUnion} */
const Msg = union(
  'AddItem',
  'DeleteItem',
  'MakeDeletable',
  'UpdateInputValue',
  'UseFetchedData'
)
export const {
  match,
  AddItem,
  DeleteItem,
  MakeDeletable,
  UpdateInputValue,
  UseFetchedData
} = Msg
