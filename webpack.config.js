/**
 * @file webpack.config.js
 * @author shuai.li
 */

var copyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: () => {
    return new Promise((resolve) => {
      const files = {
        // 'main': ['./src/index.js'],
        'entry': './src/entry.js',
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
            loader: 'style-loader',
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
    new copyPlugin([
      {from: 'static', to: 'static'},
      {from: 'index.html', to: 'index.html'},
    ])
  ]
};
