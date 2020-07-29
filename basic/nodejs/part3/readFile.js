const fs = require("fs");

//Async
fs.readFile("./assets/alex.jpg", (err, img) => {

    if(err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log("File contents read");
    console.log(img);
});

//text
// fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
//     console.log("File contents read");
//     console.log(text);
// });

// Sync
// const text = fs.readFileSync("./assets/Readme.md", "UTF-8");

//console.log(text);