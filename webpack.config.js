const path = require('path')
const cleanWebpack = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist/"
    },
    plugins: [
        new cleanWebpack(['dist'])
    ]
}