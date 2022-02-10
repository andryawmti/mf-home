module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('as-')
        }
      }))
  },
  configureWebpack: {
    externals: [
      'single-spa-vue',
      'vue',
      '@niagahoster/components',
      /^@niagahoster\/memberarea-mf-.+/,
    ]
  }
};
