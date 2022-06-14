//  ASAL SAYILAR -> 1 ve kendisine bölünecek ve 1 den büyük tam sayılar.

const arguments = process.argv.slice(2);

function showPrimeNumber(lowNumber, highNumber) {
    for (let i = lowNumber; i < highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0 && i !== j) {
                isPrime = false
            }
        }
        if (isPrime) {
            console.log(i)
        }
    }
}

showPrimeNumber(parseInt(arguments[0]),parseInt(arguments[1]));

// console.log(process.argv.slice(2)); komut satırında parametre olarak girmek

