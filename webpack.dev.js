const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
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
    ]
}

module.exports = merge(commonConfig, config)