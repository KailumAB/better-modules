import Registrar from './registrar'
import Module from './module'
import { Store as VuexStore } from 'vuex'
import { ActionContext, GetterContext } from './declarations'

export {
  Module,
  Registrar,
  ActionContext,
  GetterContext
}

export default {
  Registrar,
  install (registrar: Registrar): (store: VuexStore<any>) => void {
    return (store) => {
      registrar.init(store)
    }
  }
}
