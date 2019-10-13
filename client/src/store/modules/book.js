const book = {
  state: {
    fileName: ''
  },
  mutations: {
    'SET_FILENAME': (state, newFileName) => {
      state.fileName = newFileName
    }
  },
  actions: {
    setFileName: ({commit, state}, newFileName) => {
      return commit('SET_FILENAME', newFileName)
    }
  }
}
export default book