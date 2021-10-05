import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  doubledCounter(state: State): number,
  additionalCounter(state: State): (additional: number) => number,
}

export const getters: GetterTree<State, any> & Getters = {
  doubledCounter: (state) => {
    return state.counter * 2
  },
  additionalCounter: (state) => (additional) => {
    return state.counter + additional
  }
}
