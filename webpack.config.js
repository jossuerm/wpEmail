require('dotenv').config();

const path = require('path');
const { plugin, rule } = require('./webpack/config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {
    PROD_PORT: port,
    PROD_ENV: mode,
} = process.env;

module.exports = {
    entry: './src/index.js',
    mode,
    devServer: {
        writeToDisk: true,
        port,
        open: true
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    module: {
        rules: [
            rule.imgRule,
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            rule.pugRule,
            rule.jsRule
        ]
    },
    plugins: [
        plugin.htmlPlugin,
        plugin.miniCssExtractPlugin,
        plugin.cleanPlugin,
        plugin.copyPlugin,
    ]


};