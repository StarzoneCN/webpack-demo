const path = require('path')
const cleanWabpack = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "webpack-numbers.js",
        path: path.resolve(__dirname, 'dist'),
        library: 'webpackNumbers',
        libraryTarget: 'umd',
        publicPath: "dist/"
    },
    plugins: [
        new cleanWabpack(['dist'])
    ],
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
}