import React, { useContext } from "react";
import styles from "./Favoritos.module.scss";
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { FavoritosContext } from "contexts";

export default function Favoritos() {
	return (
		<>
			<Banner imagem="favoritos" />
			<Titulo>
				<h1>Meus Favoritos</h1>
			</Titulo>
			<section className={styles.container}>
				<Card titulo="Erik" capa="https://github.com/erikenascimento.png" />
			</section>
		</>
	);
}

export function useFavoritoContext() {
	const { favorito, setFavorito } = useContext(FavoritosContext);

	function adicionarFavorito(novoFavorito) {
		const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

		let novaLista = [...favorito];

		if (!favoritoRepetido) {
			novaLista.push(novoFavorito);
			return setFavorito;
		}

		novaLista.splice(novaLista.indexOf(novoFavorito), 1);
		return setFavorito(novaLista);
	}

	return {
		favorito,
		adicionarFavorito,
	};
}
