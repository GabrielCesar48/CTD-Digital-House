function multiplicar(numero1, numero2) {

    var numero1 = parseFloat(prompt('Digite o primeiro numero da multiplicação'));


    while (isNaN(numero1)) {
        alert('Digite um número válido')
        var numero1 = parseFloat(prompt('Digite o primeiro numero da multiplicação'));    
    }

    var numero2 = parseFloat(prompt('Digite o segundo numero da multiplicação'));


    while (isNaN(numero2)) {
        alert('Digite um número válido')
        var numero2 = parseFloat(prompt('Digite o segundo numero da multiplicação'));

    }


    if (numero1 || numero2 === 0) {
        alert('O resultado é: ' + 0)
    } else {

        var multiplicacao = numero1 * numero2;
        alert('O resultado é: ' + multiplicacao)

    }

    
}