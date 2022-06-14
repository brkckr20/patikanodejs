const pi = 3.14;

const yariCap = process.argv.slice(2);

function daireHesapla(yariCap) {
    const alan = pi * yariCap * yariCap;
    console.log(`Yarıçapı ${yariCap} olan dairenin alanı : ${alan}`)
}

daireHesapla(yariCap);