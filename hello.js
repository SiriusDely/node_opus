// hello.js
//const addon = require('./build/Release/addon');
/*
var addon;

try {
  addon = require('./build/Release/addon.node');
} catch (err) {
  addon = require('./build/Debug/addon.node');
}
*/

const addon = require('bindings')('addon')  

//console.log(addon.hello()); // 'world'

console.log(addon.whoami())  
