const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  //livrosFiltrados checará se a categoria do livro é igual a 'disponivel' se for, filtrará os livros por sua disponibilidade, caso não seja, filtrará pela categoria adequada ao botão clicado
  let livrosFiltrados =
    categoria == "disponivel"
      ? livros.filter((livro) => livro.quantidade > 0)
      : livros.filter((livro) => livro.categoria == categoria);
  exibirOsLivrosNaTela(livrosFiltrados);
}
