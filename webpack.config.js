const path = require('path')

module.exports = {
    entry: {
        "print": "./src/print.js",
        "app": "./src/index.js"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist/"
    }
}