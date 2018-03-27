const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["./src/index.tsx"],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: { 'react': path.resolve(__dirname, './node_modules', 'react') }
    },
    module: {
        rules: [
            {
                test: /\.ts|tsx$/,
                exclude: /node_modules/,
                loader: ["ts-loader"]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                },{
                    loader: "sass-loader"
                }],
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.tsx$/,
                exclude: /node_modules/,
                loader: "source-map-loader"
            },
            {
                test: /\.(svg|png)$/,
                loader: "url-loader"                
            },
            {
                test: /\.json&/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}