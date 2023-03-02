
function dividir(numero1, numero2) {

    var numero1 = parseFloat(prompt('Digite o primeiro numero da divisao'));


    while (isNaN(numero1)) {
        alert('Digite um número válido')
        var numero1 = parseFloat(prompt('Digite o primeiro numero da divisao'));    
    }


    var numero2 = parseFloat(prompt('Digite o segundo numero da divisao'));

    if (numero2 === 0) {

        alert('Não se pode dividir por 0')
        var numero2 = parseFloat(prompt('Digite o segundo numero da divisao'));
    }


    while (isNaN(numero2)) {
        alert('Digite um número válido')
        var numero2 = parseFloat(prompt('Digite o segundo numero da divisao'));
        if (numero2 === 0) {

            alert('Não se pode dividir por 0')
            var numero2 = parseFloat(prompt('Digite o segundo numero da divisao'));
        }    
    }

    var divisao = numero1 / numero2;
    alert('O resultado é: ' + divisao);    
}