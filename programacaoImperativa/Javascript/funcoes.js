
// função declarada
function darOi() {
    console.log('Ola tudo bem?');
}

darOi();

// função expressa
let somar = function (numA, numB) {
    return numA + numB;
};

somar(10,20);


console.log(somar(1,2));


// Escopo
function multiplicar(numA, numB) {
    let resultado = numA * numB;
}