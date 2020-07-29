const fs = require("fs");

//Sync
fs.renameSync("./assets/colors.json", "./assets/colorData.json");


//Async
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if(err) throw err;
});

setTimeout(() => {
    fs.unlinkSync("./assets/alex.jpg");
}, 4000);