import Container from './container/Container'
import Registrar from './registrar/Registrar'
import Module from './module/Module'

export {
  Module,
  Registrar
}

export default {
  Registrar,
  install (registrar) {
    return (store) => {
      registrar.init(store)
      Container.register(store)
    }
  }
}
