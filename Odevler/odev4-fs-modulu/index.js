const fs = require("fs");

fs.readFile("employees.json","utf8",(err,data) =>{
    if(err) console.log(err);
    console.log(data);
})

fs.writeFile("employees.json", `{"name" : "Burak 2", "salary" : "1000"}`,"utf8",(err)  => {
    if(err) console.log(err);
    console.log("Dosya güncellendi");
})

fs.unlink("employees.json",err =>{
    if (err) {
        console.log(err)
    };
    console.log("Dosya başarıyla silindi...");
})