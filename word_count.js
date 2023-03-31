
//En el archivo, requiere el fsmódulo
const fs = require('fs');


//Lee el archivo sample.txty almacena el contenido en una variable y usa el readFileSyncmétodo)

const text = fs.readFileSync('sample.txt', 'utf-8');


//Divida el contenido del archivo en una matriz de palabras utilizando el método split

const words = text.split(/\s+/);


//Elimine toda la puntuación de las palabras utilizando el método replace

const cleanWords = words.map(word => word.replace(/[^\w\s]|_/g, '').toLowerCase());


//Cuente cuántas veces aparece la palabra "JavaScript" en el archivo utilizando el método filter y length

const jsCount = cleanWords.filter(word => word === 'javascript').length;


//Escriba los resultados en un nuevo archivo llamado count.txt utilizando el método writeFileSync

fs.writeFileSync('count.txt', `The word "JavaScript" appears ${jsCount} times in the text.`);



