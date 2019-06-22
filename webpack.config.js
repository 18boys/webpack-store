/**
 * @file webpack.config.js
 * @author shuai.li
 */
module.exports = {
  // entry: './src/index.js',
  // output: {
  //   filename: 'bundle.js'
  // },
  mode: 'development',
  optimization: {
    namedModules: false,
  },
  devtool: 'nosources-source-map',

};
