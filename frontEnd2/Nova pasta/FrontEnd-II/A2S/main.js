
/* var confirm = confirm('Você gostaria de jogar o jogo Joken Po?')




var pedra = 1
var papel = 2
var tesoura = 3


function comecarJogo() {

    let jogadaUsuario = Number(prompt('Digite o número da sua jogada sendo: 1 = pedra, 2 = papel, e 3 = tesoura'))

    let jogadaOponente = Math.floor(Math.random() * 3) + 1

    console.log(jogadaOponente);
    console.log(Number(jogadaUsuario));


     

      if (isNaN(jogadaUsuario) || jogadaUsuario < 1 || jogadaUsuario > 3) {

        alert('Digite um número válido')

    } else if (jogadaUsuario === pedra && jogadaOponente === papel
        || jogadaUsuario === papel && jogadaOponente === tesoura
        || jogadaUsuario === tesoura && jogadaOponente === pedra) {

        alert('Você perdeu')

    } else if (jogadaUsuario === jogadaOponente) {
        alert('O jogo está acirrado, nessa rodada deu empate!')
    } else {
        alert("Parabéns você ganhou essa! 🥳")
    } 


}

// console.log(confirm)

function usuarioJoga () {
    while (confirm === true) {

        comecarJogo()
    
    } if (confirm === false) {
        alert('Obrigado por visitar a página')
    }
} */

/*
// Definindo as constantes para as jogadas

const PEDRA = 1;
const PAPEL = 2;
const TESOURA = 3;

// FUNÇÃO PARA EXIBIR UMA MENSAGEM FORMATADA NA TELA

function exibirMensagem(mensagem) {
    console.log(`\n${mensagem}\n`);
  }


// FUNÇÃO PARA SOLICITAR A JOGADA DO USUÁRIO
function solicitarJogadaUsuario() {
    const jogadaUsuario = Number(prompt('Digite o número da sua jogada: 1 (pedra), 2 (papel), 3 (tesoura)'));  


// VERIFICAR SE A JOGADA É VÁLIDA
if (isNaN(jogadaUsuario) || jogadaUsuario < PEDRA || jogadaUsuario > TESOURA) {

    exibirMensagem('Jogada inválida. Tente novamente.')

    return solicitarJogadaUsuario();
} 

    return jogadaUsuario;

} 


// FUNÇÃO PARA ESCOLHER UMA JOGADA ALEATÓRIA PARA O OPONENTE
function escolherJogadaOponente() {
    return Math.floor(Math.random() * 3 + 1);
}

// FUÇÃO PARA DETERMINAR O RESULTADO DA RODADA

function determinaResultado(jogadaUsuario, jogadaOponente) {

    switch (jogadaUsuario) {
        case PEDRA:
            if (jogadaOponente === PAPEL) {
                return "oponente";
            } else if (jogadaOponente === TESOURA) {
                return "usuario";
            }            
            break;

        case PAPEL:
            if (jogadaOponente === PEDRA) {
                return "usuario";
            } else if (jogadaOponente === TESOURA) {
                return "oponente";
            }
            break;

        case TESOURA: 
            if (jogadaOponente === PEDRA) {
                return "oponente";
            } else if (jogadaOponente === PAPEL) {
                return "usuario";
            } 
            break;
    }

    return "empate";
    
}


// função para executar uma rodada do jogo

    function jogarRodada(pontuacao) {
        const jogadaUsuario = solicitarJogadaUsuario();
        const jogadaOponente = escolherJogadaOponente();


        exibirMensagem(`O oponente jogou ${jogadaOponente}.`);

        const resultado = determinaResultado(jogadaUsuario, jogadaOponente);


        switch (resultado) {
            case "usuario":
                exibirMensagem("Você ganhou esta rodada!");
                pontuacao.usuario++;
                break;

            case "oponente":
                exibirMensagem("Você perdeu esta rodada!");
                pontuacao.oponente++;
        
            case "empate":
                exibirMensagem("Enpate nessa rodada!");         
                break;
        }
    }


    // FUNÇÃO PRINCIPAL PARA EXECUTAR O JOGO

        function jogarJokenpo() {

            const pontuacao = {
                usuario: 0,
                oponente: 0
            };


            exibirMensagem("Vamos jogar Jokenpo! O primeiro a vencer 2 rodadas é o ganhador")

            while (pontuacao.usuario < 2 && pontuacao.oponente < 2) {
                jogarRodada(pontuacao);
            }
            
        } */
// Definindo as constantes para as jogadas
const PEDRA = 1;
const PAPEL = 2;
const TESOURA = 3;

// Função para exibir uma mensagem formatada na tela
function exibirMensagem(mensagem) {
  console.log(`\n${mensagem}\n`);
}

// Função para solicitar a jogada do usuário
function solicitarJogadaUsuario() {
  const jogadaUsuario = parseInt(prompt("Digite o número da sua jogada: 1 (pedra), 2 (papel) ou 3 (tesoura)"));

  // Verificar se a jogada é válida
  if (isNaN(jogadaUsuario) || jogadaUsuario < PEDRA || jogadaUsuario > TESOURA) {
    exibirMensagem("Jogada inválida. Tente novamente.");
    return solicitarJogadaUsuario();
  }

  return jogadaUsuario;
}

// Função para escolher uma jogada aleatória para o oponente
function escolherJogadaOponente() {
  return Math.floor(Math.random() * 3) + 1;
}

// Função para determinar o resultado da rodada
function determinarResultado(jogadaUsuario, jogadaOponente) {
  switch (jogadaUsuario) {
    case PEDRA:
      if (jogadaOponente === PAPEL) {
        return "oponente";
      } else if (jogadaOponente === TESOURA) {
        return "usuario";
      }
      break;

    case PAPEL:
      if (jogadaOponente === TESOURA) {
        return "oponente";
      } else if (jogadaOponente === PEDRA) {
        return "usuario";
      }
      break;

    case TESOURA:
      if (jogadaOponente === PEDRA) {
        return "oponente";
      } else if (jogadaOponente === PAPEL) {
        return "usuario";
      }
      break;
  }

  return "empate";
}

// Função para executar uma rodada do jogo
function jogarRodada(pontuacao) {
  const jogadaUsuario = solicitarJogadaUsuario();
  const jogadaOponente = escolherJogadaOponente();

  exibirMensagem(`O oponente jogou ${jogadaOponente}.`);

  const resultado = determinarResultado(jogadaUsuario, jogadaOponente);

  switch (resultado) {
    case "usuario":
      exibirMensagem("Você ganhou esta rodada!");
      pontuacao.usuario++;
      break;

    case "oponente":
      exibirMensagem("Você perdeu esta rodada!");
      pontuacao.oponente++;
      break;

    case "empate":
      exibirMensagem("Empate nesta rodada!");
      break;
  }
}

// Função principal para executar o jogo
function jogarJokenpo() {
  const pontuacao = {
    usuario: 0,
    oponente: 0
  };

  exibirMensagem("Vamos jogar Jokenpo! O primeiro a vencer 2 rodadas é o ganhador.");

  while (pontuacao.usuario < 2 && pontuacao.oponente < 2) {
    jogarRodada(pontuacao);

    