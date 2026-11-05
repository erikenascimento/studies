/*
Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta
bancária, depois realize operações de adição e subtração entre eles utilizando uma
variável chamada operacao, considerando a função de cada variável
criada anteriormente. Exiba os resultados finais no console.
*/
const saldo = 100;
const deposito = 20;
const saque = 10;
const operacao = saldo + deposito - saque;

console.log("operacao:", operacao);
/*
Crie uma variável numérica com um valor. Utilize um operador ternário para verificar
se esse valor é par ou ímpar. Exiba o resultado no console.
*/
const variavelNumerica = 1;

variavelNumerica % 2 == 0 ? console.log("é par") : console.log("é impar");
/*
Considere uma situação em que você está verificando se um usuário está logado e tem
permissão de administrador para acessar determinada funcionalidade. Utilize variáveis
booleanas para simular essas condições e use o operador AND para verificar se ambas
são verdadeiras.
*/
const usuarioLogado = true;
const usuarioAutorizado = false;

console.log("usuario permitido? ", usuarioLogado && usuarioAutorizado);
/*
Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos
uma delas é verdadeira. Exiba o resultado no console.
*/
const variavelBooleana1 = true;
const variavelBooleana2 = false;

console.log("a variável booleana é ", variavelBooleana1 || variavelBooleana2);
/*
Imagine um sistema que determina se um usuário tem idade suficiente para comprar
o ingresso para um show. Declare duas variáveis que determinem a idade mínima e 
qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar
se o usuário pode realizar a compra.
*/
const idadeMinima = 18;
const idadeUsuario = 20;

if (idadeUsuario >= idadeMinima) {
	console.log("compra autorizada");
} else {
	console.log("compra não autorizada");
}
