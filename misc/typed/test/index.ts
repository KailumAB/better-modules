import { createStore, Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'

import { State, state } from './state'
import { Getters, getters} from './getters'
import { Mutations, mutations } from './mutations'
import { Actions, actions } from './actions'

export default createStore({
  state,
  getters,
  actions,
  mutations
})

export type Store = Omit<VuexStore<State>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof Mutations> (
    key: K,
    payload: Parameters<Mutations[K]>[1],
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions> (
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}
