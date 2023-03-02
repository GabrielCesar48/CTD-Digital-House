



function subtrair(numero1, numero2) {

    var numero1 = parseFloat(prompt('Digite o primeiro numero da subtracao'));

    while (isNaN(numero1)) {
        alert('Digite um número válido')
        var numero1 = parseFloat(prompt('Digite o primeiro numero da subtracao'));    
    }


    var numero2 = parseFloat(prompt('Digite o segundo numero da subtracao'));

    while (isNaN(numero2)) {
        alert('Digite um número válido')
        var numero2 = parseFloat(prompt('Digite o segundo numero da subtracao'));    
    }

    var subtracao = numero1 - numero2;
    alert('O resultado é: ' + subtracao);    
}