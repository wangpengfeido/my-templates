const path = require('path');
const { merge } = require('webpack-merge');
const commonWebpackConfig = require('./webpack.config.common');

module.exports = merge(commonWebpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    host: '0.0.0.0',
    open: true,
    port: 8081,
    public: 'localhost:8081',
    historyApiFallback: true,
  },
});
