import React from "react";
import styles from "./Favoritos.module.scss";
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useFavoritoContext } from "contexts/Favoritos";

export default function Favoritos() {
	const { favorito } = useFavoritoContext();

	return (
		<>
			<Banner imagem="favoritos" />
			<Titulo>
				<h1>Meus Favoritos</h1>
			</Titulo>
			<section className={styles.container}>
				{favorito.map(fav => {
					return <Card {...fav} key={fav.id} />;
				})}
			</section>
		</>
	);
}
