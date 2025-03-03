module.exports = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio-main/' : '',
  }