const btnFiltrarLivrosFront = document.getElementById(
  "btnFiltrarLivrosFront"
);
btnFiltrarLivrosFront.addEventListener("click", filtrarLivros);

function filtrarLivros() {
  let livrosFiltrados = livros.filter(
    livro => livro.categoria == "front-end"
  );
  console.table(livrosFiltrados);
}
