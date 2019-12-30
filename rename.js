const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorData.json");

// can also be used to move files.
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
	if(err){
		throw err;
	}
});

setTimeout(()=>{
	fs.unlinkSync("./yop.jpg");
},4000);
