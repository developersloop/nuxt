export default {
  state: () => ({
    todo: [{ id: 1, name: 'vitor', lastname: 'vicente' }]
  }),
  getters: {
    getTodo: (state: any) => state.todo
  }
}
