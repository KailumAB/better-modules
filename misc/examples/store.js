import Vue from 'vue'
import Vuex from 'vuex'

import betterModules from './better-modules'

Vue.use(Vuex)

// Configure VueX store
export default new Vuex.Store({
  plugins: [betterModules]
})
