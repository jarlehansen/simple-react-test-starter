const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'source-map',
  entry: `${__dirname}/src/App.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.tmpl.html`
    })
  ],
  devServer: {
    contentBase: './dist',
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};

module.exports = config;
