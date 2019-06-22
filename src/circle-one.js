/**
 * @file circle-one
 * @author shuai.li
 */
var circleTwo =  require('./circle-two');

function log(){
  circleTwo.log();
  console.log('wosho one')
}

module.exports={
  log:log,
}

