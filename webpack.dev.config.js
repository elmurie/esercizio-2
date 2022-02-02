const paths = require('./paths');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

const configMerged = merge(common, {
  // Set the mode to development or production
  mode: 'development',
  watch: true,
  // Control how source maps are generated
  // false because use of SourceMapDevToolPlugin
  devtool: false,

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: false,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options:{
              sourceMap: true,
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin()
  ],
  optimization: {
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});

module.exports = configMerged;
