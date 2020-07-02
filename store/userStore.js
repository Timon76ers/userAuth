export const state = () => ({
  isAuthenticated: false,
  login: null,
  firstName: 'Джон',
  lastName: 'Смит',
  email: 'JohnS@gmail.com'
})

export const actions = {
  async AUTHORIZATION({commit}, login) {
    commit('updateLogin', login)
  },
  async LOG_OUT({commit}) {
    commit('logOut')
  }
}

export const mutations = {
  updateLogin(state, data) {
    state.login = data,
    state.isAuthenticated = true
  },
  logOut(state) {
    state.login = null
    state.isAuthenticated = false
  }
}

export const getters = {
  IS_AUTH: state => state.isAuthenticated,
  LOGIN: state => state.login,
  FULL_NAME: state => `${state.firstName} ${state.lastName}`,
  EMAIL: state => state.email
}