const botao = document.querySelector('#calcular')
const resposta = document.querySelector('.resultado')

botao.addEventListener('click', () => {
    resposta.innerHTML = 'Fui clicado'
})