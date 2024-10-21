const path = require("node:path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = {
    // mode 
    mode: "production",
    // entry file 
    entry: "./src/app.js",
    // output file
    output: {
        // path.resole is node js code or path.join
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js"
    },
    // plugins
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles/main.css" // go in to the and create file dist/styles/main.css and hash file
        }),
        new HtmlWebpackPlugin({ template: "/pages/index.html", minify: true }), // fix hash css and js files and build html file in dist folder
        new EslintWebpackPlugin() // eslint options
    ],
    // loaders
    module: {
        rules: [
            // add css modules 
            {
                test: /\.css$/i, // regex
                use: [MiniCssExtractPlugin.loader, "css-loader"] // ["1" , "0"]
            },
            // add sass modules
            {
                test: /\.s[ac]ss$/i, // regex
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            // add png svg png jpg jpeg modules
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/i, // regex
                type: "asset/resource"
            },
            // add fonts modules
            {
                test: /\.(woff|woff2|eot|ttf|tof)$/i, // regex
                type: "asset/resource"
            },
            // add ts modules
            {
                test: /\.tsx?$/, // regex
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            // add babel modules
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "ie 11" }]
                        ]
                    }
                }
            }
        ]
    },
    // optimization
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin(),
        ],
    },

};