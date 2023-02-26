function Microondas(comida, tempo) {

    switch (comida) {

        case '1 - Pipoca':

            var tempoPadrao = 10

            if (tempo > 2 * tempoPadrao && tempo < 3 * tempoPadrao) {
                console.log('A comida Queimou')
            } else if (tempo < tempoPadrao) {
                console.log("Tempo insuficiente")
            } else if (tempo >= 3 * tempoPadrao) {
                console.log('Kabum')
            } else {
                console.log('Prato pronto, bom apetite!!!')
            }
            break;

        case '2 - Macarrão':

            var tempoPadrao = 8

            if (tempo > 2 * tempoPadrao && tempo < 3 * tempoPadrao) {
                console.log('A comida Queimou')
            } else if (tempo < tempoPadrao) {
                console.log("Tempo insuficiente")
            } else if (tempo >= 3 * tempoPadrao) {
                console.log('Kabum')
            } else {
                console.log('Prato pronto, bom apetite!!!')
            }
            break;

        case '3 - Carne':

            var tempoPadrao = 15

            if (tempo > 2 * tempoPadrao && tempo < 3 * tempoPadrao) {
                console.log('A comida Queimou')
            } else if (tempo < tempoPadrao) {
                console.log("Tempo insuficiente")
            } else if (tempo >= 3 * tempoPadrao) {
                console.log('Kabum')
            } else {
                console.log('Prato pronto, bom apetite!!!')
            }
            break;

        case '4 - Feijão':

            var tempoPadrao = 12

            if (tempo > 2 * tempoPadrao && tempo < 3 * tempoPadrao) {
                console.log('A comida Queimou')
            } else if (tempo < tempoPadrao) {
                console.log("Tempo insuficiente")
            } else if (tempo >= 3 * tempoPadrao) {
                console.log('Kabum')
            } else {
                console.log('Prato pronto, bom apetite!!!')
            }
            break;

        case '5 - Brigadeiro':

            var tempoPadrao = 8

            if (tempo > 2 * tempoPadrao && tempo < 3 * tempoPadrao) {
                console.log('A comida Queimou')
            } else if (tempo < tempoPadrao) {
                console.log("Tempo insuficiente")
            } else if (tempo >= 3 * tempoPadrao) {
                console.log('Kabum')
            } else {
                console.log('Prato pronto, bom apetite!!!')
            }
            break;

        default:            
                console.log('Prato inexistente')
            
    }
}



Microondas('1 - Pipoca', 9) // tempo insuficiende
Microondas('1 - Pipoca', 10) // prato pronto
Microondas('1 - Pipoca', 21) // queimou
Microondas('1 - Pipoca', 30) // kabum

Microondas('2 - Macarrão', 7) // tempo insuficiende
Microondas('2 - Macarrão', 8) // prato pronto
Microondas('2 - Macarrão', 17) // queimou
Microondas('2 - Macarrão', 24) // kabum

Microondas('3 - Carne', 14) // tempo insuficiende
Microondas('3 - Carne', 15) // prato pronto
Microondas('3 - Carne', 31) // queimou
Microondas('3 - Carne', 45) // kabum

Microondas('4 - Feijão', 11) // tempo insuficiende
Microondas('4 - Feijão', 12) // prato pronto
Microondas('4 - Feijão', 25) // queimou
Microondas('4 - Feijão', 36) // kabum

Microondas('5 - Brigadeiro', 7) // tempo insuficiende
Microondas('5 - Brigadeiro', 8) // prato pronto
Microondas('5 - Brigadeiro', 17) // queimou
Microondas('5 - Brigadeiro', 24) // kabum

Microondas('Pizza', 15)