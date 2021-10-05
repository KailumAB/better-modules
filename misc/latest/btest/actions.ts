import { Actions } from './interface'

export const actions: Actions = {
  incrementCounter(context, payload) {
    context.commit('incrementCounter', payload)
  },
  anotherAction(context, payload) {
    context.commit('incrementCounter', payload)
  },
  testAction() {
    return 'test'
  }
}
