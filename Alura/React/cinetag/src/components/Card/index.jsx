import React from "react";
import styles from "./Card.module.scss";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";

export default function Card({ id, titulo, capa }) {
	return (
		<div className={styles.container}>
			<img src={capa} alt={titulo} className={styles.container__capa} />
			<h2>{titulo}</h2>
			<img
				src={iconeFavoritar}
				alt="Favoritar filme"
				className={styles.container__favoritar}
			/>
		</div>
	);
}
