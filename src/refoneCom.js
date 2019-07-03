/**
 * @file index
 * @author shuai.li
 */

var add = require('./addCommon')
add.add();
add.log();
add.init++;
console.log('init-com in ref',add.init);
// init++;
// console.log('init++',init);

