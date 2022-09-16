let livros = [];
const endpointDaAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()//sem o await não teria tempo de montar a resposta em json
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livros)
}