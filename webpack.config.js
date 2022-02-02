const paths = require('./paths');

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
    main: paths.indexJs,
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[id].[chunkhash:7].js",
    chunkLoadTimeout: 30000,
    path: paths.build,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
        },
        default: {
          name: 'default',
          minChunks: 2,
          enforce:true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    // Extract css files to separate bundle
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[contenthash:7].css',
    }),
    // Copy fonts and images to dist
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.fonts,
          to: '',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
        {
          from: paths.images,
          to: '',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  module: {
    rules: [
      // Babel-loader
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js','.scss'],
    alias: {
      '@scssFolder' : paths.scss,
      request$: 'xhr',
    },
  },
};
