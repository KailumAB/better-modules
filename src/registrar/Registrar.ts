import { Store as VuexStore } from 'vuex'
import { Module } from '../declarations'

export default class Registrar {
    modules: Module[] = []
    static store: VuexStore<any>

    init (store: VuexStore<any>): void {
      Registrar.store = store

      this.registerModules()
    }

    registerModule (stateModule: Module): void {
      this.modules.push(stateModule)
    }

    registerModules (): void {
      this.modules.forEach((module) => {
        Registrar.store.registerModule(module.$namespace, module.module())
      })
    }
}
