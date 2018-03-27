const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "distdev"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "/dist",
        port: 3080,
        historyApiFallback: true
    },
    devtool: 'source-map',
    mode: 'development'
});