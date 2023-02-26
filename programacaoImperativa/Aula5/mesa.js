



// Crie uma função que converta polegadas em centímetros. 

function polParaCm (pol) {
     return pol * 2.54
    
   
};

console.log(polParaCm(1));


//Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function strToUrl (texto) {
    return 'http://www.'+texto+'.com.br'
};

console.log(strToUrl('digitalhouse'));

// Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function fraseExclamacao (frase) {
    return frase+'!'
};

console.log(fraseExclamacao('Essa é uma frase'));


// Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function idadeCanina (idadehumana) {
    return idadehumana * 7
};

console.log(idadeCanina(10));

// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

function valorHora (valorSalario) {
    return valorSalario / 160
}

console.log(valorHora(5000));

// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 


function calcImc (peso, altura) {
    return peso / (altura*altura)

}

console.log (calcImc(80, 1.80).toFixed(2));


//  Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz

function minToMai (min) {
    return min.toUpperCase() 
}

console.log (minToMai('texto pequeninin'))


// Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.

function queDadoEEsse (dado) {
    return typeof dado
};

    console.log(queDadoEEsse(85.3));

// Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
//Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

    function circ (raio) {
        return raio * 2 * Math.PI
    }

    console.log(circ(100).toFixed(2));


    