
export default class Registrar {
    modules = []

    init (store) {
      this.store = store

      this.registerModules()
    }

    registerModule (stateModule) {
      this.modules.push(stateModule)
    }

    registerModules () {
      this.modules.forEach((module) => {
        this.store.registerModule(module.$namespace, module.store())
      })
    }
}
