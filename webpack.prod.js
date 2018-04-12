const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = {
    mode: 'production',
    plugins: [
        new UglifyJSPlugin()
    ]
}

module.exports = merge(commonConfig, config)