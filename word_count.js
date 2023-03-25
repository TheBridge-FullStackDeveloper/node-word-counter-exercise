const fs = require('fs');

try {
  const data = fs.readFileSync('sample.txt', 'utf8'); // Read the file
  const cleanedData = data.replace(/[.,]/g, ''); // remove periods and commas
  const words = cleanedData.split(' '); // split the text into an array of words
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === 'javascript') { 
      count++;
    }
  }
  const output = `The word "Javascript" appears ${count} times in the file.`;
  fs.writeFileSync('count.txt', output); // write the results to a new file
  console.log('Results written to count.txt.');
} catch (err) {
  console.error(err);
}
