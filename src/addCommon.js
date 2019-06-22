/**
 * @file add
 * @author shuai.li
 */

var init = 1;

function add() {
  init=init+10;
}

function log() {
  console.log('log com in add', init);
}

module.exports = {
  init: init,
  add: add,
  log: log,
}

