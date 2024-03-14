/*
Crie uma variável contendo uma frase. Em seguida, exiba
no console o comprimento da frase e a mesma frase 
em constras maiúsculas.
*/

const frase = "isso é uma frase";

console.log("tamanho da frase:", frase.length);
console.log("frase maíuscula:", frase.toUpperCase());

/*
Declare duas variáveis, uma inicializada com valor null 
e outra que não recebe atribuição (resultando em
undefined). Exiba os valores no console.
*/

const variavelNull = null;
let variavelUndefined;

console.log("variavelNull:", variavelNull);
console.log("variavelUndefined:", variavelUndefined);

/*
Crie 3 variáveis de tipos diferentes, utilize template
strings para combinar os diferentes tipos de dados
(number, string, boolean) em uma única string e exiba o
resultado no console.
*/

const variavelNumber = 123;
const variavelString = "uma string";
const variavelBool = true;

console.log(`${variavelNumber} ${variavelString} ${variavelBool}`);

/*
Crie uma variável numérica e uma string. Faça a conversão
da variável numérica para string e da string para número.
Exiba os tipos de dados resultantes no console.
*/

let umaNumerica = 456;
let umaString = "oi";

umaNumerica = String(umaNumerica);
umaString = parseInt(umaString);

console.log("tipo umaNumerica:", typeof umaNumerica);
console.log("tipo umaString:", typeof umaString);

/*
Crie uma variável com uma string e utilize métodos de
manipulação de strings, como toUpperCase, toLowerCase,
slice ou outros, para modificar a string original.
Exiba os resultados finais no console.
*/

let outraString = "Clamor";

outraString = outraString.toUpperCase();
console.log("outraString:", outraString);

outraString = outraString.toLowerCase();
console.log("outraString:", outraString);

outraString = outraString.slice(2);
console.log("outraString:", outraString);
