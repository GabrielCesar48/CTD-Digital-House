/* exercicio de 01 a 03*/

let correntista = {
    nrconta: "3207522",
    dvconta: "7",
    tpconta: "poupanca",
    saldo: "350.000",
    nometitular: "Fernanda Ribeiro de Magalhaes",
}

function Correntista(valorNrCont, valorDvCont, valorTpCont, valorSaldo, nomeTitular) {
    this.nrconta = valorNrCont;
    this.dvconta = valorDvCont;
    this.tpconta = valorTpCont;
    this.saldo = valorSaldo;
    this.nometitular = nomeTitular;
}
console.log(correntista);
console.log(new Correntista("3449858", "7", "poupança", "450000,00", "Pedro Guimaraes"));
console.log(new Correntista("6565656", "6", "conta corrente", "550000,00", "Joao Marcio Nogueira"));
console.log(new Correntista("6785944", "4", "poupança", "150000,00", "Tiana Ribeiro"));
console.log(new Correntista("6758940", "5", "conta corrente", "50000,00", "Victor Augusto Lima"));
console.log(new Correntista("7676895", "4", "poupança", "350000,00", "Pedro Arthur Gama"));
console.log(new Correntista("7685900", "3", "conta corrente", "450000,00", "Paulo Medeiro
