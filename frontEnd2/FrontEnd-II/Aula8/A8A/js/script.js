let btMudaCor = document.querySelectorAll('.bt-muda-cor')

for (let i = 0; i < btMudaCor.length; i++) {

    btMudaCor[i].addEventListener('click', function() {

        this.style.color = prompt('Escolha a cor do texto');
        this.style.background = prompt('Escolha a cor do texto');
        
    })
    
}


let titulo = document.querySelector('#titulo')

titulo.addEventListener('mouseover', function () {
    console.log('voce passou o mouse')
})