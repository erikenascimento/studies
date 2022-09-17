export const partialize = (fn, ...args) => fn.bind(null, ...args);

export const pipe =
	(...fns) =>
	valorInicial =>
		fns.reduce((previousValue, fn) => fn(previousValue), valorInicial);

export const compose =
	(...fns) =>
	valorInicial =>
		fns.reduceRight((previousValue, fn) => fn(previousValue), valorInicial);
//usando reduceRight para que a composição de funções funcione vindo da direita para a esquerda

export const takeUntil = (times, fn) => () => times-- > 0 && fn();
// sintaxe acima é um truqe para simular a sintaxe abaixo
//if (times-- > 0) fn();
//dessa forma será checado se times-- é maior que zero, caso seja, também checará a próxima condição que é uma chamada de função, isso é feito já que uma arrow function sem escopo só aceita um parametro
