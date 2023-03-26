const fs = require("fs");

const contents = fs.readFileSync('sample.txt', 'utf-8').replace(/[^\w\s]/g, '').toLowerCase().split(/\s+/);

const wordCounts = {};
let javascriptCount = 0;

contents.forEach(word => {
  if (word === 'javascript') {
    javascriptCount++;
  }
  wordCounts[word] = (wordCounts[word] || 0) + 1;
});

fs.writeFileSync('count.txt', `The word "javascript" appears ${javascriptCount} times in the text.`);
