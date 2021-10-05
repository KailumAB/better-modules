import { Mutations } from './interface'

export const mutations: Mutations = {
  incrementCounter(state, payload) {
    state.counter = payload
  }
}
