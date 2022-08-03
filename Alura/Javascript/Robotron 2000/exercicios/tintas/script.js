const lista = document.querySelector(".lista")
const botao = document.querySelector(".botao")
const textoMostrar = 'Mostrar Aluratintas em estoque:'
const textoEsconder = 'Esconder Aluratintas em estoque:'

botao.addEventListener("click", () => {
    if(botao.textContent == textoMostrar) {
        lista.setAttribute("data-lista", "mostrar");
        botao.textContent = textoEsconder
        return
    }
    if (botao.textContent == textoEsconder) {
        lista.setAttribute("data-lista", "esconder");
        botao.textContent = textoMostrar
        return
    }
});