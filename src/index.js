/**
 * @file index
 * @author shuai.li
 */

// var sayHello = require('./sayHello.js').default;
import sayHello, { name } from './sayHello.js';
// import './refone';
// import './reftwo';
// import './refoneCom';
// import './reftwoCom';
// import './refthreeCom';

import {log} from './circle-one';
log();

sayHello();

// console.log('name', name);
// console.log('single', single, a);


