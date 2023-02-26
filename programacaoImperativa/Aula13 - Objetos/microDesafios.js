/* 
Objetos Literais
Como vimos, os objetos são uma das estruturas mais importantes da programação, tanto que há toda uma área dedicada à programação baseada neles, para entender um pouco mais por que eles são tão úteis e importantes, vamos realizar uma série de práticas para fortalecer melhor as particularidades e utilidades que vêm com eles.
Descrição do problema
A partir de um banco eles entram em contato conosco para criar um aplicativo que possa facilitar o manuseio de informações e facilitar as ações que ele precisa. 
Nosso líder de tecnologia nos pede para pensar em como representar usuários, ou contas bancárias, em vez disso. Cada uma dessas contas tem as seguintes informações:
●	Número da conta (somente números)
●	Tipo de conta (conta corrente ou poupança em $)
●	Saldo em $ (valor apenas)
●	Titular da conta (nome completo)
 */

// 1.	Pense na melhor forma de representar tais contas, e por quê? (discutir coma equipe sobre as diferentes estruturas e qual é a mais conveniente)


// 2.	Uma vez decidido qual será o tipo de dados para representar as contas das contas, crie uma conta de teste e verifique se as propriedades mencionadas acima são criadas corretamente.

let banco = {
    nrConta: 000000
    tpConta: 'poupança'
    sdCliente: 500
    tituConta: 'Gabriel Cesar Pereira'
}

// 3.	Agora que sabemos como representar usuários e suas contas, o cliente nos forneceu uma lista de contas que devemos ser capazes de criar. Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente. 

function Contas(numeroConta, tipoConta, saldoCliente, titularConta ) {
    this.nrConta = numeroConta
    this.tpConta = tipoConta
    this.sdCliente = saldoCliente
    this.tituConta = titularConta
}


