/**
 * @file webpack.config.js
 * @author shuai.li
 */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


const resolve=(p='')=> path.resolve(__dirname, p);
module.exports = {
  context: resolve(),
  entry: () => {
    return new Promise((resolve) => {
      const files = {
        'entry': resolve('./entry.js'),
      };
      resolve(files)
    });
  },
  output: {
    filename: '[name].js',
    publicPath: "/static/jpg/"
  },
  mode: 'development',
  // optimization: {
  //   namedModules: false,
  //   splitChunks: {
  //     chunks: 'all',
  //   }
  // },
  module: {
    rules:[
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use:  [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
          }
        ]
      }
    ]
  },
  devtool: 'cheap-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {from: resolve('./src/sliceTest/index.html'), to: 'index.html'},
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ]
};
