const item = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || [] //variável funcionará com um memory card para os itens salvos no localstorage
//lado esquerdo do || checa primeiro se existe algo no local storage, caso não, criará uma string vazia para isso 
//JSON.parse serve para converter de string de volta para array

itens.forEach( (elemento) => { //percorre a array itens para extrair cada item salvo
    criaElemento(elemento) //insere os itens no documento ao carregar a página
})

item.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome'] //atribui a uma variável o campo de nome do documento
    const quantidade = evento.target.elements['quantidade'] //o mesmo para o campo quantidade

    const existe = itens.find( elemento => elemento.nome === nome.value) //checará se o nome digitado já existe na lista salva 

    const itemAtual = { //cria um objeto que irá salvar o nome e a quantidade do item em seus atributos
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id //se existe, adotará o id do item ja existente

        atualizaElemento(itemAtual)

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    } else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0

        criaElemento(itemAtual)//cria o elemento
        itens.push(itemAtual) //o item atual é inserido na string do "memory card"
    }

    localStorage.setItem("itens", JSON.stringify(itens)) // salva o objeto itemAtual no localstorage
    /* Por padrão o JSON que salva o item no localstorage salvará um objeto, JSON.stringify
    transforma esse dado numa string ao invés de um objeto. */

    nome.value = "" //limpa o campo de nome no documento
    quantidade.value = "" //o mesmo pro campo quantidade
})

function criaElemento(item) {
    const novoItem = document.createElement('li') // cria um novo elemento <li>
    novoItem.classList.add("item") //adiciona a classe 'item' nesse elemento

    const qtdItem = document.createElement('strong') //cria um novo elemento <strong>
    qtdItem.innerHTML = item.quantidade //insere a quantidade dentro dessa tag
    qtdItem.dataset.id = item.id //insere o dataset-id no elemento

    novoItem.appendChild(qtdItem) //adiciona o <strong> como filho do <li>
    novoItem.innerHTML += item.nome //insere o nome dentro da tag <li>

    novoItem.appendChild(criaBotao(item.id)) //adiciona o botão no item

    lista.appendChild(novoItem) //insere no document esse elemento criado no js
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function criaBotao(id) { // cria um botão com X ao lado do item
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"

    elementoBotao.addEventListener("click", function() { //para criar o botao com um event listener já que o botao criado não receberá o event listener criado na leitura da página
    //arrow function não é adequada aqui pois ela não carrega o this do js
        deletaElemento(this.parentNode, id) //this.parentNode pois o this se refere ao botao e desejamos deletar o seu pai, o li
    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(itens))
}