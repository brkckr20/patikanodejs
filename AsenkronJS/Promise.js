/* const promise1 = new Promise((resolve, reject) => {
    resolve("VERİLER BAŞARIYLA ALINDI..."); //işlemin başarılı olma durumu
    reject("BAĞLANTI HATASI...");              //işlemin başarısız olma durumu
});

//console.log(promise1);

promise1.then(value => { //işlem başarılı
    console.log(value);
}).catch(error => {
    console.log(error) // İŞLEM SIRASINDA HATA OLMASI DURUMU
}); */



/******************************************************************************** */

const books = [
    {
        name: "Kitap 1",
        author: "Yazar 1"
    },
    {
        name: "Kitap 2",
        author: "Yazar 2"
    },
    {
        name: "Kitap 3",
        author: "Yazar 3"
    }
];

const bookList = () => {
    books.map(book => {
        console.log(book.name)
    })
}

// bookList();

const addBook = (newBook) => {
    const promise2 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
      //reject("Bir hata var");
    })

    return promise2;
}


addBook({ name: "Kitap 5", author: "Yazar 5" })
    .then(() => {
        console.log("Yeni liste");
        bookList();
    })
    .catch(err => {
        console.log(err);
    });

