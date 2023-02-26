let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length]);

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])

let str = "uma string qualquer"
let grupoDeAmigos2 = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1])

console.log('----------------------------------------------')
// --------------------------------------------------------------

// Array Invertido

// Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos. 
// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.


function imprimirInverso(array) {
    return array.reverse()
}

var ordemCerta = ['Item1', 'Item2', 'Item3', 'Item4']

console.log(imprimirInverso(ordemCerta))

console.log('----------------------------------------------')
// --------------------------------------------------------------



// somarArray()
// Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
// Exemplo:
// somarArray([1,2,3])                // 6
// somarArray([10, 3, 10, 4])     // 27
// somarArray([-5,100])             // 95


function somarArray([]) {

const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(somarArray.reduce(reducer));
}

somarArray([1, 2, 3])

