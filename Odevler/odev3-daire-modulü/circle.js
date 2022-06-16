let pi = 3.1415

// daire alan hesaplama formülü
function circleArea(value) {
    console.log(`Dairenin alanı : ${pi * value * value}`);
}


// daire çevre hesaplama formülü
function circleCircumference(value) {
    console.log(`Dairenin çevresi : ${2 * pi * value}`)
}

module.exports = {
    circleArea,
    circleCircumference
}