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

  }
}
export default book