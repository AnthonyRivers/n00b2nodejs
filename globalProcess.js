/**
 * globalProcess.js
 * 
 * The process object is available
 * globally. It provides information
 * about the current process as well
 * as tools to allow interaction with
 * the current process.
 */

// Use the process object to get the process ID. 
console.log(process.pid);

// With the process object the version of node can be checked.
console.log(process.versions.node);

// Access the array of arguments when executing this file.
console.log(process.argv);

// destructuring the arguments array to get the firstName
// and lastName passed as arguments when this js file is
// executed.

const [, , firstName, lastName] = process.argv;

console.log(`Your name is ${firstName} ${lastName}.`);

// function to grab the argument value after the flag.
const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
	 
}

// variables that store the value we need from the arguments array.
const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);
