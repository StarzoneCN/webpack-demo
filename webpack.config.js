const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const cleanWebpack = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: [
            'lodash'
        ]
    },
    output: {
        filename: "[name].[chunkhash].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].[chunkhash].bundle.js'
    },
    plugins: [
        new cleanWebpack(['dist']),
        new HTMLWebpackPlugin({
            title: 'Caching'
        })
    ],
    optimization: {
        splitChunks: {
            name: 'manifest'
        }
    }
}