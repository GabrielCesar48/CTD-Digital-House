
//Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function adicionar(a,b) {
    return a + b
}


// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtracao(a,b) {
    return a - b
}

// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao(a,b) {
    return a * b
}

//Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function divisao(a,b) {
    return a / b
}

console.log("------------ Teste de Operações da Calculadora ------------")

// Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.

console.log(adicionar(5,5));

console.log(subtracao(5,5));

// Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.

console.log(multiplicacao(5,5));

// Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.

console.log(divisao(5,5));

// Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.

console.log(divisao(5,0));

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
// Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

function quadradoDoNumero (a) {
    return multiplicacao (a, a)
};

console.log (quadradoDoNumero(5));

// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
// Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function mediaDeTresNumeros (a, b, c) {
    return (a + b + c) / 3
};

console.log (mediaDeTresNumeros(5,5,5))


// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
//Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 

function calculaPorcentagem (total, porcentagem) {
    return  porcentagem/100*total;
}

console.log (calculaPorcentagem(300,15));


// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
//Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).

function geradorDePorcentagem (a, b) {
    return (a * 100) / b 
}

console.log (geradorDePorcentagem(2,200));

