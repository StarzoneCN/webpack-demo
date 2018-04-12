const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        "print": "./src/print.js",
        "app": "./src/index.js"
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist/"
    }
}