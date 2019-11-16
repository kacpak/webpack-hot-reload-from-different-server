const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('extract-css-chunks-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=true',
        path.join(__dirname, './src/index.js')
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hot: true,
                            reloadAll: true
                        },
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};