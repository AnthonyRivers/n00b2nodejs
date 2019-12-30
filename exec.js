const cp = require("child_process");

cp.exec("firefox https://m.facebook.com");

cp.exec("ls", (err,data) =>{
	if(err){
		throw err;
	}

	console.log(data);
});


