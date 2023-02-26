let produtosParaCompra = ['arroz', 'feijão', 'carne', 'ovos', 'abacaxi']


// .JOIN()
console.log('O metodo .join() junta os elementos de um array em uma unica string, se nao especificar o separador ele vem separado por virgulas, mas podemos usar traços  ( - )  opcionalmente');

console.log(produtosParaCompra.join() + ' ' + '**** Sem passar o separador');

console.log(produtosParaCompra.join(' - ') + ' ' + '**** usando um separador -');

console.log('----------------------------------------------')
// --------------------------------------------------------------

// .POP()

console.log('O método .pop() elimina o ultimo elemento de um array, retorna o elemento eliminado e não recebe parametro, veja a seguir =>')

let eliminadoUltimo = produtosParaCompra.pop();

console.log(produtosParaCompra);
console.log(eliminadoUltimo);

console.log('----------------------------------------------')
// --------------------------------------------------------------

// .PUSH()

console.log ('O .push() adiciona elementos no final do Array, ele recebe como parametro os elementos a serem adicionados e depois retorna o novo comprimento do array. Vejamos a seguir =>');

produtosParaCompra.push('Macarrão', 'Alho');

console.log(produtosParaCompra);

console.log('----------------------------------------------')
// --------------------------------------------------------------

// .SHIFT()

console.log('O .shift() elimina o primeiro elemento de um array, ele nao recebe parametro e retorna o elemento eliminado, conforme veremos a seguir =>');

let eliminaPrimeiro = produtosParaCompra.shift();

console.log(eliminaPrimeiro);
console.log(produtosParaCompra);

console.log('----------------------------------------------')
// --------------------------------------------------------------

// .UNSHIFT()

console.log('O .unshift() Adiciona um ou mais elementos no começo de um array, ele recebe os elementos no parametro e retorna o novo comprimento do array conforme veremos a seguir =>');

produtosParaCompra.unshift('Batata', 'Cebola');

console.log(produtosParaCompra);