const book = {
  state: {
    fileName: '',
    menuVisible: false
  },
  mutations: {
    'SET_FILENAME': (state, newFileName) => {
      state.fileName = newFileName
    },
    'SET_MENUVISIBLE': (state, menuVisible) => {
      state.menuVisible = menuVisible
    }
  },
  actions: {
    setFileName: ({commit, state}, newFileName) => {
      return commit('SET_FILENAME', newFileName)
    },
    setMenuVisible: ({commit, state}, menuVisible) => {
      return commit('SET_MENUVISIBLE', menuVisible)
    }
  }
}
export default book