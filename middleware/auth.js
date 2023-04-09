export default function({ store, redirect }) {
  console.log(store.getters['test/getTodo'])
  // eslint-disable-next-line no-constant-condition
  if (1 > 2) {
    return redirect('/inspire')
  }
}
