import { Module } from '../BetterModules'

export default class Test extends Module {
  static $namespace = 'test'

  static $state = {
    testVar: 123
  }

  static $getters = {
    getTestVar: (state) => {
      return state.testVar
    },
    getTestVarAdd: (state) => (addition) => {
      return state.testVar + addition
    }
  }

  static $mutations = {
    setTestVar (state, testVar) {
      state.testVar = testVar
    }
  }

  static $actions = {
    async setTestVar (context, payload) {
      context.commit('setTestVar', payload)
    }
  }
}
