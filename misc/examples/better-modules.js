
import BetterModules from '../BetterModules'

// Test can now be imported in any vue component and used to perform vuex functions without needing mapX functions
import Test from './state'

const registrar = new BetterModules.Registrar()

registrar.registerModule(Test)

export default BetterModules.install(registrar)
