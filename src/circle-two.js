/**
 * @file circle-one
 * @author shuai.li
 */

var circleOne = require('./circle-one');

var isDone = false;

function log() {
  console.log('circle-two log')
  if (isDone) return;
  isDone = true;
  circleOne.log();
  console.log('wosho two')
}

module.exports = {
  log: log,
}

