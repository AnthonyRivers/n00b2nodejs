const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myTextFile.txt", "UTF-8");

const readStream = fs.createReadStream("./assets/lorem-ipsum.md", "UTF-8");


process.stdin.on("data", data =>{
	writeStream.write(data);
});

readStream.on("data", data =>{
	writeStream.write(data);
});

process.stdout.write("hello");
process.stdout.write("world\n");

writeStream.write("hello");
writeStream.write("world\n");


