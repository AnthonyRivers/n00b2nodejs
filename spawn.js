const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

/**
 * All 3 questions can be asnwers by writing to the stream
 * directly instead of waiting for input in the terminal.
 * 
 * questionApp.stdin.write("Antonio\n");
 * questionApp.stdin.write("Yuma\n");
 * questionApp.stdin.write("Change the world\n");
 */
questionApp.stdout.on("data", data =>{
	console.log(`from the question app: ${data}`);	
});

questionApp.on("close", () => {
	console.log(`questionApp process exited`);
});

