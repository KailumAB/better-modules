import { Getters } from './interface'

export const getters: Getters = {
  doubledCounter: (state, getters) => {
    console.log('additional', getters.additionalCounter(3))

    return state.counter * 2
  },
  additionalCounter: (state) => (additional) => {
    return state.counter + additional
  }
}
