import { ActionContext as VuexActionContext } from 'vuex'

export interface Module {
  module: () => GenericStore,
  $module: GenericStore,
  $namespace: string
}

export interface Store<S, G, A, M> extends GenericStore {
  state: S,
  getters: G,
  actions: A,
  mutations: M,
  namespaced?: true
}

export interface GenericStore {
  state,
  getters,
  actions,
  mutations,
  namespaced?: true
}

export type ActionContext<State, Getters extends { [K in keyof Getters as K]: any; }, Actions extends { [K in keyof Actions as K]: any }, Mutations extends { [K in keyof Mutations as K]: any }> = {
  commit<K extends keyof Mutations>(
    commit: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
  dispatch<K extends keyof Actions>(
    action: K,
    payload: Parameters<Actions[K]>[1]
  ): ReturnType<Actions[K]>
  getters: { [K in keyof Getters as K]:ReturnType<Getters[K]> }
  state: State
} & Omit<VuexActionContext<State, State>, 'commit' | 'dispatch' | 'getters' | 'state'>

export type GetterContext<Getters extends { [K in keyof Getters as K]: any; }> = {
  [K in keyof Getters as K]:ReturnType<Getters[K]>
}
