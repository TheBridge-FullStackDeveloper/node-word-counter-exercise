const fs = require("fs");

// fs.readFile("hello.txt", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//   });


 const read = fs.readFileSync('sample.txt',"utf-8");
//  console.log (read);
 const content = read.toLocaleLowerCase().replaceAll(".","").replaceAll(",","").replaceAll("-","").split(" ");
//  console.log(content)
//  const array= read.split(" ");
//  const newArray = array.replace(".","");
//  console.log (read);
let javascriptCount = 0;

// content.forEach(element => { if(element === "Javascript"){
//     return javascriptCount ++
// })
// };

content.forEach(element => {
    if(element === "javascript"){
         javascriptCount ++
    }
});

console.log (javascriptCount);
const write = fs.writeFileSync('sample.txt',"utf-8")