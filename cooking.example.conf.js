var cooking = require('cooking');

cooking.set({
  entry: {
    build: './example/index.js'
  },
  dist: './example/dist',
  publicPath: '/example/dist/',
  template: 'example/index.html',

  devServer: {
    port: 8791,
    hostname: require('my-local-ip')(),
    publicPath: '/',
    log: false
  },

  extends: ['vue2', 'lint', 'saladcss']
});

module.exports = cooking.resolve();