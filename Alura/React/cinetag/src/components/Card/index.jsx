import React from "react";
import styles from "./Card.module.scss";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { useFavoritoContext } from "contexts/Favoritos";

export default function Card({ id, titulo, capa }) {
	const { favorito, adicionarFavorito } = useFavoritoContext();
	const serFavorito = favorito.some(fav => fav.id === id);
	const icone = serFavorito ? iconeDesfavoritar : iconeFavoritar;

	return (
		<div className={styles.container}>
			<img src={capa} alt={titulo} className={styles.container__capa} />
			<h2>{titulo}</h2>
			<img
				src={icone}
				alt="Favoritar filme"
				className={styles.container__favoritar}
				onClick={() => {
					adicionarFavorito({ id, titulo, capa });
				}}
			/>
		</div>
	);
}
