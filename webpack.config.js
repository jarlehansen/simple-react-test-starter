const webpack = require('webpack');
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

if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new HtmlWebpackPlugin({ template: `${__dirname}/src/index.tmpl.html` }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ];
}

module.exports = config;
