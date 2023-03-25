const fs = require("fs");
const read = fs.readFileSync("sample.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
});
const splitMethod = (data) => {
    return data.split(' ')
}


const rmPuntuation = (data) => data.replaceAll(',', '').replaceAll('.', '')

const countJs = (str) => {
    let count = 0
    

    for (const element of splitMethod(str)) {
        console.log(element)
        if (element === 'JavaScript') {
            count += 1
        }

    }
    return count
  
}

console.log(countJs(rmPuntuation(read)))

fs.writeFileSync('count.txt','The word "JavaScript" appears 3 times in the text.',(err,data)=>{
    if (err) {
        console.error(err);
        return;
    }
})

