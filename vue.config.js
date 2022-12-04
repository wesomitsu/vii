module.exports = {
    puplicPath: '/vii/',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}