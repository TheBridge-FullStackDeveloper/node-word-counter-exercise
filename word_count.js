const fs = require('fs')

const read = fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
  const split = data.split(" ")
  console.log(split)

  const replace = split.join(" ").replaceAll(".", " ").replaceAll(",", " ")
  console.log(replace)

  let acum = 0;
  let word;
  for (let i = 0; i <= split.length; i++) {
    if (split[i] === 'JavaScript') {
      word = split[i];
      acum = acum + 1;
    }
  }

  let result = `The word ${word} appears ${acum} times in the text `;

  console.log(result)

  fs.writeFileSync('count.txt', result)

});







