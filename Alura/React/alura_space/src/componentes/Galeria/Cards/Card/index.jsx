import React from "react";
import favorito from "./favorito.png";
import open from "./open.png";

export default function Card({ foto, styles }) {
	return (
		<li key={foto.id} className={styles.galeria__card}>
			<img
				src={foto.imagem}
				alt={foto.titulo}
				className={styles.galeria__imagem}
			/>
			<p className={styles.galeria__descricao}>{foto.titulo}</p>
			<div>
				<p>{foto.creditos}</p>
				<span>
					<img src={favorito} alt="Ícone coração de curtir" />
					<img src={open} alt="Ícone de abrir modal" />
				</span>
			</div>
		</li>
	);
}
