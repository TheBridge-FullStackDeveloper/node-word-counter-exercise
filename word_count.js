
const fs = require("fs");

const fileContent = fs.readFileSync("sample.txt","utf8");

const contentArray = fileContent.replaceAll(".", "").replaceAll(",", "").split(" ");

const appearCount = (word, array) => {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        word === array[i] && counter++;
    }

    return `The word ${word} appears ${counter} times in the text`;
}

const stringResult = appearCount("JavaScript", contentArray);

console.log(stringResult);

fs.writeFileSync("count.txt", stringResult);
