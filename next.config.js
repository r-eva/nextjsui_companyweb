
// const withCSS = require('@zeit/next-css')

module.exports = {
  images: {
    loader: 'default',
    domain: 'http://localhost:1337',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
}

// module.exports = withCSS({
//   cssLoaderOptions: {
//     url: false
//   }
// });
