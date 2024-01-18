const fs = require("fs");
const path = require("path");
const folderPath = "./01-read-file";
const file = "text.txt";
const filePath = path.join(folderPath, file);
const textStream = fs.createReadStream(filePath, "utf-8");
textStream.on("data", (chunk) => console.log(chunk));