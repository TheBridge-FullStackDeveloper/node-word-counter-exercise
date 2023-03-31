
const fs = require("fs");


const word = fs.readFileSync("sample.txt", "utf8");
const lowerCaseWord = word.toLowerCase();
// Convertir el contenido a minúsculas y eliminar las comas
const content = lowerCaseWord.replaceAll(",", "").split(" ");
 console.log(content);

let javascriptCount = 0;
content.forEach(element => {
  if (element === "javascript") {
    javascriptCount++;
  }
});

// Escribir el resultado 
fs.writeFileSync('count.txt', `The word 'JavaScript' appears ${javascriptCount} times in the text.`);

const count = fs.readFileSync("count.txt", "utf8");

console.log(count);
 


