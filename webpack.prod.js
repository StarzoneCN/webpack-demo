const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new UglifyJSPlugin()
    ]
}

module.exports = merge(commonConfig, config)