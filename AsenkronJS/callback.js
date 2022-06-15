/* console.log("1. görev");
console.log("2. görev");
console.log("3. görev"); */


/* const fun1 = () =>{
    console.log("fun1 ok");
};

const fun2 = () =>{
    console.log("fun2 ok");
};

fun2()
fun1() */

/* const fun1 = () =>{
    console.log("fun1 ok");
    fun2();
};

const fun2 = () =>{
    console.log("fun2 ok");
    fun3();
};

const fun3 = () =>{
    console.log("fun3 ok");
}; 


fun1();

*/
/* 
const fun1 = () => {
    console.log("fun1 ok");
    fun3();
};

const fun2 = () => {
    console.log("fun2 ok");
};

const fun3 = () => {
    console.log("fun3 ok");
    fun2();
}; */
// fun1();


/**/////////// */

/* let x = 5;

x = 10;

console.log(x); */


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

const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
}

//bookList();

addBook({ name: "Kitap 4", author: "Yazar 4" }, bookList);

