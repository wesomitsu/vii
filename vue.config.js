module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vii/'
      : '/'
  }

// module.exports = {
//     puplicPath: '/vii/',
//     chainWebpack: config => {
//         config.module.rules.delete('eslint');
//     }
// }