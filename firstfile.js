/**
 * First file to demonstrate
 * how to execute a file in nodejs.
 * This simple file shows that a
 * nodejs file is just a JavaScript file.
 * 
 * The file can be executed with or without the .js extension.
 * Node will assume it's a .js file.
 *
 * node firstfile.js
 *
 * 
 */

// this is just a JavaScript file that node can execute
let hello = "Hello World!";

/**
 * Instead of displaying in 
 * the browser this will display 
 * in the terminal.
 * 
 * console is part of the global object so console.log()
 * can also be called global.console.log().
 *
 * This means that any of the objects, values, and methods
 * that are part of the global object are available to use
 * in any files in nodejs.
 */
console.log(hello);


