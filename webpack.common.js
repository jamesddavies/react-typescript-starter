const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

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
                loader: ["babel-loader", "awesome-typescript-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    },{
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
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
        }),
        extractSass
    ]
}