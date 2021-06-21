module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  css: {
      extract: false,
    },
  chainWebpack: config =>{
    config.output.filename('$PROJECT_NAME.js')
  }
}
