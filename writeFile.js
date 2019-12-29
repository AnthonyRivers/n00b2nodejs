const fs = require("fs");

const md = `
# This is a new file.

We can write text to a file with fs.writeFile().
We have cover the following:

* fs.readdir
* fs.readFile

and now 

* fs.writeFile

`;

fs.writeFile("./assets/notes.md", md.trim(), (err) => {
	if(err){
		throw err;
	}

});
