const fs = require("fs");


//DOSYA OKUMA İŞLEMLERİ
fs.readFile("pass.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Dosya okuma : ", err)
    }
    console.log(data);
    console.log("Dosya okuma işlemi başarılı...");
})


//DOSYA YAZMA İŞLEMLERİ
fs.writeFile('ornek.txt', 'Kodlamaya devam 2', 'utf8', (err) => { //istediğimiz formatta dosya olusturulabilir.
    if (err) console.log(err);
    console.log("Dosya olusturma islemleri basarili...")
})


fs.writeFile('ornek.json', '{"name" : "Burak"}', 'utf8', (err) => { //istediğimiz formatta dosya olusturulabilir.
    if(err) console.log(err);
    console.log("Dosya olusturma islemleri basarili...")
})


// VERI EKLEME ISLEMLERI
fs.appendFile('ornek.txt', '\nDeneme yazısı 2', 'utf8', (err) => { //istediğimiz formatta dosya olusturulabilir.
    if (err) console.log(err);
    console.log("Yeni veri eklendi...")
})


//DOSYA SİLME İŞLEMLERİ
fs.unlink("ornek.json", (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Sİlme işlemi başarılı...")
})



//KLASÖR OLUŞTURMA İŞLEMLERİ

fs.mkdir("uploads/img", { recursive: true }, (err) => {
    if (err) console.log(err);
    console.log("Klasör oluşturma işlemi başarılı...")
})


//KLASÖR SİLME İŞLEMLERİ
fs.rmdir("uploads", { recursive: true }, (err) => {
    if (err) console.log(err);
    console.log("Klasör silme işlemi başarılı...")
})