
var confirm =

confirm('Você gostaria de jogar o jogo Joken Po?')

function comecarJogo() {

    console.log('O jogo começou')
    
    let jogadaUsuario = Number(prompt('Digite o número da sua jogada sendo: 1 = pedra, 2 = papel, e 3 = tesoura'))

    let jogadaOponente = Math.floor(Math.random() * 3) +1

    console.log(jogadaOponente);
    console.log(Number(jogadaUsuario));

    if (jogadaUsuario === 1 && jogadaOponente === 2) {

        alert('Você perdeu')

    }


}




// console.log(confirm)

if (confirm === true) {
    
 comecarJogo()



} else {
 alert('Obrigado por visitar a página')
}