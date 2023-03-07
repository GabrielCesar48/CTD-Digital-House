// let btMudaCor = document.querySelectorAll('.bt-muda-cor')

// for (let i = 0; i < btMudaCor.length; i++) {

//     btMudaCor[i].addEventListener('click', function() {

//         this.style.color = prompt('Escolha a cor do texto');
//         this.style.background = prompt('Escolha a cor do texto');
        
//     })
    
// }


// let titulo = document.querySelector('#titulo')

// titulo.addEventListener('mouseover', function () {
//     console.log('voce passou o mouse')
// })


// apertar a tecla (keydown) com uma função

document.addEventListener('keydown', function (apertar) {
    if (apertar.key === 'q') {
        console.log('Apertei a tecla q')
    }
})


// SOLTAR A TECLA (KEYUP) COM UMA FUNÇÃO

document.addEventListener('keyup', function(soltar) {
    if (soltar.key === 'w') {
        console.log('soltou a tecla w')
        
    }
})


const teclado = document.querySelector('.teclado')

teclado.addEventListener('keydown', e => {
    if (e.key === 'r') {

        alert('opa! você nao pode usar a letra R')
        e.preventDefault()
        
    }
})