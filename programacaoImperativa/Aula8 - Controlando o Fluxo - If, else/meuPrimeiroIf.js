
// If, else if, else

let idade = 19;
let acesso = '';

if (idade < 16) {
    acesso = 'Acesso proibido';
} else if (idade >= 16 && idade <= 18) {
    acesso = 'Acesso liberado somente com acompanhante maior de idade';
}
console.log (acesso);


// Exercicios

//Exercicio 01 : Com este exercício, vamos construir um if simples.

//Declare uma variável com o nome status. Atribua a ela um valor booleano: (true ou false).

// Em seguida, faça um if que avalie o valor contido nesta variável. Se o valor armazenado for true, imprima a seguinte mensagem no console: O valor é true - verdadeiro. Caso contrário, imprima a mensagem: O valor é false - falso.


let status = !true

if (status) {
    console.log ('O valor é true - verdadeiro')
} else {
    console.log ('O valor é false - falso')
}


// Exercicio 02 : Vamos brincar com as condições!

// Crie uma variável chamada linguagem, que terá uma string atribuída a ela. Em seguida, construa uma condicional if/else para que, se a variável estiver armazenando o valor "javascript", ela deve imprimir no console, o texto: "Estou aprendendo". Contudo, caso a variável esteja armazenando qualquer outra linguagem, imprima "Aprenderei mais tarde".


let linguagem = 'javascript'

if (linguagem == 'javascript') {
    console.log('Estou aprendendo')
} else {
    console.log('Aprenderei mais tarde.')
};

let idade2 = 12;

switch (idade2) {
    case 10:
        console.log('Tem 10 anos')
        break;
    case 5:
        console.log('Tem 5 anos')
        break;
    default:
        console.log('Ninguém liga')
}

