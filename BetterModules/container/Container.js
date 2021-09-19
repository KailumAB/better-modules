export default class Container {
  /**
   * The store instance.
   */
  static store

  /**
   * Register the store instance.
   */
  static register (store) {
    this.store = store
  }
}
