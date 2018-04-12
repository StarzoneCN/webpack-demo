const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const config = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'inline-source-map'
}

module.exports = merge(commonConfig, config)