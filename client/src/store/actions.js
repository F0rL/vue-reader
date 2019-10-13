const actions = {
  setFileName: ({commit, state}, newFileName) => {
    return commit('SET_FILENAME', newFileName)
  },
  setMenuVisible: ({commit, state}, menuVisible) => {
    return commit('SET_MENUVISIBLE', menuVisible)
  },
  setSettingVisible: ({commit, state}, settingVisible) => {
    return commit('SET_SETTINGVISIBLE', settingVisible)
  },
  setDefaultFontSize: ({commit, state}, defaultFontSize) => {
    return commit('SET_DEFAULT_FONT', defaultFontSize)
  }
}

export default actions