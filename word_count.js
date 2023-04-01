//let texto ="Node.js is an open-source, cross-platform, server-side JavaScript runtime environment. It was developed by Ryan Dahl in 2009 and has since gained widespread popularity due to its ease of use and powerful features. Node.js allows developers to write server-side code using JavaScript, which is a language typically associated with client-side web development. This means that developers can now use a single language, JavaScript, to write both client-side and server-side code, making the development process more efficient and streamlined. Node.js is particularly well-suited for building scalable, high-performance web applications and APIs, and has been adopted by companies such as Netflix, LinkedIn, and PayPal."

const fs  = require("fs");


const callBack = (err, data) => {
  if(err) {
   console.error(err);
   return;
  }
  console.log("good")

data = data.toLowerCase();

let palabras = data.split(" ");

 for(let i = 0; i < palabras.length; i++) {
  palabras[i] = palabras[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
 }

  let contador = 0;
 for(let i = 0; i < palabras.length; i++) {
  if(palabras[i] === "javascript") {
    contador++;
  }
}

fs.writeFileSync("count.txt", "La palabra 'javascript' aparece " + contador + " veces en el texto.") 

console.log("el fichero se guardo")





}

fs.readFileSync("sample.txt", "utf8", callBack);










