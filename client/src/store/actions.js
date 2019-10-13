const actions = {
  setFileName: ({commit, state}, newFileName) => {
    return commit('SET_FILENAME', newFileName)
  },
  setMenuVisible: ({commit, state}, menuVisible) => {
    return commit('SET_MENUVISIBLE', menuVisible)
  }
}

export default actions