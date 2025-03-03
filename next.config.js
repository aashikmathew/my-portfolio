module.exports = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio-main' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio-main/' : '',
  }