import { State } from './state'
import { MutationTree } from 'vuex'

export type Mutations<S = State> = {
  incrementCounter(state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  incrementCounter(state, payload) {
    state.counter = payload
  }
}
