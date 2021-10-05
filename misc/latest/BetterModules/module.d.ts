import { GenericStore } from './store'

export interface Module {
  module: () => GenericStore,
  $module: GenericStore,
  $namespace: string
}
