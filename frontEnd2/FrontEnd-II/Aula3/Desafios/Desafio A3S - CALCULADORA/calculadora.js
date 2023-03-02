function operacaoDesejada() {
    var operacaoEscolhida = parseInt(prompt('Qual operação matematica vocês gostaria de fazer? \n1 = Somar \n2 = Subtrair  \n3 = Dividir \n4 = Multiplicar'))
    
    while (isNaN(operacaoEscolhida)) {
        alert('Digite um número referente a operação matemática desejada')
        var operacaoEscolhida = parseInt(prompt('Qual operação matematica vocês gostaria de fazer? \n1 = Somar \n2 = Subtrair  \n3 = Dividir \n4 = Multiplicar'))  
    }

    switch (operacaoEscolhida) {
        case 1:
            somar(); // chama a função somar() do arquivo somar.js
            break;
        case 2:
            subtrair(); // chama a função subtrair() de outro arquivo se houver
            break;
        case 3:
            dividir(); // chama a função dividir() de outro arquivo se houver
            break;
        case 4:
            multiplicar(); // chama a função multiplicar() de outro arquivo se houver
            break;
        default:
            alert('Operação inválida');
            break;
    }
}

operacaoDesejada();









