import { union } from '@composi/runtime'

/** @type {import('../types').MessageUnion} */
export const Msg = union('updateInputValue', 'addItem', 'makeDeletable', 'deleteItem', 'useFetchedData')


export const { updateInputValue, addItem, makeDeletable, deleteItem, useFetchedData } = Msg