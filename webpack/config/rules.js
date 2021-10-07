const rule = {
  imgRule: {
    test: /\.(png|jpg|gif)$/,
    type: 'asset',
    parser: {
      dataUrlCondition: {
        maxSize: 3 * 1024 // 3 kilobytes if(>3) resource || inline
      }
    }
  },
  txtRule: {
    test: /\.txt/,
    type: 'asset/source'
  },
  cssRule: {
    test: /\.css$/,
    use: [
      ((process.env.NODE_ENV === 'production')
        ? MiniCssExtractPlugin.loader
        : 'style-loader'),
      'css-loader'
    ]
  },
  scssRule: {
    test: /\.scss$/,
    use: [
      ('style-loader'),
      'css-loader',
      'sass-loader'
    ]
  },
  pugRule: {
    test: /\.pug$/,
    use: ['pug-loader']
  },
  jsRule: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    }
  },
}


module.exports = rule;