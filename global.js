/**
 * global.js
 * 
 * This simple code demonstrates
 * load a module in this case
 * the module "path" by using the 
 * 'require()' method which is available
 * in the global object.
 *
 * The code also shows the use of 
 * the JS template string feature.
 *
 * Finally the code shows the global 
 * variables __dirname and __filename
 */
const path = require("path");

console.log(`The file name is ${path.basename(__filename)}`);

console.log(__dirname);
console.log(__filename);
