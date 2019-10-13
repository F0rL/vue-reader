const book = {
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1, // -1:不显示，0:字号,1:主题设置,2:进度条,3:目录
    defaultFontSize: 16
  },
  mutations: {
    'SET_FILENAME': (state, newFileName) => {
      state.fileName = newFileName
    },
    'SET_MENUVISIBLE': (state, menuVisible) => {
      state.menuVisible = menuVisible
    },
    'SET_SETTINGVISIBLE': (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    'SET_DEFAULT_FONT': (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    },
  },
  actions: {

  }
}
export default book