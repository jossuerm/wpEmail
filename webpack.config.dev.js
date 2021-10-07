require('dotenv').config();

const path = require('path');

const { plugin, rule, } = require('./webpack/config')

const {
  DEV_PORT: port,
  DEV_ENV: mode,
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
      rule.txtRule,
      rule.cssRule,
      rule.scssRule,
      rule.pugRule,
      rule.jsRule,
    ]
  },
  plugins: [
    plugin.htmlPlugin,
    plugin.cleanPlugin,
    plugin.copyPlugin,
  ]

};