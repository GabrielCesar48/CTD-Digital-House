
// Definindo as constantes para as jogadas
const PEDRA = 1;
const PAPEL = 2;
const TESOURA = 3;

// Função para exibir uma mensagem formatada na tela
function exibirMensagem(mensagem) {
  alert(`\n${mensagem}\n`);
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

  }}


  jogarJokenpo();
  solicitarJogadaUsuario();