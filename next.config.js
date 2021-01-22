
const withCSS = require('@zeit/next-css')

module.exports = {
  images: {
    loader: 'imgix',
    path: 'http://localhost:1337',
  },
}

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});
