const fs = require("fs");

const text = fs
  .readFileSync("sample.txt", { encoding: "utf8", flag: "r" })
  .replaceAll(".", "");

const text2 = text.replaceAll(",", "");

const arr = text2.split(" ");

let counter = () => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "JavaScript") result++;
  }
  return result;
};
console.log(counter());

fs.writeFileSync(
  "count.txt",
  `The Word "JavaScript" appears ${counter()} times in the text`
);
