export function cartaoFilme_model(titulo, nota, descricao, cartaz = null) {
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
        ${descricao}
    </p>
</article>
`;
}
