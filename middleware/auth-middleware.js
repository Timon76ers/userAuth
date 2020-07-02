export default function({store, redirect}) {
  if (!store.state.userStore.isAuthenticated) return redirect('/login')
}