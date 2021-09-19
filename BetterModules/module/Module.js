import Container from '../container/Container'

export default class Module {
    static $namespace = null

    static $state = {}
    static $getters = {}
    static $mutations = {}
    static $actions = {}

    static $store = null

    static store () {
      if (this.$store) {
        return {
          ...this.$store,
          namespaced: true
        }
      }
      return {
        namespaced: true,
        state: this.$state,
        getters: this.$getters,
        mutations: this.$mutations,
        actions: this.$actions
      }
    }

    static namespace (method) {
      return `${this.$namespace}/${method}`
    }

    /**
     * Call Vuex Getters.
     */
    static state () {
      return Container.store.state[this.$namespace]
    }

    /**
     * Call Vuex Getters.
     */
    static getters (method) {
      return Container.store.getters[this.namespace(method)]
    }

    /**
     * Dispatch Vuex Action.
     */
    static dispatch (method, payload) {
      return Container.store.dispatch(this.namespace(method), payload)
    }

    /**
     * Commit Vuex Mutation.
     */
    static commit (method, payload) {
      Container.store.commit(this.namespace(method), payload)
    }
}
