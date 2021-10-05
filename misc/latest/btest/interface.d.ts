import { State } from './state'
import { ActionTree, GetterTree } from 'vuex'
import { GetterContext, ActionContext } from '@/BetterModules/store'

type GContext = GetterContext<Getters>

export interface Getters {
  doubledCounter(state: State, getters: GContext): number,
  additionalCounter(state: State): (additional: number) => number,
}

type AContext = ActionContext<Mutations, Actions, Getters, State>

export interface Actions {
  incrementCounter(context: AContext, payload: number): void
  anotherAction(context: AContext, payload: number): void
  testAction(context: AContext, payload: string): string
}

export type Mutations = {
  incrementCounter(state: State, payload: number): void
}
