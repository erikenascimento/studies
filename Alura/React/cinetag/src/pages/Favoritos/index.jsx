import React from "react";
import styles from "./Favoritos.module.scss";
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";

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
