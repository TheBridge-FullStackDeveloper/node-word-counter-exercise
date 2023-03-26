// El módulo fs se utiliza para leer y escribir archivos. Para usarlo, debe solicitarlo en la parte superior de su archivo:
const fs = require("fs");
// El método readFileSync lee el archivo que le indicamos en el primer parámetro.
const read = fs.readFileSync('sample.txt', "utf-8");
// 1º Eliminar de sample.txt signos de puntuación, mayusculas y convertirlo en array con split. 
const content = read.toLocaleLowerCase().replaceAll(".", "").replaceAll(",", "").replaceAll("-", "").split(" ");
// 2º Variable contador para la función forEach.
let javascriptCount = 0;
// 3º Funcion forEach para recorrer el array creado con sample.txt e ir sumando en la variable anterior cuantas veces está la palabra "javascript"
content.forEach(element => {
    if (element === "javascript") {
        javascriptCount++
    }
});
//Crear nuevo archivo llamado count.txt con el metodo de node writeFileSync , y volcar la cadena de texto que se indica en el segundo parámetro concatenando la variable contador. 
const write = fs.writeFileSync('count.txt', "The word 'JavaScript' appears " + javascriptCount + " times in the text.")
console.log(write)