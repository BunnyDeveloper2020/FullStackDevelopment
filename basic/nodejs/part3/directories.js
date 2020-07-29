const fs = require("fs");

//fs.renameSync("./storage-files", "./storage");
fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});
  

fs.rmdir("./storage-files", err => {
    if(err) throw err;

    console.log("./storage-files directory removed");
});