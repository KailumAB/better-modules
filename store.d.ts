import { ActionContext as VuexActionContext } from 'vuex'

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

export type ActionContext<Mutations, Actions, Getters, State> = {
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

export type GetterContext<Getters> = {
  [K in keyof Getters as K]:ReturnType<Getters[K]>
}
