import React from "react";
import styles from "./NaoEncontrada.module.scss";

export default function NaoEncontrada() {
	return (
		<section className={styles.container}>
			<h2>Oops!</h2>
			<p>O conteúdo que você procura não foi encontrado</p>
		</section>
	);
}
