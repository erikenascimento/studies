export function cartaoFilme_model(cartaz, titulo, nota) {
	return `
<article class="cartaoFilme">
    <span class="cartaoFilme__cartaz ${cartaz}"></span>
    <div class="cartaoFilme__info">
        <h3 class="cartaoFilme__info__titulo">${titulo}</h3>
        <div class="cartaoFilme__info__nota">
            <span class="cartaoFilme__info__nota__icone"></span>
            <span class="cartaoFilme__info__nota__valor">${nota}</span>
        </div>
        <div class="cartaoFilme__info__favoritar">
            <span class="cartaoFilme__info__favoritar__icone"></span>
            <span class="cartaoFilme__info__favoritar__texto">Favoritar</span>
        </div>
    </div>
    <p class="cartaoFilme__descricao">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
    </p>
</article>
`;
}
