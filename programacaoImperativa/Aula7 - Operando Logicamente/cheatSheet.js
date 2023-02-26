/* ==========================
ATRIBUIÇÃO
========================== */

// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

let idade = 40

/* ==========================
ARITMÉTICOS
========================== */

// Nos permitem fazer operações matemáticas

10 + 15 //---> Soma
10 - 15 //---> Subtração
10 * 15 //---> Multiplicação
10 / 15 //---> Divisão
15++    //---> Incremento de um em um: 15 + 1
15--    //---> Decremento de um em um: 15 - 1
15 % 5  //---> Módulo. O resto obtido da divisão de 15 por 5: 0
15 % 2  //---> Módulo. O resto obtido da divisão de 15 por 2: 1

/* ==========================
COMPARAÇÃO SIMPLES
========================== */

// Comparam dois valores, devolvem verdadeiro e falso.

10 == 15 // Igualdade => false
10 != 15 // Desigualdade => True

/* ==========================
COMPARAÇÃO ESTRITA
========================== */

// Comparam o valor e o tipo de dado também.

10 === "10" // Igualdade estrita => false
10 !== 15 // Desigualdade estrita  => true

/* ==========================
OPERADORES RELACIONAIS
========================== */

15 > 15 // Maior que => false
15 >= 15 // Maior ou igual a => true
10 < 15 // Menor que => true
10 <= 15 // Menor ou igual a => true


/* ==========================
LÓGICOS
========================== */

// Permitem combinar valores booleanos e seu resultado ao mesmo tempo, também é um booleano
// Existem três operadores: e (and), ou (or), negação (not).

// AND (&&) => Todos os valores devem ser avaliados como true (verdadeiro) para que o resultado seja verdadeiro.

(10 > 15) && (10 != 20)  // False
// False  ------ true = false

(12 % 4) && (12 != 24) // true
// True  ------- true = true

// OR  (||) => ao menos um valor deve ser avaliado como true para que o resultado seja true.

(10 > 15) || (10 != 20)  // true
// False ------ True  = true

(12 % 5 == 0) && (12 != 12) // false
// False -------  False  = false

// NOT (!) => nega a condução. Se era true, será false e vice-versa.

!false // true
!(20 > 15) // false.