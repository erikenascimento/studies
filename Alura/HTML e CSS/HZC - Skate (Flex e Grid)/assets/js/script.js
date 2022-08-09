const menuHamburguer = document.querySelector('.cabecalho__menu')
const barraLateral = document.querySelector('.menuLateral')

menuHamburguer.addEventListener("click", () => {
    barraLateral.classList.toggle('classeAtivo')
})