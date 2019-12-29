const fs = require("fs");
/**
 *
 * the contents of a directory can be read by using readdirSync() from the fs module.
 * this function is executing synchronously blocking the current process
 * which means that JavaScript is going to stop everything it's doing until the 
 * files within the directory are read before processing any more lines of code.
 */
console.log("started reading files");
const files = fs.readdirSync("./assets");
console.log("completed");

console.log(files);
