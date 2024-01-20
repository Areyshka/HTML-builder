const fs = require("fs");
const path = require("path");
const textPath = path.join("./02-write-file", "textWrite.txt");
const {stdin, stdout} = process;
fs.open(textPath, "w", (err, fd) => {
    if (err) {
        console.log(err);
    }
});
stdout.write("Hello! Write something, otherwise press the ctrl + c or entering 'exit' into the console and the process terminates.\n");
stdin.on("data", (data) => {
    const text = data.toString().trim();
    if (text === "exit") {
    stdout.write("Bye!\n");
    process.exit(0);
} else {
    fs.appendFile(textPath, `${text}\n`, (err) => {
        if (err) {
            console.log(err);
        };
    });
    stdout.write("Write something, otherwise press the ctrl + c or entering 'exit' into the console and the process terminates.");
};
});
process.on("SIGINT", () => {
    stdout.write("Bye!\n");
    process.exit(0);
});



