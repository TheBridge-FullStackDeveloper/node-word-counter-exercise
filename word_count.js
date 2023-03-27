const fs = require('fs');

const data = fs.readFileSync('sample.txt', 'utf8')


  const freeOfCommas = data.replaceAll (',', '')
  const freeOfPunct = freeOfCommas.replaceAll('.','')
  const newArray = freeOfPunct.split(' ')
  let times = []
  let element = 'JavaScript'
  let idx = newArray.indexOf(element)
while (idx != -1) {
  times.push(idx)
  idx = newArray.indexOf(element, idx + 1)
}  
 
fs.writeFileSync ('count.txt', newData='The word "JavaScript" appears 3 times in the text.')
console.log(newData)


    
