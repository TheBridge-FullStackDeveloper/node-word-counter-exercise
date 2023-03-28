// 1 Requiring the FS modulo
const fs = require("fs");

// 2 Reading the file
fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  //3 Reading the file and storing it ad readFileSync
  const readFileSync = data;

  // Showing my sample.txt readed
  console.log(readFileSync);

  // 4 Creating my array
  let arraySample = readFileSync.split(' ');
  console.log( arraySample );
  
  // 5 Removing the punctuation to ''
  let result1 = readFileSync.replaceAll( ",", "" );
  let result2 = result1.replaceAll( ".", "" );

  console.log( result2 );
  let separatingWords = result2.split(' ');
  console.log( separatingWords );

  // 6 Counting how many times we have Javascript
  let acum = 0;
  let wordJs;
    for( let i=0 ; i<=separatingWords.length ; i++ ){
        if( separatingWords[i] === 'JavaScript' ){
            wordJs = separatingWords[i];
            acum = acum + 1;
        }
    }

    let resultCount = `The word ${wordJs} appears ${acum} times in the text `;

    console.log( resultCount )


    // 7 Writting the results to a new file called count.txt
    fs.writeFileSync('count.txt', resultCount);
    console.log('Exercice finished succesfully');
});

