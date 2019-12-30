const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorem-ipsum.md", "UTF-8");

console.log("type something . . .");

let fileTxt = "";

process.stdin.on("data", data => {
	console.log(`I read ${data.length - 1} characters of text.`);
});

readStream.on("data", data => {
	console.log(`I read ${data.length - 1} characters of text.`);
	fileTxt += data;
});

readStream.once("data", data =>{
	console.log(data);
});

readStream.on("end", () => {
	console.log("finished reading file");
	console.log(`In total I read ${fileTxt.length - 1} characters of text.`);
});
