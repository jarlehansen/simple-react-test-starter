var webpack = require('webpack');

var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  config.set({
    basePath: 'src/',
    browsers: [ 'PhantomJS' ],
    frameworks: [ 'mocha'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'progress' ],
    webpack: webpackConfig,
    colors: true,
    singleRun: false,
    webpackMiddleware: {
      noInfo: true
    }
  });
};
