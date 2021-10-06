import Registrar from '../registrar/Registrar'
import { Store, GenericStore } from '../declarations'
import { Module as ModuleType } from '../declarations'

export default class Module<State, Getters extends { [K in keyof Getters as K]: any; }, Actions extends { [K in keyof Actions as K]: any }, Mutations extends { [K in keyof Mutations as K]: any }> implements ModuleType {

  constructor(namespace: string, module: Store<State, Getters, Actions, Mutations>) {
    this.$namespace = namespace
    this.$module = module
  }

  $namespace: string

  $module: Store<State, Getters, Actions, Mutations>

  module (): GenericStore {
    return {
      ...this.$module,
      namespaced: true
    }
  }

  namespace (method: keyof Getters | keyof Mutations | keyof Actions): string {
    return `${this.$namespace}/${method}`
  }

  /**
   * Access state.
   */
  state (): Readonly<State> {
    return Registrar.store.state[this.$namespace]
  }

  /**
   * Call Vuex Getters.
   */
  getters<K extends keyof Getters>(method: K & string): ReturnType<Getters[K]> {
    return Registrar.store.getters[this.namespace(method)]
  }

  /**
   * Dispatch Vuex Action.
   */
  dispatch<K extends keyof Actions>(method: K & string, payload: Parameters<Actions[K]>[1]): Promise<ReturnType<Actions[K]>> {
    return Registrar.store.dispatch(this.namespace(method), payload)
  }

  /**
   * Commit Vuex Mutation.
   */
  commit<K extends keyof Mutations>(method: K & string, payload: Parameters<Mutations[K]>[1]): void {
    Registrar.store.commit(this.namespace(method), payload)
  }
}
