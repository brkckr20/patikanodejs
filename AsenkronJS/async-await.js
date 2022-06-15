function getData(data) {
    return new Promise((resolve, reject) => { // promise dönüyoruz.
        console.log("Veriler alınmaya çalışılıyor..");

        if (data) {
            resolve("Verilen alındı");
        } else {
            reject("Veriler alınamadı");
        }
    });
}

function cleanData(receivedData) { // promise dönüyoruz.
    return new Promise((resolve, reject) => {
        console.log("Veriler düzenleniyor..");

        if (receivedData) {
            resolve("Verilen düzenlendi");
        } else {
            reject("Veriler düzenlenemedi");
        }
    });
}


/* getData(true)
    .then(result => {
        console.log(result);
        return cleanData(false)
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err)
    }); */



/* async - await */
//hatalar için try-catch bloğu kullanılır.

/* async function processData() {
    try {
        const received = await getData(true); //get data işlemini tamamla
        console.log(received);
        const cleaned = await cleanData(false);
        console.log(cleaned);
    } catch (error) {
        console.log(error); // hatanın yakalanması işlemi
    }
}

processData(); */





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


const addBook = (newBook) => {
    const promise2 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        // reject("Bir hata var"); //catch bloğunda yakalanır.
    })

    return promise2;
}


/* addBook({ name: "Kitap 5", author: "Yazar 5" })
    .then(() => {
        console.log("Yeni liste");
        bookList();
    })
    .catch(err => {
        console.log(err);
    }); */




async function showBooks() {
    try {
        await addBook({ name: "Kitap 12", author: "Yazar 12" })
        bookList();
    } catch (error) {
        console.log(error)
    }
}

showBooks()