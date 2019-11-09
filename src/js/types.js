/**
 * This file contains global types that you can use through your projedt.
 * As your project grows in complexity, you can store types here to use elsewhere.
 * When importing types from here, you'll need to use relative paths.
 * If you examine the `app.js` file, you'll find how we do this there.
 * Providing JSDoc type definitions gives you realtime type linting in VSCode.
 * This project is set up to do that already using TypeScript in the background.
 * You can also run a type test at any time from the command line: `npm run checkjs`
 * You can learn more about how to define your JavaScript's type information
 * in the following articles:
 * 1. https://medium.com/@trukrs/javascript-type-linting-5903e9e3625f
 * 2. Example projects: https://github.com/composi/examples
 * Read the documentation on how to use JSDoc to define types: https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html
 */


// A dummy export so that the type defined here are importable:
export function noop() {}


/**
 * Core types for use with view, update, subscriptions and actions.
 * @typedef {import('@composi/runtime').Message} Message
 * @typedef {import('@composi/runtime').Send} Send
 * @typedef {import('@composi/runtime').Program} Program
 * @typedef {() => State} GetState
 */

/**
 * @typedef {Object} Item
 * @prop {number} key
 * @prop {string} value
 * @prop {boolean} deletable
 */
/**
 * Define your program's state here.
 * @typedef {Object} State
 * @prop {number} newKey
 * @prop {string} inputValue
 * @prop {Item[]} items
 */

/**
 * @typedef {Object} ActionMethods
 * @prop {(value: string) => State} updateInputValue
 * @prop {() => State} addItem
 * @prop {(key: number) => State} makeDeletable
 * @prop {(key: number) => State} deleteItem
 * @prop {(data: State) => State} useFetchedData
 */
/**
 * @typedef {Object} MessageUnion
 * @prop {(msg: Message, object: ActionMethods) => State} match
 * @prop {(value: string) => Message} updateInputValue
 * @prop {() => Message} addItem
 * @prop {(key: number) => Message} makeDeletable
 * @prop {(key: number) => Message} deleteItem
 * @prop {(data: State) => Message} useFetchedData
 */