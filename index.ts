import Registrar from './registrar/Registrar'
import Module from './module/Module'
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
