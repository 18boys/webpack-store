/**
 * @file index.js
 * @author shuai.li
 */
var webpack = require('webpack');
// var webpackConfig = require('../webpack.config.js');
webpack({}, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log('打包失败:', err, stats.toString())
  }
});
