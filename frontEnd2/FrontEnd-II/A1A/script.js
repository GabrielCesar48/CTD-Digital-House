/*// Declarando uma variavel

// melhor para escopo global
var name = 'Gabriel Cesar'

// melhor para dentro de funções
let age = 28

// melhor para valores que nao alteram constantemente
const job = 'Analista BI'


console.log('Meu nome é ', name, 'tenho ', age, 'anos ', 'e trabalho como', job);

console.log(age);

console.log(job);

// serve para trabalhar com obtenção de dados por enquanto.
// window.prompt('Olá, qual é o seu nome?');*/


var userName 
userName = window.prompt('Olá, qual é o seu nome?');

const welcomeMessage = 'Ola ' + userName;

// console.log('ola', userName);

alert(welcomeMessage);