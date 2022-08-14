//Temos a seguinte sequência de números:
const numeros = [3,2,11,20,8,7];
/* Sua tarefa: criar uma nova lista com a mesma quantidade de números, mas cada elemento da nova lista deve ter seu valor dobrado quando for ímpar.

ATENÇÃO: a lista numeros não pode ser alterada! Você pode resolver do jeito que desejar, o mais importante é o resultado.*/

let numerosDobrados = []

numeros.forEach(numero => {
    numerosDobrados.push(numero += numero * (numero%2))
})

console.log("🚀 ~ file: mapaDaMina.js ~ line 13 ~ numerosDobrados", numerosDobrados)