
let nome = localStorage.getItem('nome')

if (nome === null) {    
    nome = prompt('Digite seu nome:');
}


let spanNome = document.querySelector('#nome')


spanNome.innerText = nome;

localStorage.setItem('nome', nome)