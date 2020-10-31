const state = {
  sidebar: {
    opened: false
  }
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    console.log(state.sidebar.opened);
  }
}

const actions = {
  toggleSidebar({commit}) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}