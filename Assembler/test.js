const assembler = require("../Assembler");
const fs = require("fs");

var designData = JSON.parse(fs.readFileSync("test-template.json", 'utf8'));
var mergeData = JSON.parse(fs.readFileSync("test-data.json", 'utf8'));


console.log(assembler.render(mergeData, designData));

