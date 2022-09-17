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
