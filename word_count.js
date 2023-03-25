const fs=require("fs")


fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return data;
    }
    const datos=data.toLowerCase().replaceAll(",","").split(" ");
    

    let contador=0;

    datos.forEach((palabra) => {
        if(palabra === "javascript"){
            contador++;
        }
        
    });
    fs.writeFileSync("count.txt", `el texto javascript aparece ${contador} veces en el texto`)
  });


