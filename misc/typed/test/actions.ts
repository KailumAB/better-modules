import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Mutations } from './mutations'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, any>, 'commit'>

export interface Actions {
  incrementCounter(context: AugmentedActionContext, payload: number): void
}

export const actions: ActionTree<State, any> & Actions = {
  incrementCounter(context, payload) {
    context.commit('incrementCounter', payload)
  }
}
