import Registrar from './registrar'
import Module from './module'
import { Store as VuexStore } from 'vuex'

export {
  Module,
  Registrar
}

export default {
  Registrar,
  install (registrar: Registrar): (store: VuexStore<any>) => void {
    return (store) => {
      registrar.init(store)
    }
  }
}
