// A partir de um banco eles entram em contato conosco para criar um aplicativo que possa facilitar o manuseio de informações e facilitar as ações que ele precisa.
// Nosso líder de tecnologia nos pede para pensar em como representar usuários, ou contas bancárias, em vez disso. Cada uma dessas contas tem as seguintes informações:
// 1. Número da conta
// 2. Tipo de conta (corrente ou poupança em $)
// 3. Saldo em $ (valor apenas)
// 4. Titular da conta (nome completo)
//
// com essa informação em mente, devemos fazer o seguinte:
 
// 1. Pense na melhor forma de representar tais contas, e por quê? Objetos literais?
 
let contas = {
    numero: 0,
    tipo: '',
    saldo: 0,
    titular: ''
}
 
function AdicionaConta(contaNumero, contaTipo, contaSaldo, contaTitular) {
    this.numero = contaNumero;
    this.tipo = contaTipo;
    this.saldo = contaSaldo;
    this.titular = contaTitular;
}
 
// 2. Uma vez decidido qual será o tipo de dados para representar as contas das contas, crie uma conta de teste e verifique se as propriedades mencionadas acima são criadas corretamente.
 
let novaConta = new AdicionaConta(20405506, 'corrente', 100, 'João de Almeida da Silva');
 
// console.log(novaConta);
 
// 3. Agora que sabemos como representar usuários e suas contas, o cliente nos forneceu uma lista de contas que devemos ser capazes de criar. Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente.
 
// console.log(new AdicionaConta(5486273622, 'Corrente', 27771, 'Abigael Natte'));
// console.log(new AdicionaConta(1183971869, 'Poupança', 8675, 'Ramon Connell'));
// console.log(new AdicionaConta(9582019689, 'Poupança', 27363, 'Jarret Lafuente'));
// console.log(new AdicionaConta(1761924656, 'Poupança', 32415, 'Ansel Ardley'));
// console.log(new AdicionaConta(7401971607, 'Poupança', 18789, 'Jacki Shurmer'));
// console.log(new AdicionaConta(630841470, 'Corrente', 28776, 'Jobi Mawtus'));
// console.log(new AdicionaConta(4223508636, 'Corrente', 2177, 'Thomasin Latour'));
// console.log(new AdicionaConta(185979521, 'Poupança', 25994, 'Lonnie Verheijden'));
// console.log(new AdicionaConta(3151956165, 'Corrente', 7601, 'Alonso Wannan'));
// console.log(new AdicionaConta(2138105881, 'Poupança', 33196, 'Bendite Huggett'));
 
 
// 4. A partir dos 10 usuários, gere uma lista onde todos eles convergem (lista de objetos)
let listaContas = [];
 
listaContas.push(new AdicionaConta(5486273622, 'Corrente', 27771, 'Abigael Natte'));
listaContas.push(new AdicionaConta(1183971869, 'Poupança', 8675, 'Ramon Connell'));
listaContas.push(new AdicionaConta(9582019689, 'Poupança', 27363, 'Jarret Lafuente'));
listaContas.push(new AdicionaConta(1761924656, 'Poupança', 32415, 'Ansel Ardley'));
listaContas.push(new AdicionaConta(7401971607, 'Poupança', 18789, 'Jacki Shurmer'));
listaContas.push(new AdicionaConta(630841470, 'Corrente', 28776, 'Jobi Mawtus'));
listaContas.push(new AdicionaConta(4223508636, 'Corrente', 2177, 'Thomasin Latour'));
listaContas.push(new AdicionaConta(185979521, 'Poupança', 25994, 'Lonnie Verheijden'));
listaContas.push(new AdicionaConta(3151956165, 'Corrente', 7601, 'Alonso Wannan'));
listaContas.push(new AdicionaConta(2138105881, 'Poupança', 33196, 'Bendite Huggett'));
// console.log(listaContas);
 
// 5. Também nos pedem a criação de um objeto literal chamado banco que terá uma propriedade chamada clientes, e ele será composto pela lista de objetos gerados no passo anterior.
 
let banco = {
    clientes: listaContas,
 
    consultarCliente: function(contaTitular) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titular == contaTitular) {
                return this.clientes[i];
            }
        }
    }
}
 
console.log(banco.consultarCliente('Thomasin Latour'));