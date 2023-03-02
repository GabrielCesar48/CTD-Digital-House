

function somar(numero1, numero2) {

    var numero1 = parseFloat(prompt('Digite o primeiro numero da soma'));

    while (isNaN(numero1)) {
        alert('Digite um número válido')
        var numero1 = parseFloat(prompt('Digite o primeiro numero da soma'));    
    }


    var numero2 = parseFloat(prompt('Digite o segundo numero da soma'));

    while (isNaN(numero2)) {
        alert('Digite um número válido')
        var numero2 = parseFloat(prompt('Digite o segundo numero da soma'));    
    }

    let soma = numero1 + numero2;
    alert('O resultado é: ' + soma);    
}


