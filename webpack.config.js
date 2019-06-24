/**
 * @file webpack.config.js
 * @author shuai.li
 */
module.exports = {
  entry: () => {
    return new Promise((resolve) => {
      const files = {
        'main': ['./src/index.js'],
        'add': './src/add.js',
        // 'vendor': ['lodash'],
      };
      resolve(files)
    });
  },
  output: {
    filename: '[name].js'
  },
  mode: 'development',
  optimization: {
    namedModules: false,
    splitChunks: {
      chunks: 'all',
    }
  },
  // devtool: 'nosources-source-map',

};
