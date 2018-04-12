const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}

module.exports = merge(commonConfig, config)