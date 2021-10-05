import { State, state } from './state'
import { getters} from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
import { Module } from '@/BetterModules'
import { Getters, Actions, Mutations } from './interface'

export let mod = new Module<State, Getters, Actions, Mutations>('Test', {
  state,
  getters,
  actions,
  mutations
})

export class Test extends Module<State, Getters, Actions, Mutations> {
  state: State
  getters: Getters
  actions: Actions
  mutations: Mutations
}

// export type Store = VuexStore<State>
// & {
//  commit<K extends keyof Mutations, P extends string> (
//    key: `${P}/${string & keyof Mutations}`,
//    payload: Parameters<Mutations[K]>[1],
//    options?: CommitOptions
//  ): ReturnType<Mutations[K]>
// } & {
//  dispatch<K extends keyof Actions, P extends string> (
//    key: `${P}/${string & keyof Actions}`,
//    payload: Parameters<Actions[K]>[1],
//    options?: DispatchOptions
//  ): ReturnType<Actions[K]>
// } & {
//  getters: {
//    [Key in keyof Getters]: ReturnType<Getters[Key]>
//  }
// }
