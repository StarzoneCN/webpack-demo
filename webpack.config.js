const path = require('path')

module.exports = {
    entry: {
        "print": "./src/print.js",
        "app": "./src/index.js"
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist/"
    }
}