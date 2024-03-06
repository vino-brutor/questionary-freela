const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    calculating: './src/calculating.js',  
    reset: './src/reset.js'
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].min.js'
  },

  mode: 'production',

  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    },   {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
      
    }]
  },

  plugins: [
    new MiniCssExtractPlugin()
  ]
}