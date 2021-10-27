module.exports = {
  pwa: {
    name: 'marvel',
    themeColor: '#212121'
  }
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Marvel-heroes/'
    : '/'
}