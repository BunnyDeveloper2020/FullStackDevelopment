const path = require("path");
const { log } = require("util");
const { getHeapStatistics } = require("v8");

log(getHeapStatistics());

// const util = require("util");
// const v8 = require("v8");

// util.log(v8.getHeapStatistics());

// util.log(path.basename(__filename));

// util.log("^ The name of the current file");

// const dirUploads = path.join(__dirname, "www", "files", "uploads");

// console.log(dirUploads);