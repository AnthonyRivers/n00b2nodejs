const fs = require("fs");

console.log("***Reading file contents using readFileSync()***");

/**
 * Using the synchronous method readFileSync() to read the contents
 * of the file. This method blocks the process until it finishes 
 * reading the contents in the file.
 */
const text = fs.readFileSync("./assets/Readme.md", "UTF-8");


console.log(text);

console.log("***Reading the contents of the file asynchronously***");

//using asynchronized readFile() method.
const asynctext = fs.readFile("./assets/Readme.md", "UTF-8", (err, data) =>{
	if(err){
		console.log(`An error has occur: ${err.message}`);
		process.exit();
	}

	console.log("file contents read");	
	console.log(data);
});

/**
 * A binary file can also be read using readFile()
 */
const readimg = fs.readFile("./yop.jpg", (err, data) =>{
	if(err){
		console.log(`An error has occur: ${err.message}`);
		process.exit();
	}

	console.log("image read");	
	console.log(data);
});

