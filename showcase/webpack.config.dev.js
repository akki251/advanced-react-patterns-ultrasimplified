const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const crypto = require('crypto');
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = (algorithm) =>
  crypto_orig_createHash(algorithm == 'md4' ? 'sha256' : algorithm);
module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 4646,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'source-map',
});
