const fs = require("fs");

function writeTheWordInFile(text) {
  fs.writeFile("./count.txt", text, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}

fs.readFile("./sample.txt", "utf8", (err, data) => {
  if (err) {
    return callback(err);
  }
  const word = "JavaScript";

  data = data.replace(/[,\.]/g, "");

  const count = data.split(" ").filter((w) => w === word).length;

  const text = `The word "${word}" appears ${count} times in the text.`;

  writeTheWordInFile(text);
});
