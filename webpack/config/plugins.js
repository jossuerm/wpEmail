const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugin = {
    htmlPlugin: new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve('src', 'index.pug'),
        title: 'WebPack 5',
        data: require('../../src/boilerplate/data/data.json')
    }),
    cleanPlugin: new CleanWebpackPlugin({
        protectWebpackAssets: false,
        cleanAfterEveryBuildPatterns: ['*.LICENSE.txt']
    }),
    // {cleanOnceBeforeBuildPatterns: ['**/*',path.join(process.cwd(), 'build/**/*') //Remove content of a specific folder in this case : build]}
    copyPlugin: new CopyWebPackPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, '../../src/assets/images'),
                to: path.resolve(__dirname, '../../dist/images'),
            },
        ],
    }),
    miniCssExtractPlugin: new MiniCssExtractPlugin({
        filename: 'style.css'
    }),

}


module.exports = plugin;